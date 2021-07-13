import * as React from 'react';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
//
import { context_api } from '../../../_context/ContextAPI';
//
import { loginRequest } from '../../../_api/account/AccountAPI';
//
import { makeFormData } from '../../../_utils/makeFormData';
//
import InPutNotValid from '../../../components/input/not_valid/input_not_valid/InputNotValid';
import InputNotValidPass from '../../../components/input/not_valid/input_not_valid_pass/InputNotValidPass';
import FetchingThreeDot from '../../../components/fetching/three_dot/FetchingThreeDot';
//
import { login_initial_arr } from '../_initial/LoginInitial';
//
import './Login.scss';

//
export interface ILoginProps {}

//
export default function Login(props: ILoginProps) {
    //
    const use_history = useHistory();

    //
    const { setDataUser } = React.useContext(context_api);

    //
    const [login_state, setLoginState] = useState({
        username: '',
        password: '',
        is_wrong: false,
        is_fetching: false,
    });

    const { username, password, is_wrong } = login_state;

    //
    async function login() {
        try {
            setLoginState({
                ...login_state,
                is_fetching: true,
            });

            const res = await loginRequest(
                makeFormData({
                    username: username,
                    password: password,
                })
            );

            if (res.data == 'wrong') {
                setLoginState({
                    ...login_state,
                    is_wrong: true,
                    is_fetching: false,
                });
            } else {
                setDataUser(res.data);
                use_history.push('/chat');
            }
        } catch (er) {
            console.log(er);
        }
    }

    //
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setLoginState({
            ...login_state,
            [e.target.name]: e.target.value,
        });
    }

    //
    function handleSubmit(e: React.FormEvent<Element>) {
        e.preventDefault();

        login();
    }

    //
    return (
        <div className="Login bg-linear-45-success-tear">
            <div className="Login_form margin-auto padding-8px brs-5px-md bg-react">
                <h2 className="Login_title margin-0 App_title">Login</h2>

                <div>
                    {is_wrong ? (
                        <div className="Login_error text-red">
                            Username or password was wrong
                        </div>
                    ) : null}
                </div>

                <form autoComplete="off" onSubmit={handleSubmit}>
                    <div>
                        {login_initial_arr.slice(0, 2).map((item, ix) => (
                            <div key={`${ix}`} className="Login_input">
                                {item.type == 'password' ? (
                                    <InputNotValidPass
                                        password={login_state[item.name]}
                                        name={item.name}
                                        placeholder={item.placeholder}
                                        max_length={item.max_length}
                                        handleChange={handleChange}
                                    />
                                ) : (
                                    <InPutNotValid
                                        value={login_state[item.name]}
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
                            className="Login_btn btn btn-hv btn-active w-100per brs-5px padding-8px"
                            type="submit"
                        >
                            <h2 className="margin-0 font-16px text-white">
                                Login
                            </h2>
                        </button>
                    </div>
                </form>

                <div className="Login_or text-align-center label-field">or</div>

                <div className="Login_register">
                    <div className="Login_register-btn">
                        <Link to="/register">
                            <div className="padding-8px brs-5px bg-green">
                                <h2 className="margin-0 text-align-center font-16px text-white">
                                    Sign up
                                </h2>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            <div
                className={`pos-fixed-100 z-index-lv5 bg-s-through ${
                    login_state.is_fetching ? '' : 'display-none'
                }`}
            >
                <div className="pos-abs-center">
                    <FetchingThreeDot is_fetching={login_state.is_fetching} />
                </div>
            </div>
        </div>
    );
}
