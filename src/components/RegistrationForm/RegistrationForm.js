import { useState } from 'react'
import { useDispatch } from 'react-redux';
import operations from '../../redux/auth/auth-operations'

export default function RegistrationForm() {
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'name':
                return setName(value);
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
        dispatch(operations.register({ name, email, password }))
        setName('');
        setEmail('');
        setPassword('');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">
                    <input
                        type="name"
                        name="name"
                        value={name}
                        onChange={handleChange} />
                </label>
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
                <button type='submit'>Register</button>
            </form>
        </div>
    )
}
