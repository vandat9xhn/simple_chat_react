import * as React from 'react';
import LearnHookForm from '../hook_form/LearnHookForm';

//
export interface ILearnProps {}

//
export default function Learn(props: ILearnProps) {
    return (
        <div>
            <LearnHookForm />
        </div>
    );
}
