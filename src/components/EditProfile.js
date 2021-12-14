import {useState, useEffect, useContext} from 'react'
import {useParams, Link} from 'react-router-dom'
import {Spinner} from 'react-bootstrap'
import axios from 'axios'
import { API_URL } from '../config'
import { UserContext } from '../context/app.context'


function EditForm(props) {

    const {user} = useContext(UserContext)
    const {btnEdit} = props
    console.log(user)

    if(!user) {
        return <Spinner animation="grow" variant="dark" />
    }

    return (
        <div>
            <h3>Edit Component</h3>

            <form onSubmit={(event) => {btnEdit(event, user._id)}} >
            
                <input defaultValue={user.name} name="name"  type="text"  placeholder="Enter name"/>
                <input defaultValue={user.description} name="description"  type="text"  placeholder="Enter desc"/>
                <button  type="submit"  >Edit</button>
		    </form>
        </div>
    )
}

export default EditForm