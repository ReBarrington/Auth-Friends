import React, { useState } from 'react';
import { newFriend } from '../actions/actions';
import { connect } from 'react-redux';

const FriendsForm = props => {

    const [card, setCard] = useState({
        name: '',
        age: '',
        email: ''
    })

    const handleChanges = e => {
        setCard({...card, [e.target.name]: e.target.value })
    };


    const submitForm = e => {
        e.preventDefault();
        props.newFriend(card);
        setCard({
          name: "",
          age: "",
          email: "",
        });
    }

    return (
        <div>
            <form onSubmit={submitForm}>
                <label htmlFor='name'>Name:
                <input
                    type='text'
                    name='name'
                    value={card.name}
                    onChange={handleChanges}
                />
                </label>
                <label htmlFor='age'>Age:
                <input
                    type='text'
                    name='age'
                    value={card.age}
                    onChange={handleChanges}
                />
                </label>
                <label htmlFor='email'>Email:
                <input
                    type='email'
                    name='email'
                    value={card.email}
                    onChange={handleChanges}
                />
                </label>
                <button>Submit</button>
            </form>
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
export default connect(mapStateToProps, {newFriend}) (FriendsForm);