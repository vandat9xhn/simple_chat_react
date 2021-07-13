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
const _initial_data_user = {
    id: 1,
    first_name: 'Nguyen',
    last_name: 'Nguyen',
    picture: '',
};

//
const fakePromiseAPI = <Type>(data: Type) =>
    new Promise<Type>((res) => {
        res(data);
    });

//
export function registerRequest(data = {}) {
    if (!IS_FAKE_API) {
        return axiosClientNoToken({
            url: 'api/account/register/',
            method: 'POST',
            data: data,
        });
    }

    return fakePromiseAPI<_data_base_user>({ data: _initial_data_user });
}

//
export function loginRequest(data = {}) {
    if (!IS_FAKE_API) {
        return axiosClientNoToken({
            url: 'api/account/login/',
            method: 'POST',
            data: data,
        });
    }

    return fakePromiseAPI<_data_base_user>({ data: _initial_data_user });
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

    return fakePromiseAPI<_data_base_user>({
        data: _initial_data_user,
    });
}
