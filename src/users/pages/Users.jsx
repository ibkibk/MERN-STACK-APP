import React from 'react'
import UserList from "../components/UsersList"


const Users=() =>{

    const USERS =[{id:"u1",name:"ibrahim kurhan",image:"https://www.pexels.com/photo/graceful-goose-with-striped-plumage-on-embankment-4558715/",image:3}];
    return (
        <UserList items={USERS}/>
    )
}
export default  Users;