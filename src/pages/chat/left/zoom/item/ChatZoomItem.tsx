import * as React from 'react';
import CountNew from '../../../../../components/count_new/CountNew';

//
export type _type_handleOpenZoom = (id: number) => void;

export interface IChatZoomItemPropsCommon {
    id: number;
    picture: string;
    name: string;
    last_message: string;
    count_new_message: number;
}

interface IChatZoomItemProps extends IChatZoomItemPropsCommon {
    handleOpenZoom: _type_handleOpenZoom;
}

//
export default function ChatZoomItem({
    id,
    picture,
    name,
    last_message,
    count_new_message,

    handleOpenZoom,
}: IChatZoomItemProps) {
    //
    function onClickZoom() {
        handleOpenZoom(id);
    }

    //
    return (
        <CountNew count_new={count_new_message} onClick={onClickZoom}>
            <div className="padding-8px">
                <div className="display-flex align-items-center">
                    <div className="margin-right-8px">
                        <img
                            className="brs-50 overflow-hidden"
                            src={picture}
                            alt=""
                            width="50"
                            height="50"
                        />
                    </div>

                    <h2 className="margin-0 font-16px">{name}</h2>
                </div>

                <div>{last_message}</div>
            </div>
        </CountNew>
    );
}
