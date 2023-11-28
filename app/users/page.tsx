import React from 'react'

const Userpage = async () => {

    interface User {
        id: number;
        name: string;


    }

    const res = await fetch('https://jsonplaceholder.typicode.com/users', {cache: 'no-store'})
    const users: User[] = await res.json()
  
    return (
    <>
    <h2>
        <b>Users</b>
    </h2>
    <p>{new Date().toLocaleTimeString()}</p>
    <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>

    </>
  ) 
}

export default Userpage