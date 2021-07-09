// 
type _name = 'username' | 'password' | 'email' | 'first_name' | 'last_name'

//
interface _input_account_obj {
    name: _name;
    type: string;
    placeholder: string;
    title: string;
    max_length: number;
}

//
export const register_initial_arr: _input_account_obj[] = [
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
    {
        name: 'email',
        type: 'email',
        placeholder: 'email',
        title: 'Email;',
        max_length: 40,
    },
    {
        name: 'first_name',
        type: 'text',
        placeholder: 'first name',
        title: 'First name',
        max_length: 20,
    },
    {
        name: 'last_name',
        type: 'text',
        placeholder: 'last name',
        title: 'Last name',
        max_length: 20,
    },
];
