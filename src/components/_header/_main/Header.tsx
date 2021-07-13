import * as React from 'react';
import { withRouter } from 'react-router-dom';
//
import HeaderMid from '../mid/HeaderMid';
// 
import './Header.scss';

//
export interface IHeaderProps {}

//
function Header(props: IHeaderProps) {
    //
    return (
        <div
            className={`Header App_box_shadow ${
                location.pathname.search(/register/) > 0 ? 'display-none' : ''
            }`}
        >
            <div className="display-flex-center h-100per">
                <div></div>

                <div>
                    <HeaderMid />
                </div>

                <div></div>
            </div>
        </div>
    );
}

export default withRouter(Header);
