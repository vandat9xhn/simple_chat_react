import * as React from 'react';
import { useForm } from 'react-hook-form';

// 
export interface IInputTextProps {
}

// 
interface IFormInput {}

// 
export default function InputText (props: IInputTextProps) {
    // 
    const {register, formState, handleSubmit, } = useForm<IFormInput>()

    // 
    function onSubmit(data:IFormInput) {
        
    }

    // 
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" {...register()} />
      </form>
    </div>
  );
}
