import React from 'react';
import Login from './page-components/login-form';
import Welcome from "../../components/authentication-navigation/welcome"
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
                <div style={{ 
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'start',
                 }}>
                    <Welcome />
                </div>
                <Login />
            </div>
        </div>

    )
}