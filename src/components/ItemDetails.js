import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap'
import { useParams } from 'react-router'
import { API_URL } from '../config'
import { UserContext } from '../context/app.context'
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

function ItemDetails(props) {

    const {id} = useParams()
    const [workout, setWorkout] = useState(null)
    const {btnAdd} = props
    const {user} = useContext(UserContext)

    useEffect(() => {

        const getData = async () => {

            let response = await axios.get(`${API_URL}/workouts/${id}`, {withCredentials: true})
            setWorkout(response.data)
            console.log(response.data)
        }

        getData()
    }, [])

    if(!workout) {
        return <Spinner animation="grow" variant="dark" />
    }

    return (
        <div>
            <h1>{workout.name}</h1>
            <img src={workout.image}/>
            <p>{workout.description}</p>
            <h3>Created by</h3>

            <button onClick={() => {btnAdd(id, user._id)}}>Add</button>
        </div>
    )
}

export default ItemDetails
