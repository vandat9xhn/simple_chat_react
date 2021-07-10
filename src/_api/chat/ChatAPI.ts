import axiosClientNoToken from '../_axios_client/AxiosClientNoToken';
//
import naruto_x_hinata from '../../_images/naruto_x_hinata.jpg';
import { is_fake_api } from '../_const/ConstAPI';

//
interface _type_result_message_obj {
    data: {
        data: {
            id: number;
            first_name: string;
            last_name: string;
            picture: string;
            message: string;
            created_time: string;
        }[];
        count: number;
    };
}

//
const default_message_arr = [
    ...Array(10).fill({
        id: 1,
        first_name: 'My',
        last_name: 'My',
        picture: naruto_x_hinata,
        created_time: '2021-07-10T06:18:00',
        message:
            'This is message\nasd asd asd asd asd asda\nasd asd asd asda dsa dasd\nasd asd asda dsa asd ada das daasd asd asdasd asda das ad ad ad as asd asd adadsa ads ad ad adas das das ad adasd',
    }),
    ...Array(10).fill({
        id: 2,
        first_name: 'Nguyen',
        last_name: 'Nguyen',
        picture: naruto_x_hinata,
        created_time: '2021-07-10T04:18:00',
        message:
            'ad asdsa dad ad\nasd asd asd asd asd asda\nasd asd asd asda dsa dasd\nasd asd asda dsa asd ada das daasd asd asdasd asda das ad ad ad as asd asd adadsa ads ad ad adas das das ad adasd',
    }),
];

//
const fakeMessageAPI = (data: any[]) =>
    new Promise<_type_result_message_obj>((res) => {
        setTimeout(() => {
            res({ data: { data: data, count: 52 } });
        }, 250);
    });

//
export function API_ChatMessage_L(params = {}) {
    if (!is_fake_api) {
        return axiosClientNoToken({
            url: 'api/chat/message-l/',
            method: 'GET',
            params: params,
        });
    }

    return fakeMessageAPI(default_message_arr);
}

//
export function API_ChatMessage_C(data = {}) {
    return axiosClientNoToken({
        url: 'api/chat/message-c/',
        method: 'POST',
        data: data,
    });
}
