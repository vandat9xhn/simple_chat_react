import * as React from 'react';
//
import './ChatBdMsRight.scss';

//
export interface IChatBdMsRightProps_C {
    first_name: string;
    last_name: string;
    message: string;
    created_time: string;
}

//
interface IChatBdMsRightProps extends IChatBdMsRightProps_C {
    is_user: boolean;
}

//
export function ChatBdMsRight({
    is_user,
    first_name,
    last_name,
    message,
    created_time,
}: IChatBdMsRightProps) {
    //
    return (
        <div>
            <div>
                <div>
                    <div
                        className={`ChatBdMsRight_name label-field ${
                            is_user ? 'text-align-end margin-left-auto' : ''
                        }`}
                    >
                        {first_name} {last_name}
                    </div>
                </div>

                <div
                    className={`ChatBdMsRight_message ${
                        is_user ? 'bg-blue' : 'bg-fb'
                    }`}
                >
                    <div className="ChatBdMsRight_message-text">{message}</div>
                </div>

                <div>
                    <div
                        className={`font-12px font-italic ${
                            is_user ? '' : 'text-align-end'
                        }`}
                    >
                        {created_time &&
                            Intl.DateTimeFormat('vi-VN', {
                                hour: '2-digit',
                                minute: '2-digit',
                                day: '2-digit',
                                month: '2-digit',
                                year: 'numeric',
                            }).format(new Date(created_time))}
                    </div>
                </div>
            </div>
        </div>
    );
}
