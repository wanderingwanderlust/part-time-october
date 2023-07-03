import { useContext, useState } from "react";
import axios from 'axios';
import { Card } from "react-bootstrap";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate, useLocation} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css'

export default function CreateAccount() {
    const navigate = useNavigate();
    const location = useLocation();
    let { from } = location.state || {from: {pathname: '/'}}

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const createAccount = (e) => {
        e.preventDefault();
        console.log(username, email, password)
        const user = {
            username: username,
            email: email,
            password: password
        }
        console.log(user)
        axios.post("/auth/signup", user).then((res) => {
            console.log(res)
        })
        navigate(from)

    }

    
    return (
        <>
        <ToastContainer />
        <Card>
            <form onSubmit={createAccount}>
                <div className="form-group">
                    <label>Username</label>
                    <input
                        placeholder="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        placeholder="email@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        placeholder="*****"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button className="btn btn-primary">Create Account</button>
            </form>
        </Card>
        </>
    )
}
