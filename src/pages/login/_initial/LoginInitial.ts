// 
type _name = 'username' | 'password';

//
interface _input_account_obj {
    name: _name;
    type: string;
    placeholder: string;
    title: string;
    max_length: number;
}

//
export const login_initial_arr: _input_account_obj[] = [
    {
        name: 'username',
        type: 'text',
        placeholder: 'username',
        title: 'Username',
        max_length: 15,
    },
    {
        name: 'password',
        type: 'password',
        placeholder: 'password',
        title: 'Password',
        max_length: 15,
    },
];
