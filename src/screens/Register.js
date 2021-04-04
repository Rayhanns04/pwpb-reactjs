import React from 'react';

const Register = () => {
    return (
        <div className="lgn__ms__container">
            <div className="lgn__item__container">
                <h2>REGISTER</h2>
                <div className="lgn__input__container">
                    <div className="lgn__item__input">
                        <label htmlFor="username">USERNAME</label>
                        <input type="text" name="username" />
                    </div>
                    <div className="lgn__item__input">
                        <label htmlFor="email">EMAIL</label>
                        <input type="text" name="email" />
                    </div>
                    <div className="lgn__item__input">
                        <label htmlFor="password">PASSWORD</label>
                        <input type="text" name="password" />
                    </div>

                    <button className="submit">REGISTER</button>
                </div>
            </div>
        </div>
    );
};

export default Register;
