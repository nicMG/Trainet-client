import React, { useContext } from 'react'
import { UserContext } from '../context/app.context'

function Profile() {

    const {user} = useContext(UserContext)
    console.log(user)

    if(!user){
        return <p>Loading bitch</p>
    }

    return (
        <div>
            Hello this is {user.name}
            
        </div>
    )
}

export default Profile
