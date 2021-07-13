import * as yup from 'yup';

//
export type IFormRegister = {
    username: string;
    password: string;
    confirm_password: string;
    email: string;
    first_name: string;
    last_name: string;
    // picture: string | any;
};

//
type _input_account_obj = {
    label: string;
    help: string;
    name: keyof IFormRegister;
    type: string;
    max_length: number;
    placeholder: string;
};

//
export const register_initial_arr: _input_account_obj[] = [
    {
        name: 'username',
        type: 'text',
        placeholder: 'username',
        label: 'Username',
        help: '5-15 letters and no space',
        max_length: 15,
    },
    {
        name: 'password',
        type: 'password',
        placeholder: 'password',
        label: 'Password',
        help: '5-15 letters and no space',
        max_length: 15,
    },
    {
        name: 'confirm_password',
        type: 'password',
        placeholder: 'confirm password',
        label: 'Confirm Password',
        help: 'Confirm your password',
        max_length: 15,
    },
    {
        name: 'email',
        type: 'email',
        placeholder: 'email',
        label: 'Email',
        help: '**@gmail.com (do not use a real mail)',
        max_length: 40,
    },
    {
        name: 'first_name',
        type: 'text',
        placeholder: 'first name',
        label: 'First name',
        help: '2-20 letters and spaces',
        max_length: 20,
    },
    {
        name: 'last_name',
        type: 'text',
        placeholder: 'last name',
        label: 'Last name',
        help: '2-20 letters and spaces',
        max_length: 20,
    },
];

//
export const schemaRegister = yup.object().shape({
    username: yup.string().matches(/^[a-z0-9A-Z]{5,15}$/, 'Invalid username'),
    password: yup.string().matches(/^[a-z0-9A-Z]{5,15}$/, 'Invalid password'),
    confirm_password: yup.string().oneOf([yup.ref('password'), null], 'Password is not match'),
    email: yup
        .string()
        .email('Invalid email')
        .matches(/^[a-z0-9A-Z]{3,15}@gmail\.com$/, 'Invalid email'),
    first_name: yup
        .string()
        .min(2, 'Invalid firs name')
        .max(20, 'Invalid firs name'),
    last_name: yup
        .string()
        .min(2, 'Invalid last name')
        .max(20, 'Invalid last name'),
});
