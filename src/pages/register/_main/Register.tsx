import * as React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
//
import { context_api } from '../../../_context/ContextAPI';
//
import { registerRequest } from '../../../_api/account/AccountAPI';
//
import { makeFormData } from '../../../_utils/makeFormData';
//
import FetchingThreeDot from '../../../components/fetching/three_dot/FetchingThreeDot';
import InputValidText from '../../../components/input/valid/text/InputValidText';
import InputValidPass from '../../../components/input/valid/password/InputValidPass';
import InputPicture from '../../../components/input/picture/InputPicture';
//
import {
    IFormRegister,
    register_initial_arr,
    schemaRegister,
} from '../_initial/RegisterInitial';
//
import './Register.scss';

//
export interface IRegisterProps {}

//
export default function Register(props: IRegisterProps) {
    //
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<IFormRegister>({
        resolver: yupResolver(schemaRegister),
    });

    //
    const use_history = useHistory();

    //
    const { setDataUser } = React.useContext(context_api);

    //
    const [register_state, setRegisterState] = useState({
        file: null,
        picture: null,
        touched_picture: false,
        is_fetching: false,
    });

    const { file, picture, touched_picture, is_fetching } = register_state;

    //
    function handleTouchPicture() {
        setRegisterState({
            ...register_state,
            touched_picture: true,
        });
    }

    //
    function handleChangePicture(e: React.ChangeEvent<HTMLInputElement>) {
        const new_file = e.target.files[0];
        if (new_file) {
            const reader = new FileReader();

            reader.onload = () => {
                setRegisterState({
                    ...register_state,
                    file: new_file,
                    picture: reader.result,
                });
            };

            reader.readAsDataURL(new_file);
        }
    }

    //
    async function onSubmit(data: IFormRegister) {
        console.log(data);

        if (!file) {
            !touched_picture &&
                setRegisterState({
                    ...register_state,
                    touched_picture: true,
                });

            return;
        }

        try {
            setRegisterState({
                ...register_state,
                is_fetching: true,
            });

            const res = await registerRequest(
                makeFormData({
                    ...data,
                    file,
                })
            );

            if (res.data != 'wrong') {
                setDataUser(res.data);
                use_history.replace('/chat');
            } else {
                setRegisterState({
                    ...register_state,
                    is_fetching: false,
                });

                alert('Something is wrong, please, try again');
            }
        } catch (er) {
            console.log(er);
        }
    }

    //
    return (
        <div className="Register">
            <form
                className="Register_form margin-auto padding-8px bg-primary box-shadow-1 brs-5px-md"
                autoComplete="off"
                onSubmit={handleSubmit(onSubmit)}
            >
                <h2 className="margin-0 App_title">Register</h2>

                <div className="Register_input_list">
                    {register_initial_arr.map((item, ix) => (
                        <div key={`${ix}`} className="Register_input">
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
                    <h2 className="margin-0 font-16px">Choose picture</h2>

                    <div
                        className="Register_file padding-8px"
                        onClick={handleTouchPicture}
                    >
                        <InputPicture
                            title="Choose picture"
                            picture={picture}
                            handleChangePicture={handleChangePicture}
                        />
                    </div>

                    <div>
                        <div className="text-red font-12px font-italic">
                            {(Object.keys(errors).length || touched_picture) &&
                            !file
                                ? 'Picture is required'
                                : ''}
                        </div>
                    </div>
                </div>
                <br />

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

            <div
                className={`pos-fixed-100 z-index-lv5 bg-s-through ${
                    is_fetching ? '' : 'display-none'
                }`}
            >
                <div className="pos-abs-center">
                    <FetchingThreeDot is_fetching={is_fetching} />
                </div>
            </div>
        </div>
    );
}
