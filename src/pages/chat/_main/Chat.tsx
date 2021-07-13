import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
// import ChatLeft from '../left/_main/ChatLeft';
//
import ChatMid from '../mid/_main/ChatMid';
//
import './Chat.scss';

//
export interface IChatProps {}

//
export default function Chat(props: IChatProps) {
    //
    // const [open_left, setOpenLeft] = useState(false);

    //
    const ws = useRef(null);

    //
    useEffect(() => {
        ws.current = new WebSocket(
            `ws${location.protocol == 'https:' ? 's' : ''}://${
                location.host
            }/ws/chat/world/`
        );

        ws.current.onopen = () => {
            console.log('open');
        };

        // ws.current.onmessage = (e: MessageEvent<any>) => {
        //     console.log(e);
        // };

        ws.current.onclose = () => {
            console.log('close');
        };
    });

    //
    return (
        <div className="Chat position-rel">
            <div className="display-flex justify-content-center">
                {/* <div
                    className={`Chat_left ${
                        open_left ? 'Chat_left-open' : 'Chat_left-close'
                    }`}
                >
                    <ChatLeft />

                    <div
                        className="Chat_left-btn-open padding-8px"
                        onClick={handleOpenLeft}
                    >
                        x
                    </div>
                </div> */}

                <div className="Chat_left"></div>

                <div className="Chat_mid">
                    <ChatMid ws={ws} />
                </div>

                <div className="Chat_right"></div>
            </div>
        </div>
    );
}
