import * as React from 'react';
import { useState } from 'react';
//
import './InputNotValid.scss';

//
export interface InPutNotValidProps_Common {
    name: string;
    placeholder: string;
    max_length: number;
    handleChange : React.ChangeEventHandler<HTMLInputElement>;
}

//
export interface InPutNotValidProps extends InPutNotValidProps_Common {
    value: string;
    type: string;
}

export default function InPutNotValid({
    name,
    value,
    type,
    placeholder,
    max_length,
    handleChange,
}: InPutNotValidProps) {
    //
    const [is_focus, setIsFocus] = useState(false);

    //
    function handleFocus() {
        setIsFocus(true);
    }

    //
    function handleBlur() {
        setIsFocus(false);
    }

    //
    return (
        <div
            className={`InputNotValid position-rel ${
                value !== '' || is_focus
                    ? 'InputNotValid_text input-active'
                    : ''
            }`}
        >
            <input
                className="InputNotValid_input brs-5px"
                name={name}
                type={type}
                maxLength={max_length}
                //
                value={value}
                onChange={handleChange}
                //
                onFocus={handleFocus}
                onBlur={handleBlur}
            />

            <div
                className={`InputNotValid_placeholder input-placeholder ${
                    is_focus ? 'input-placeholder-active' : ''
                }`}
            >
                {placeholder}
            </div>
        </div>
    );
}
