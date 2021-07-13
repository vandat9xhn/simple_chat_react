import * as React from 'react';

//
export interface IInputValidProps_C {
    label: string;
    help: string;
    error: string;
}

//
interface IInputValidProps extends IInputValidProps_C {
    children: React.ReactElement;
}

//
export default function InputValid({
    label,
    help,
    error,
    children,
}: IInputValidProps) {
    //
    return (
        <div>
            <div>
                <label className="label-field">{label}</label>
            </div>

            <div>
                <div>{children}</div>
            </div>

            <div>
                <div className="text-warning font-12px font-italic">{help}</div>
            </div>

            <div>
                <div className="text-red font-12px font-italic">{error}</div>
            </div>
        </div>
    );
}
