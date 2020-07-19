import React, {useState} from 'react';

export default {
    title: 'React.memo demo',
}

const NewMessagesCounter: React.FC<any> = (props) => {
    return (
        <div>{props.count}</div>
    )
}

const Users: React.FC<{ users: Array<string> }> = React.memo((props) => {
    console.log('render users');
    return (
        <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
    )
})

export const Example1 = () => {
    const [counter, setCounter] = useState<number>(0);
    const [users, setUsers] = useState<Array<string>>(['Nikki', 'Anna', 'Dimych']);


    const addUser = (userName: string) => {
        setUsers([...users, userName]);
    }

    return (
        <React.Fragment>
            <button onClick={() => setCounter(counter + 1)}></button>
            <button onClick={() => addUser('ReactNative')}></button>
            <NewMessagesCounter count={counter}/>
            <Users users={users}/>
        </React.Fragment>
    )
}