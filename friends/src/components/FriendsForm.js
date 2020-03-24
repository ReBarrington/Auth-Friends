import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const FriendsForm = props => {

    const [card, setCard] = useState({
        name: '',
        age: '',
        email: ''
    })

    const handleChanges = e => {
        setCard({...card, [e.target.name]: e.target.value })
    };

    const addFriend = newCard => {
        console.log(newCard)
        axiosWithAuth()
        .post(newCard)
    }

    const submitForm = e => {
        e.preventDefault();
        addFriend(card)
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

export default FriendsForm