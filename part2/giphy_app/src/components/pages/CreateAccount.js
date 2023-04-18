import { useContext, useState } from "react";
import { Card } from "react-bootstrap";
import { useFormik } from "formik";
import { Store } from '../appContext/Store'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

export default function CreateAccount() {

    console.log(Store)
    // const {actions } = useContext(Store)

    const loginForm = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: ""
        },
        onSubmit: (values) => {
            console.log(values)
            // actions.createUser({...values})
            toast('Successfully logged in our user')
        },
        onReset: (values) => {

        },
        validate: (values) => {
            const errors = {}
            if(!values.username) errors.username = "Field Required"
            if(!values.email) errors.email = "Field Required"
            if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) errors.email = "Invalid Email"
            if(!values.password) errors.password = "Field Required";
            if(values.password.length < 8) errors.password = "Password must be more than 8 characters"
            console.log(errors)
            return errors;
        }
    })

    return (
        <>
        <ToastContainer />
        <Card>
        <div className="container">
            <form onSubmit={loginForm.handleSubmit}>
                <input 
                    type="input" 
                    className="form-control"
                    id="username" 
                    name="username" 
                    placeholder="Enter Username" 
                    onChange={loginForm.handleChange} 
                    value={loginForm.values.username} 
                    />
                    {loginForm.errors.username ? (
                        toast(loginForm.errors.username)
                    ): null }

                <input 
                    type="input" 
                    className="form-control"
                    id="email" 
                    name="email" 
                    placeholder="Enter Email" 
                    onChange={loginForm.handleChange} 
                    value={loginForm.values.email} 
                    />
                    {loginForm.errors.email ? (
                        toast(loginForm.errors.email)
                    ): null }

                <input 
                    type="input" 
                    className="form-control"
                    id="password" 
                    name="password" 
                    placeholder="Enter Password" 
                    onChange={loginForm.handleChange} 
                    value={loginForm.values.password} 
                    />
                    {loginForm.errors.password ? (
                        toast(loginForm.errors.password)
                    ): null }
                
                <button type="submit"
                    className="btn btn-light"
                    id='submit-button'
                    disabled={!(loginForm.isValid && loginForm.dirty)
                    }
                    >
                        Create Account
                    </button>
            </form>
        </div>
        </Card>
        
        </>
    )

}
