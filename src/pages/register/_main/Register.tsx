import * as React from 'react';
import { useState } from 'react';
//
import { registerRequest } from '../../../_api/account/AccountAPI';
//
import InputNotValidPass from '../../../components/input_not_valid_pass/InputNotValidPass';
import InPutNotValid from '../../../components/input_not_valid/InputNotValid';
//
import { register_initial_arr } from '../_initial/RegisterInitial';
//
import './Register.scss';

//
export interface IRegisterProps {}

//
export default function Register(props: IRegisterProps) {
    //
    const [register_state, setRegisterState] = useState({
        username: '',
        password: '',
        email: '',
        first_name: '',
        last_name: '',
    });

    //
    async function handelRegister() {
        await registerRequest(register_state);
    }

    //
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setRegisterState({
            ...register_state,
            [e.target.name]: e.target.value,
        });
    }

    //
    function handleSubmit(e: React.FormEvent<Element>) {
        e.preventDefault();

        handelRegister();
    }

    //
    return (
        <div className="Register">
            <form
                className="Register_form margin-auto padding-8px bg-primary brs-5px-md"
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                <h2 className="margin-0 App_title">Register</h2>

                <div>
                    {register_initial_arr.map((item, ix) => (
                        <div key={`${ix}`} className="Register_input">
                            {item.type == 'password' ? (
                                <InputNotValidPass
                                    password={register_state[item.name]}
                                    name={item.name}
                                    placeholder={item.placeholder}
                                    max_length={item.max_length}
                                    handleChange={handleChange}
                                />
                            ) : (
                                <InPutNotValid
                                    value={register_state[item.name]}
                                    name={item.name}
                                    type={item.type}
                                    placeholder={item.placeholder}
                                    max_length={item.max_length}
                                    handleChange={handleChange}
                                />
                            )}
                        </div>
                    ))}
                </div>

                <div>
                    <button
                        className="btn btn-hv w-100per padding-8px bg-green brs-5px"
                        type="submit"
                    >
                        <h2 className="margin-0 text-align-center font-16px text-white">
                            Sign up
                        </h2>
                    </button>
                </div>
            </form>
        </div>
    );
}
