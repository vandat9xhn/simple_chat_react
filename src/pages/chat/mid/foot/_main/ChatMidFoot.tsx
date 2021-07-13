import * as React from 'react';
import { useEffect } from 'react';
import { ReactElement } from 'react';
import { useRef, useState } from 'react';
//
import './ChatMidFoot.scss';

//
export interface IChatMidFootProps {
    handleSend: (value: string) => void;
    changePaddingBottomBody: () => void;
}

//
export default function ChatMidFoot({
    handleSend,
    changePaddingBottomBody,
}: IChatMidFootProps) {
    //
    const [value, setValue] = useState('');

    //
    const ref_textarea_elm = useRef(null);

    //
    useEffect(() => {
        window.addEventListener('orientationchange', handelOrientation)
        
        return () => {
            window.removeEventListener('orientationchange', handelOrientation)
        }
    }, []);

    // 
    function handelOrientation() {       
        setTimeout(() => {
            ref_textarea_elm.current.style.height = 'auto';
            ref_textarea_elm.current.style.height =
                ref_textarea_elm.current.scrollHeight + 'px';
            changePaddingBottomBody();
        }, 100);
    }

    //
    function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        setValue(e.target.value);

        e.currentTarget.style.height = 'auto';
        e.currentTarget.style.height = e.currentTarget.scrollHeight + 'px';
        changePaddingBottomBody();
    }

    //
    function onSend() {
        if (value.trim()) {
            handleSend(value);

            setValue('');
            ref_textarea_elm.current.style.height = 'auto';
            changePaddingBottomBody();
        }
    }

    //
    return (
        <div className="ChatMidFoot padding-8px">
            <div className="ChatMidFoot_row display-flex align-items-center">
                <div></div>

                <div className="ChatMidBody_mid flex-grow-1">
                    <textarea
                        ref={ref_textarea_elm}
                        className="ChatMidFoot_textarea w-100per scroll-thin bg-fb"
                        rows={1}
                        value={value}
                        placeholder="Write something..."
                        onChange={handleChange}
                    />
                </div>

                <div className="ChatMidFoot_right margin-left-5px">
                    <div>
                        <button
                            className={`btn btn-hv btn-active brs-5px label-field ${
                                value.trim() ? '' : 'opacity-05'
                            }`}
                            type="button"
                            disabled={!value.trim()}
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
