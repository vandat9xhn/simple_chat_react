import * as React from 'react';
//
import ChatZoomItem, {
    IChatZoomItemPropsCommon,
    _type_handleOpenZoom,
} from '../item/ChatZoomItem';

//
export interface IChatZoomProps {
    zoom_arr: IChatZoomItemPropsCommon[];
    handleOpenZoom: _type_handleOpenZoom;
}

//
export default function ChatZoom({ zoom_arr, handleOpenZoom }: IChatZoomProps) {
    //
    return (
        <div>
            <div>
                {zoom_arr.map((item, ix) => (
                    <div key={`${ix}`}>
                        <ChatZoomItem
                            {...item}
                            handleOpenZoom={handleOpenZoom}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
