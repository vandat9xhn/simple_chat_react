import * as React from 'react';
// 
const Chat = React.lazy(() => import('../pages/chat/_main/Chat'));
const Login = React.lazy(() => import('../pages/login/_main/Login'));
const Register = React.lazy(() => import('../pages/register/_main/Register'));
const Learn = React.lazy(() => import('../pages/learn/_main/Learn'));

//
export const Routes = [
    {
        path: '/chat',
        component: Chat,
        exact: true,
        auth: false,
    },
    {
        path: '/login',
        component: Login,
        exact: true,
        auth: false,
    },
    {
        path: '/register',
        component: Register,
        exact: true,
        auth: false,
    },
    {
        path: '/learn',
        component: Learn,
        exact: true,
        auth: false,
    },
];
