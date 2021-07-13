import * as React from 'react';
import { useEffect, useState, useRef } from 'react';
//
import { API_ChatMessage_L } from '../../../../_api/chat/ChatAPI';
//
import ChatMidBody from '../body/_main/ChatMidBody';
import ChatMidFoot from '../foot/_main/ChatMidFoot';
//
import './ChatMid.scss';

//
export interface IChatMidProps {
    ws: { current: null | WebSocket };
}

//
export default function ChatMid({ ws }: IChatMidProps) {
    //
    const [message_state, setMessageState] = useState({
        message_arr: [
            {
                id: 0,
                first_name: '',
                last_name: '',
                picture: '',
                message: '',
                created_time: '',
            },
        ],
        count: 0,
        has_fetched: false,
        is_fetching: false,
    });

    const { message_arr, has_fetched, is_fetching } = message_state;

    //
    const ref_chat_body_elm = useRef(null);
    const ref_chat_foot_elm = useRef(null);

    const ref_fetching = useRef(false);
    const ref_max = useRef(false);
    const ref_count = useRef(0);

    //
    useEffect(() => {
        changePaddingBottomBody();
    }, []);

    useEffect(() => {
        getData_API_Message({ message_arr: [], has_fetched: false });
    }, []);

    useEffect(() => {
        if (ws.current) {
            ws.current.onmessage = (e) => {
                console.log(e.data);
                const { _type } = JSON.parse(e.data);
                if (_type == 'message') {
                    console.log('ok');
                    handleHasMessage(e);
                }
            };
        }
    }, [ws.current]);

    //
    function handleHasMessage(e: MessageEvent) {
        const { id, first_name, last_name, picture, message } = JSON.parse(
            e.data
        );

        setMessageState((message_state) => ({
            ...message_state,
            message_arr: [
                {
                    id: id,
                    first_name: first_name,
                    last_name: last_name,
                    picture: picture,
                    message: message,
                    created_time: new Date().toString(),
                },
                ...message_state.message_arr,
            ],
            count: message_state.count + 1,
        }));

        ref_count.current += 1;
    }

    /* --------------- */

    //
    async function getData_API_Message(start_obj_state = {}) {
        try {
            const c_top =
                document.getElementsByClassName('ChatMidBody_row')[0].scrollTop;
            ref_fetching.current = true;

            setMessageState({
                ...message_state,
                is_fetching: true,
                ...start_obj_state,
            });

            const res = await API_ChatMessage_L({
                c_count: ref_count.current,
                size: 20,
            });

            setMessageState((message_state) => {
                ref_count.current = has_fetched
                    ? message_arr.length + res.data.data.length
                    : res.data.data.length;

                ref_max.current = ref_count.current >= res.data.count;

                return {
                    message_arr: has_fetched
                        ? [...message_arr, ...res.data.data]
                        : res.data.data,
                    count: ref_count.current,
                    has_fetched: true,
                    is_fetching: false,
                };
            });

            if (has_fetched) {
                document.getElementsByClassName(
                    'ChatMidBody_row'
                )[0].scrollTop = c_top;
            }

            setTimeout(() => {
                ref_fetching.current = false;
            }, 100);
        } catch (er) {
            console.log(er);
        }
    }

    //
    function handleScrollToGetMessage(e: React.UIEvent<Element>) {
        if (
            !ref_fetching.current &&
            !ref_max.current &&
            e.currentTarget.scrollTop <=
                e.currentTarget.clientHeight - e.currentTarget.scrollHeight
        ) {
            getData_API_Message();
        }
    }

    //
    function handleSend(message: string) {
        ws.current.send(
            JSON.stringify({
                _type: 'message',
                message: message,
            })
        );
    }

    //
    function changePaddingBottomBody() {
        ref_chat_body_elm.current.style.paddingBottom =
            ref_chat_foot_elm.current.offsetHeight + 'px';
    }

    //
    return (
        <div className="ChatMid bg-primary position-rel">
            <div ref={ref_chat_body_elm} className="ChatMid_body">
                <ChatMidBody
                    message_arr={message_arr}
                    is_fetching={is_fetching}
                    handleScrollToGetMessage={handleScrollToGetMessage}
                />
            </div>

            <div ref={ref_chat_foot_elm} className="ChatMid_foot bg-primary">
                <ChatMidFoot
                    handleSend={handleSend}
                    changePaddingBottomBody={changePaddingBottomBody}
                />
            </div>
        </div>
    );
}
