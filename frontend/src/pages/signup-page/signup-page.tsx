import React from "react";
import SignupForm from "./page-components/signup-form";
import background from "../../assets/image/background.png";


export default function SignupPage() {
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
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}>
                <SignupForm />
            </div>

        </div>
    )
}