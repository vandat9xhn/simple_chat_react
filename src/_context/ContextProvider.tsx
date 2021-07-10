import * as React from 'react';
import { useState, useEffect } from 'react';
//
import { context_api } from './ContextAPI';
// 
import { _type_base_user } from '../_type/Type';
// 
import { API_DefineUser } from '../_api/account/AccountAPI';

//
export interface IContextProviderProps {
    children: React.ReactElement;
}

//
export default function ContextProvider({
    children,
    ...rest_props
}: IContextProviderProps) {
    //
    const [context_state, setContextState] = useState({
        user: {
            id: 0,
            first_name: '',
            last_name: '',
            picture: '',
        },
    });

    const { user } = context_state;

	// 
	useEffect(() => {
		defineUser()
	}, [])

	// 
	async function defineUser() {
		const res = await API_DefineUser()

		setDataUser(res.data)
	}

    //
    function setDataUser(new_user: _type_base_user) {
        setContextState({
            ...context_state,
            user: new_user,
        });
    }

    //
    return (
        <div>
            <context_api.Provider
                value={{
                    ...rest_props,
                    user: user,
                    setDataUser: setDataUser,
                }}
            >
                {children}
            </context_api.Provider>
        </div>
    );
}
