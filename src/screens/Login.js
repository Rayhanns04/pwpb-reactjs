import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('admin@gmail.com');
    const [password, setPassword] = useState('password');

    let newEmail = decodeURI(email);

    console.log(newEmail);

    useEffect(() => {
        // axios
        //     .post(
        //         'http://127.0.0.1:8000/api/login?email=admin@gmail.com&password=password',
        //         null
        //     )
        //     .then((res) => {
        //         return console.log(res);
        //     });
        axios
            .post('http://192.168.100.12:8000/api/login', {
                params: {
                    email: newEmail,
                    password: 'password',
                },
                headers: {
                    'Content-Type': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest',
                    responseEncoding: 'utf8',
                },
            })
            .then((response) => {
                return console.log(response.status);
            })
            .catch((err) => console.log(err));
    }, []);

    const getToken = () => {
        axios
            .post(
                'http://127.0.0.1:8000/api/login?email=admin@gmail.com&password=password',
                null
            )
            .then((res) => {
                return console.log(res);
            });
    };

    return (
        <div className="lgn__ms__container">
            <div className="lgn__item__container">
                <h2>LOGIN</h2>
                <div className="lgn__input__container">
                    <div className="lgn__item__input">
                        <label htmlFor="email">EMAIL</label>
                        <input type="text" name="email" />
                    </div>
                    <div className="lgn__item__input">
                        <label htmlFor="password">PASSWORD</label>
                        <input type="text" name="password" />
                    </div>

                    <button className="submit" onClick={() => getToken()}>
                        LOGIN
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
