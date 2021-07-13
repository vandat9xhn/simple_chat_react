import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
//
import { render, fireEvent, cleanup, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
// 
import ContextProvider from '../../../_context/ContextProvider';
//
import Login from '../_main/Login';

// 
afterEach(cleanup);

//
describe('Login', () => {
    test('Show fetching when logging in', async () => {
        const { container, getByRole, getByTitle } = render(
            <BrowserRouter>
                <ContextProvider>
                    <Login />
                </ContextProvider>
            </BrowserRouter>
        );

        const btn = getByRole('button', {
            name: 'Login'
        })
        
        await act(async () => {
            expect(btn).not.toBeDisabled()
            expect(getByTitle('Fetching')).toHaveClass('display-none')

            fireEvent.click(btn);
        });

        expect(btn).toBeDisabled();
        expect(getByTitle('Fetching')).not.toHaveClass('display-none')
    });
});
