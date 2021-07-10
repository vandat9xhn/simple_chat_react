import * as React from 'react';

//
export interface IHeaderMidProps {}

//
export default function HeaderMid(props: IHeaderMidProps) {
    //
    return (
        <div className="HeaderMid">
            <div>
                <h1 className="HeaderMid_welcome margin-0 padding-8px font-16px">
                    Welcome to Simple Chat
                </h1>
            </div>
        </div>
    );
}
