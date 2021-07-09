import * as React from 'react';
//
import ChatMidBody from '../body/_main/ChatMidBody';
import ChatMidFoot from '../foot/_main/ChatMidFoot';
// 
// import naruto_x_hinata from '../../../../../image/naruto_x_hinata.jpg'

//
export interface IChatMidProps {}

//
export default function ChatMid(props: IChatMidProps) {
    //
    const message_arr = [
        {
            picture: '',
            message: 'This is message',
        },
    ];

    //
    function handleSend(value: string) {
        console.log(value);
    }

    //
    return (
        <div>
            <div>
                <ChatMidBody message_arr={message_arr} />
            </div>

            <div>
                <ChatMidFoot handleSend={handleSend} />
            </div>
        </div>
    );
}
