import * as React from 'react';
//
import './FetchingThreeDot.scss';

// 
export interface IFetchingThreeDotProps {
    is_fetching: boolean;
}

// 
export default function FetchingThreeDot({
    is_fetching = false,
}: IFetchingThreeDotProps) {
    // 
    return (
        <div
            className={
                is_fetching ? 'FetchingThreeDot display-flex' : 'display-none'
            }
        >
            <div className="FetchingThreeDot_item" />
            <div className="FetchingThreeDot_item" />
            <div className="FetchingThreeDot_item" />
        </div>
    );
}
