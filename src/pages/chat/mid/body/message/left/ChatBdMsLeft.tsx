import * as React from 'react';

//
export interface IChatBdMsLeftProps {
    picture: string;
}

//
export function ChatBdMsLeft({ picture }: IChatBdMsLeftProps) {
    //
    return (
        <div>
            <div>
                <img
                    className="brs-50per"
                    src={picture}
                    alt=""
                    width="50"
                    height="50"
                />
            </div>
        </div>
    );
}
