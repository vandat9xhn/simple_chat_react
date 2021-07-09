import * as React from 'react';
import { useEffect, useRef } from 'react';
// 
import ChatMid from '../mid/_main/ChatMid';
// 
import './Chat.scss';

//
export interface IChatProps {}

//
export default function Chat(props: IChatProps) {
    //
    const ws = useRef(null);

    //
    useEffect(() => {
        ws.current = new WebSocket(
            'ws://' + location.host + '/ws/chat/world/'
        );

        ws.current.onopen = () => {
            console.log('open');
        };

        ws.current.onmessage = (e: MessageEvent<any>) => {
            console.log(e);
        };

        ws.current.onclose = () => {
            console.log('close');
        };
    });

    //
    return (
        <div>
            <div className="display-flex">
				<div className="Chat_left"></div>

                <div className="Chat_mid">
                    <ChatMid />
                </div>

                <div className="Chat_right"></div>
			</div>
        </div>
    );
}
