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
    is_fetching: boolean;
    handleScrollToGetMessage: (e: React.UIEvent<Element>) => void;
}

//
export default function ChatMidBody({
    message_arr,
    is_fetching,
    handleScrollToGetMessage,
}: IChatMidBodyProps) {
    //
    return (
        <div className="ChatMidBody h-100per">
            <div
                className="ChatMidBody_row display-flex col-reverse h-100per padding-8px"
                onScroll={handleScrollToGetMessage}
            >
                <div className="display-flex col-reverse">
                    {message_arr.map((item, ix) => (
                        <div key={`${ix}`} className="ChatMidBody_item">
                            <ChatBdMessage {...item} />
                        </div>
                    ))}
                </div>

                <div
                    className={`text-align-center font-italic ${
                        is_fetching ? '' : 'display-none'
                    }`}
                >
                    Loading...
                </div>
            </div>
        </div>
    );
}
