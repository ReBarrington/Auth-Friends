import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class FriendsList extends React.Component {

    state = {
        friends: [
            {
                id: 0,
                name: '',
                age: 0,
                email: ''
            }
        ]
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        axiosWithAuth()
        .get('/api/friends')
        .then(res => {
            console.log(res, ' response from getData')
            this.setState({
                friends: res.data
            })
        })
        .catch(err => {
            console.log(err.resposne)
        })
    }

    render() {
        // return <p> Friends go Here!</p>
        return (
            this.state.friends.map(friend => (
                <div className='friend-card'>
                    <h1>{friend.name}</h1>
                    <p>Age: {friend.age}</p>
                    <p>Email: {friend.email}</p>
                </div>
            ))
        )
    }
}

export default FriendsList