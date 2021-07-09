import * as React from 'react';
import { useState } from 'react';
//
import IconEye from '../../_icons/eye_pass/IconEyePass';
//
import InputNotValid, {
    InPutNotValidProps_Common,
} from '../input_not_valid/InputNotValid';
//
import './InputNotValidPass.scss';

//
export interface IInputNotValidPassProps extends InPutNotValidProps_Common {
    password: string;
}

//
export default function InputNotValidPass({
    password,
    name,
    placeholder,
    max_length,

    handleChange,
}: IInputNotValidPassProps) {
    //
    const [type, setType] = useState('password');

    //
    function toggleType() {
        setType(type == 'password' ? 'text' : 'password');
    }

    //
    return (
        <div className="InputNotValidPass">
            <div>
                <InputNotValid
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    max_length={max_length}
                    //
                    value={password}
                    handleChange={handleChange}
                />
            </div>

            <div className="InputNotValidPass_eye">
                <div
                    className="InputNotValidPass_eye-contain hv-opacity"
                    onClick={toggleType}
                >
                    <IconEye close_eye={type == 'password'} />
                </div>
            </div>
        </div>
    );
}
