import * as React from 'react';
//
import InputValid, { IInputValidProps_C } from '../_main/InputValid';

//
interface IInputValidTextProps extends IInputValidProps_C {
    input_props: React.InputHTMLAttributes<HTMLInputElement>;
}

//
export default function InputValidText({
    label,
    help,
    error,
    input_props,
}: IInputValidTextProps) {
    return (
        <InputValid label={label} help={help} error={error}>
            <input className="input-valid w-100per padding-8px" {...input_props} />
        </InputValid>
    );
}
