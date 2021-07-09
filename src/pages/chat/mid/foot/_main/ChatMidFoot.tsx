import * as React from 'react';
import { useState } from 'react';
//
import './ChatMidFoot.scss';

//
interface IChatMidFootProps {
    handleSend: (value: string) => void;
}

//
export default function ChatMidFoot({ handleSend }: IChatMidFootProps) {
    //
    const [value, setValue] = useState('');

    //
    function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        setValue(e.target.value);
    }

    //
    function onSend() {
        handleSend(value);
    }

    //
    return (
        <div className="ChatMidFoot">
            <div className="ChatMidFoot_row display-flex">
                <div className="flex-grow-1">
                    <textarea
                        className="ChatMidFoot_textarea w-100per scroll-thin brs-5px"
                        rows={4}
                        value={value}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <div>
                        <button
                            className="btn btn-hv btn-active"
                            type="button"
                            onClick={onSend}
                        >
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
