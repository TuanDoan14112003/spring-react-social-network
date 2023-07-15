import React from 'react';
import Login from './page-components/Login';
import LoginWelcome from './page-components/LoginWelcome';
import background from '../../assets/images/background.png';

export default function LoginPage() {
    return (
        <div style={{
            background: `url(${background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: "100vw",
            height: "100vh",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <div style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
            }}>
                <div style={{ marginRight: "30%" }}>
                    <LoginWelcome />
                </div>
                <Login />
            </div>
        </div>

    )
}