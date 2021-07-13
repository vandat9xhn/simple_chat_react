import axiosClientNoToken from '../_axios_client/AxiosClientNoToken';
//
import { _type_base_user } from '../../_type/Type';
//
import { IS_FAKE_API } from '../_const/ConstAPI';

//
type _data_base_user = {
    data: _type_base_user;
};

//
export function registerRequest(data = {}) {
    return axiosClientNoToken({
        url: 'api/account/register/',
        method: 'POST',
        data: data,
    });
}

//
export function loginRequest(data = {}) {
    return axiosClientNoToken({
        url: 'api/account/login/',
        method: 'POST',
        data: data,
    });
}

//
export function logoutRequest() {
    return axiosClientNoToken({
        url: 'api/account/logout/',
        method: 'POST',
    });
}

//
export function API_DefineUser() {
    if (!IS_FAKE_API) {
        return axiosClientNoToken({
            url: 'api/account/define/',
            method: 'POST',
        });
    }

    return new Promise<_data_base_user>((res) => {
        res({
            data: {
                id: 1,
                first_name: 'Nguyen',
                last_name: 'Nguyen',
                picture: '',
            },
        });
    });
}
