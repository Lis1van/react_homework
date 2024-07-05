import React from 'react';
import { FieldError } from 'react-hook-form';

interface FormInputProps {
    id: string;
    label: string;
    register: any;
    error?: FieldError;
    type?: string;
    as?: 'input' | 'textarea';
}

const FormInput: React.FC<FormInputProps> = ({ id, label, register, error, type = 'text', as = 'input' }) => {
    const InputElement = as;

    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <InputElement id={id} type={type} {...register(id)} />
            {error && <span>{error.message}</span>}
        </div>
    );
};

export default FormInput;
