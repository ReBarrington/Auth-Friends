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
        .get('http://localhost:5000/api/friends')
        .then(res => {
            console.log(res)
            this.setState({
                friends: res.data.friends
            })
        })
        .catch(err => {
            console.log(err.resposne)
        })
    }

    render() {
        return (
            <h1>FriendsList here</h1>

        )
    }
}