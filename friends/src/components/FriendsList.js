import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import FriendsForm from './FriendsForm';
import styled from 'styled-components';

const StyledCard = styled.div `
    border: 5px solid black;
    margin: 2%;
    `

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
            <div>
                <FriendsForm />
                {this.state.friends.map(friend => (
                    <StyledCard className='friend-card'>
                        <h1>{friend.name}</h1>
                        <p>Age: {friend.age}</p>
                        <p>Email: {friend.email}</p>
                    </StyledCard>
                ))}
            </div>
        )
    }
}

export default FriendsList