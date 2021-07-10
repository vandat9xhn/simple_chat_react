import * as React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
//
import { registerRequest } from '../../../_api/account/AccountAPI';
//
import { makeFormData } from '../../../_utils/makeFormData';
//
import InputNotValidPass from '../../../components/input/input_not_valid_pass/InputNotValidPass';
import InPutNotValid from '../../../components/input/input_not_valid/InputNotValid';
import InputPicture from '../../../components/input/picture/InputPicture';
//
import { register_initial_arr } from '../_initial/RegisterInitial';
//
import './Register.scss';

//
export interface IRegisterProps {}

//
export default function Register(props: IRegisterProps) {
    //
    const use_history = useHistory();

    //
    const [register_state, setRegisterState] = useState({
        username: '',
        password: '',
        email: '',
        first_name: '',
        last_name: '',
        picture: null,
        file: null,
    });

    //
    async function handelRegister() {
        const {picture, ...rest_state} = register_state
        await registerRequest(makeFormData(rest_state));

        use_history.replace('/chat');
    }

    //
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setRegisterState({
            ...register_state,
            [e.target.name]: e.target.value,
        });
    }

    // 
    function handleChangePicture(e: React.ChangeEvent<HTMLInputElement>) {
        const new_file = e.target.files[0]
        if (new_file) {
            const reader = new FileReader()

            reader.onload = () => {
                setRegisterState({
                    ...register_state,
                    file: new_file,
                    picture: reader.result,
                })
            }

            reader.readAsDataURL(new_file)
        }

        
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
                    <h2 className="margin-0 font-16px">Choose picture</h2>

                    <div className="Register_file padding-8px">
                        <InputPicture
                            title="Choose picture"
                            picture={register_state.picture}
                            handleChangePicture={handleChangePicture}
                        />
                    </div>
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
