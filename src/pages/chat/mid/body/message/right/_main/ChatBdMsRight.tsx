import * as React from 'react';

//
export interface IChatBdMsRightProps {
    message: string;
}

//
export function ChatBdMsRight({ message }: IChatBdMsRightProps) {
    //
    return (
        <div>
            <div>
                <div>{message}</div>
            </div>
        </div>
    );
}
