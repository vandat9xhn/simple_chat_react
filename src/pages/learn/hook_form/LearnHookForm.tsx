import * as React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
//
import InputValidText from '../../../components/input/valid/text/InputValidText';
import InputValidPass from '../../../components/input/valid/password/InputValidPass';
//
import './LearnHookForm.scss';

//
type IFormInputs = {
    username: string;
    password: string;
};

type initial_learn_input_obj = {
    type?: string;
    label: string;
    help: string;
    name: 'username' | 'password';
    max_length: number;
    placeholder: string;
};

//
const initial_learn_input_arr: initial_learn_input_obj[] = [
    {
        label: 'Username',
        help: 'Help for username',
        name: 'username',
        max_length: 15,
        placeholder: 'username...',
    },
    {
        type: 'password',
        label: 'Password',
        help: 'Help for password',
        name: 'password',
        max_length: 15,
        placeholder: 'password...',
    },
];

//
const schema = yup.object().shape({
    username: yup.string().matches(/^[a-z0-9A-Z]{5,15}$/, 'This is not right'),
    password: yup.string().matches(/^[a-z0-9A-Z]{5,15}$/, 'This is not right'),
});

//
export interface ILearnHookFormProps {}

//
export default function LearnHookForm(props: ILearnHookFormProps) {
    //
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<IFormInputs>({
        resolver: yupResolver(schema),
    });

    //
    function onSubmit(data: IFormInputs) {
        console.log(data);
    }

    //
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="LearnHookForm_input_list">
                    {initial_learn_input_arr.map((item, ix) => (
                        <div key={`${ix}`} className="LearnHookForm_input_item">
                            {item.type == 'password' ? (
                                <InputValidPass
                                    label={item.label}
                                    help={item.help}
                                    error={errors[item.name]?.message}
                                    input_props={{
                                        ...register(item.name),
                                        placeholder: item.placeholder,
                                    }}
                                />
                            ) : (
                                <InputValidText
                                    label={item.label}
                                    help={item.help}
                                    error={errors[item.name]?.message}
                                    input_props={{
                                        ...register(item.name),
                                        placeholder: item.placeholder,
                                    }}
                                />
                            )}
                        </div>
                    ))}
                </div>

                <div>
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </div>
    );
}
