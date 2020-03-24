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

    componentDidUpdate(prevProps, prevState) {
        if (prevState.friends !== this.state.friends) {
            console.log('it updated!')
        }
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
            console.log(err.response)
        })
    }

    render() {
        return (
            <div>
                <FriendsForm friends={this.state.friends}/>
                {this.state.friends.map(friend => (
                    <StyledCard className='friend-card' key={friend.id}>
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