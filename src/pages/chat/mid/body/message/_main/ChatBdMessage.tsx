import * as React from 'react';
import { useContext } from 'react';
import { context_api } from '../../../../../../_context/ContextAPI';
//
import { ChatBdMsLeft, IChatBdMsLeftProps } from '../left/ChatBdMsLeft';
import {
    ChatBdMsRight,
    IChatBdMsRightProps_C,
} from '../right/_main/ChatBdMsRight';

//
export interface IChatBdMessageProps
    extends IChatBdMsRightProps_C,
        IChatBdMsLeftProps {
    id: number;
}

//
export function ChatBdMessage({
    id,
    first_name,
    last_name,
    picture,
    message,
    created_time,
}: IChatBdMessageProps) {
    //
    const { user } = useContext(context_api);

    const is_user = id == user.id;

    //
    return (
        <div className="ChatBdMessage">
            <div className={`display-flex ${is_user ? 'row-reverse' : ''}`}>
                <div
                    className={`${
                        is_user ? 'margin-left-5px' : 'margin-right-5px'
                    }`}
                >
                    <ChatBdMsLeft picture={picture} />
                </div>

                <div>
                    <ChatBdMsRight
                        is_user={is_user}
                        message={message}
                        first_name={first_name}
                        last_name={last_name}
                        created_time={created_time}
                    />
                </div>
            </div>
        </div>
    );
}
