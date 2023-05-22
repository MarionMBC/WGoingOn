/* eslint-disable no-unused-vars */
import React from 'react';
import InputComponent from "../InputComponent.jsx";
import { useForm } from "../../hooks/useForm";
import AuthButton from "../button/AuthButton.jsx";
import axios from "axios";

const LoginScreen = ({ onAuth }) => {
    const onSubmit = (e) => {
        e.preventDefault();
        const { value } = e.target[0];
        axios
            .post("http://localhost:8092/authenticate", { username: value })
            .then((r) => onAuth({ ...r.data, secret: value }))
            .catch((e) => console.log("Auth Error", e));
    };

    const [formState, handleInputChange, , ,] = useForm({
        username: '',
    })
    const { username } = formState;

    const userNameInput = {
        type: 'text',
        name: 'username',
        value: username,
        placeholder: 'Username',
        required: true,
        handleInputChange
    }


    return (
        <div className='flex flex-col'>
            <h1 className='font-thin text-yellow-400 mt-10 text-center text-2xl'>WGoingOn</h1>
            <form onSubmit={onSubmit} className={'py-32'}>
                <div
                    className='rounded space-y-4 mx-10 opacity-90 flex flex-col bg-white text-gray-500 font-normal p-4 sm:mx-48 md:mx-60 lg:mx-96 xl:mx-[30rem]'>
                    <p className={'self-baseline text-2xl'}>Welcome</p>
                    <InputComponent {...userNameInput} />
                    <AuthButton content='Login' />
                </div>
            </form>
        </div>
    );
}

export default LoginScreen;