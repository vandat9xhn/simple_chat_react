import * as React from 'react';
import { ReactElement } from 'react';
//
import './CountNew.scss';

//
interface ICountNewProps {
    count_new: number;
    onClick: () => void;
    children: ReactElement;
}

//
export default function CountNew({
    count_new,
    onClick,
    children,
}: ICountNewProps) {
    return (
        <div
            className={`CountNew position-rel cursor-pointer ${
                count_new ? 'bg-film' : ''
            }`}
            onClick={onClick}
        >
            {children}

            <div
                className={`CountNew_new text-red font-12px ${
                    count_new ? '' : 'display-none'
                }`}
            >
                <div>+{count_new}</div>
            </div>
        </div>
    );
}
