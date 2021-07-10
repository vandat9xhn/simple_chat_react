import * as React from 'react';
// 
import './ChatBdMsLeft.scss';

//
export interface IChatBdMsLeftProps {
    picture: string;
}

//
export function ChatBdMsLeft({ picture }: IChatBdMsLeftProps) {
    //
    return (
        <div className="ChatBdMsLeft">
            <div>
                <img
                    className="brs-50"
                    src={picture}
                    alt=""
                    width="50"
                    height="50"
                />
            </div>
        </div>
    );
}
