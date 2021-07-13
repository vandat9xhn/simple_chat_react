import * as React from 'react';
//
import IconEye from '../../../../_icons/eye_pass/IconEyePass';
//
import './InputPass.scss';

//
export interface IInputPassProps {
    input_props: React.InputHTMLAttributes<HTMLInputElement>;
}

//
export default function InputPass({ input_props }: IInputPassProps) {
    //
    const [type, setType] = React.useState('password');

    //
    function toggleType() {
        setType(type == 'password' ? 'text' : 'password');
    }

    //
    return (
        <div className="InputPass">
            <div>
                <input
                    className="input-valid w-100per padding-8px"
                    type={type}
                    {...input_props}
                />
            </div>

            <div className="InputPass_eye">
                <div
                    className="InputPass_eye-contain hv-opacity"
                    onClick={toggleType}
                >
                    <IconEye close_eye={type == 'password'} />
                </div>
            </div>
        </div>
    );
}
