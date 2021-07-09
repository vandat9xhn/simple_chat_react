import * as React from 'react';
//
import {
    ChatBdMessage,
    IChatBdMessageProps,
} from '../message/_main/ChatBdMessage';
//
import './ChatMidBody.scss';

//
export interface IChatMidBodyProps {
    message_arr: IChatBdMessageProps[];
}

//
export default function ChatMidBody({ message_arr }: IChatMidBodyProps) {
    //
    return (
        <div className="ChatMidBody brs-5px padding-8px">
            <div className="ChatMidBody_row display-flex col-reverse">
                {message_arr.map((item, ix) => (
                    <div key={`${ix}`}>
                        <ChatBdMessage
                            picture={item.picture}
                            message={item.message}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
