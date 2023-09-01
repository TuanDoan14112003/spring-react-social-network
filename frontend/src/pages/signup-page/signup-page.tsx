import React from "react";
import SignupForm from "./page-components/signup-form";
import SignupWelcome from "./page-components/signup-welcome";
import background from "../../assets/images/background.png";



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
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}>
                <div style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'start',
                }}>
                    <SignupWelcome />
                </div>
                <SignupForm />
            </div>

        </div>
    )
}