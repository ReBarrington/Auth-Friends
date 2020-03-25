import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getData, newFriend } from '../actions/actions';
import FriendsForm from './FriendsForm';
import styled from 'styled-components';

const StyledCard = styled.div `
    border: 5px solid black;
    margin: 2%;
    `

const FriendsList = props => {

    useEffect(  () => {
        props.getData()
    }, [])

    return (
        <div>
            <FriendsForm friends={props.friends}/>
            {props.friends.map(friend => (
                <StyledCard className='friend-card' key={friend.id}>
                    <h1>{friend.name}</h1>
                    <p>Age: {friend.age}</p>
                    <p>Email: {friend.email}</p>
                </StyledCard>
            ))}
        </div>
    )
    
}


// getting state using connect (state is in store)
const mapStateToProps = state => {
    return {
        friends: state.friends
    }
}
// getData is from action file and is placed in the position of mapDispatchToProps
export default connect(mapStateToProps, {getData, newFriend}) (FriendsList);
