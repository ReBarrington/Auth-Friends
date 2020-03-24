import React, { useState } from 'react';

const FriendsForm = props => {

    const [card, setCard] = useState({
        name: '',
        age: '',
        email: ''
    })

    const handleChanges = e => {
        setCard({...card, [e.target.name]: e.target.value })
    };

    return (
        <div>
            <form>
                <label htmlFor='name'>Name:
                <input
                    type='text'
                    name='name'
                    value={card.name}
                    // onChange={}
                />
                </label>
                <label htmlFor='age'>Age:
                <input
                    type='text'
                    name='age'
                    value={card.age}
                    // onChange={}
                />
                </label>
                <label htmlFor='email'>Email:
                <input
                    type='email'
                    name='email'
                    value={card.email}
                    // onChange={}
                />
                </label>
            </form>
        </div>
    )
}

export default FriendsForm