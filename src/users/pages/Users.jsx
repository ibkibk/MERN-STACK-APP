import React from 'react'
import UserList from "../components/UsersList"


const Users=() =>{

    const USERS =[{id:"u1",name:"ibrahim kurhan",image:"https://unsplash.com/photos/TRXSkmJb40c",image:3}];
    return (
        <UserList items={USERS}/>
    )
}
export default  Users;