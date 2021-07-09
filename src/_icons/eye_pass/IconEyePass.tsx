import * as React from 'react';

// import './IconsEye.scss';

export interface IIconsEyePops {
    size_icon?: string;
    close_eye: boolean;
}

//
export default function IconEye({
    size_icon = '1.5rem',
    close_eye,
}: IIconsEyePops) {
    //
    return (
        <svg
            className="IconEye"
            height={size_icon}
            width={size_icon}
            viewBox={`200 200 200 200`}
            stroke="var(--black-brown)"
            fill="var(--black-brown)"
            strokeLinecap="round"
        >
            {/* Eye for showing password x=200 y=200 Toggle:close_eye */}
            <path
                d="M200,300 Q300,200 400,300 Q300,400 200,300"
                fill="none"
                strokeWidth="10"
            />
            <circle
                className={close_eye ? 'display-none' : ''}
                cx="300"
                cy="300"
                r="30"
            />
            <g className={close_eye ? '' : 'display-none'}>
                <path
                    d="M200,300 Q300,350 400,300"
                    fill="none"
                    strokeWidth="20"
                />
                <line x1="210" y1="210" x2="390" y2="390" strokeWidth="30" />
            </g>
        </svg>
    );
}
