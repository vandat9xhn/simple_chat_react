import axiosClientNoToken from '../_axios_client/AxiosClientNoToken';

//
export function registerRequest(data: {
    username: string;
    password: string;
    email: string;
    first_name: string;
    last_name: string;
}) {
    return axiosClientNoToken({
        url: 'api/account/register/',
        method: 'POST',
        data: data,
    });
}

//
export function loginRequest(data: { username: string; password: string }) {
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
