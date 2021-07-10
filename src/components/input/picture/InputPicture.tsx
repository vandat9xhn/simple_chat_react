import * as React from 'react';
import { useRef } from 'react';
//
import './InputPicture.scss';

//
export interface IInputPictureProps {
    title: string;
    picture: string;
    handleChangePicture: React.ChangeEventHandler<HTMLInputElement>;
}

//
export default function InputPicture({
    title,
    picture,
    handleChangePicture,
}: IInputPictureProps) {
    //
    const ref_input = useRef(null);

    //
    function handleClickInput() {
        ref_input.current.click();
    }

    //
    return (
        <div
            className="position-rel wh-100 cursor-pointer"
            onClick={handleClickInput}
        >
            <div className="wh-100">
                <img className="wh-100 brs-5px object-fit-cover" src={picture} alt="" />
            </div>

            <div
                className={`InputPicture_title pos-abs-center ${
                    picture ? 'display-none' : ''
                }`}
            >
                <h2 className="margin-0 font-16px text-align-center">
                    {title}
                </h2>
            </div>

            <input
                ref={ref_input}
                className="display-none"
                type="file"
                accept="*/image"
                onChange={handleChangePicture}
            />
        </div>
    );
}
