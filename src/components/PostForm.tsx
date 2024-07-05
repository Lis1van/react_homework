import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';
import axios from 'axios';
import FormInput from './FormInput';

interface IPostForm {
    title: string;
    body: string;
}

const schema = Joi.object({
    title: Joi.string()
        .min(5)
        .max(30)
        .required()
        .messages({
            'string.empty': 'Title is required',
            'string.min': 'Title must be at least 5 characters long',
            'string.max': 'Title must be at most 30 characters long',
        }),
    body: Joi.string()
        .min(10)
        .max(200)
        .required()
        .messages({
            'string.empty': 'Body is required',
            'string.min': 'Body must be at least 10 characters long',
            'string.max': 'Body must be at most 200 characters long',
        }),
});

const PostForm: React.FC = () => {
    const { register, handleSubmit, formState: { errors, isValid }, reset } = useForm<IPostForm>({
        resolver: joiResolver(schema),
        mode: 'onChange',
    });

    const onSubmit: SubmitHandler<IPostForm> = async (data) => {
        try {
            const response = await axios.post('https://jsonplaceholder.typicode.com/posts', data);
            console.log('Response:', response.data);
            reset();
        } catch (error) {
            console.error('Error submitting the form:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormInput
                id="title"
                label="Title"
                register={register}
                error={errors.title}
            />
            <hr/>
            <FormInput
                id="body"
                label="Body"
                register={register}
                error={errors.body}
                as="textarea"
            />
            <button type="submit" disabled={!isValid}>Submit</button>
        </form>
    );
};

export default PostForm;
