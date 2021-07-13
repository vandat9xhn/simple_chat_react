import * as React from 'react';
import InputPass from '../../common/pass/InputPass';
//
import InputValid, { IInputValidProps_C } from '../_main/InputValid';

//
interface IInputValidPassProps extends IInputValidProps_C {
    input_props: React.InputHTMLAttributes<HTMLInputElement>;
}

//
export default function InputValidPass({
    label,
    help,
    error,
    input_props,
}: IInputValidPassProps) {
    return (
        <InputValid label={label} help={help} error={error}>
            <InputPass input_props={input_props} />
        </InputValid>
    );
}
