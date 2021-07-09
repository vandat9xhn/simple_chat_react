import * as React from 'react';
//
import { ChatBdMsLeft, IChatBdMsLeftProps } from '../left/ChatBdMsLeft';
import {
    ChatBdMsRight,
    IChatBdMsRightProps,
} from '../right/_main/ChatBdMsRight';

//
export interface IChatBdMessageProps
    extends IChatBdMsRightProps,
        IChatBdMsLeftProps {}

//
export function ChatBdMessage({ picture, message }: IChatBdMessageProps) {
    return (
        <div className="ChatBdMessage">
            <div className="display-flex">
                <div>
                    <ChatBdMsLeft picture={picture} />
                </div>

                <div>
                    <ChatBdMsRight message={message} />
                </div>
            </div>
        </div>
    );
}
