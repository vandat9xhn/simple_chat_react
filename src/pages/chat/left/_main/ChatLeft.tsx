import * as React from 'react';
import { useHistory } from 'react-router-dom';
//
import CountNew from '../../../../components/count_new/CountNew';
import ChatZoom from '../zoom/_main/ChatZoom';
//
import './ChatLeft.scss';

//
export interface IChatLeftProps {}

//
export default function ChatLeft(props: IChatLeftProps) {
    //
    const use_history = useHistory();

    //
    const { user } = { user: { id: 10 } };

    //
    const count_user = 10;

    const count_new_message_world = 5;

    //
    const zoom_arr = Array(10).fill({
        id: 0,
        picture: '',
        name: 'My My',
        last_message: 'as sad asd asd sad as as',
        count_new_message: 0,
    });

    //
    function handleOpenZoom(id: number) {
        const room_name = [id, user.id].sort().join('_');
        use_history.replace(`/chat?room=${room_name}`);
    }

    //
    function handleOpenZoomWorld() {
        use_history.replace('/chat?room=world');
    }

    //
    return (
        <div>
            <div>
                <div>
                    <CountNew
                        count_new={count_new_message_world}
                        onClick={handleOpenZoomWorld}
                    >
                        <div className="padding-8px">
                            <h2 className="margin-0 font-16px">Chat World</h2>

                            <div>{count_user} user</div>
                        </div>
                    </CountNew>
                </div>

                <div className="ChatLeft_zoom scroll-thin">
                    <ChatZoom
                        zoom_arr={zoom_arr}
                        handleOpenZoom={handleOpenZoom}
                    />
                </div>
            </div>
        </div>
    );
}
