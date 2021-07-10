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
    const ref_fetching = useRef(false);
    const ref_max = useRef(false);
    const ref_count = useRef(0);

    //
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
                ...message_state.message_arr,
                {
                    id: id,
                    first_name: first_name,
                    last_name: last_name,
                    picture: picture,
                    message: message,
                    created_time: new Date().toString(),
                },
            ],
            count: message_state.count + 1,
        }));

        ref_count.current += 1;
    }

    /* --------------- */

    //
    async function getData_API_Message(start_obj_state = {}) {
        try {
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
                if (message_state.has_fetched) {
                    setTimeout(() => {
                        document
                            .getElementsByClassName('ChatMidBody_item')[20]
                            .scrollIntoView(false);
                    }, 0);
                }

                ref_count.current = message_state.has_fetched
                    ? message_state.count
                    : res.data.count;

                ref_max.current =
                    res.data.count <= 20 ||
                    ref_count.current <= message_state.message_arr.length;

                return {
                    message_arr: message_state.has_fetched
                        ? [...res.data.data, ...message_state.message_arr]
                        : res.data.data,
                    count: ref_count.current,
                    has_fetched: true,
                    is_fetching: false,
                };
            });

            ref_fetching.current = false;
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
    return (
        <div className="ChatMid bg-primary">
            <div>
                <ChatMidBody
                    message_arr={message_arr}
                    is_fetching={is_fetching}
                    handleScrollToGetMessage={handleScrollToGetMessage}
                />
            </div>

            <div>
                <ChatMidFoot handleSend={handleSend} />
            </div>
        </div>
    );
}
