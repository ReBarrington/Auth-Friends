import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password:'',
            isLoading: false
        }
    }

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value,
                isLoading: true
            }
        });
    };

    login = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('/api/login', this.state.credentials)
            .then(res => {
                console.log(res);
                localStorage.setItem('token', JSON.stringify(res.data.payload));
                this.props.history.push('/private-route');
            })
            .catch(err => console.log(err.response))
    }

    render() {
        return (
            <div>
                <form>
                    <input 
                        type="text"
                        name='username'
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                        placeholder='Username'
                    />
                    <input  
                        type='password'
                        name='password'
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                        placeholder='Password'
                    />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default Login