import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap'
import { useParams } from 'react-router'
import { API_URL } from '../config'

function ItemDetails() {

    const {id} = useParams()

    const [workout, setWorkout] = useState(null)

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
            <img src={workout.image}/>
            Item nº {id}
        </div>
    )
}

export default ItemDetails
