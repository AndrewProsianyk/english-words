import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../../redux/auth/user-actions';
import operations from '../../redux/auth/auth-operations'

export default function LoginForm() {
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            default:
                return;
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(operations.login({ email, password }))
        dispatch(setCurrentUser({ email, password }));
        setEmail('');
        setPassword('');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChange} />
                </label>
                <label htmlFor="">
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange} />
                </label>
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}
