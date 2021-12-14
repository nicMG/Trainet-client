import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { API_URL } from '../config'


function Store() {

    const [workouts, setWorkouts] = useState([])

    useEffect(() => {

        const getData = async () => {

            let response = await axios.get(`${API_URL}/workouts`, {withCredentials: true})
            setWorkouts(response.data)
        }

        getData()
        console.log(workouts)
    }, [])

    if(!workouts.length) {
        return <Spinner animation="grow" variant="dark" />
    }
    

    return (
        <div>
        <h1>This is the store</h1>
        {
            workouts.map((ele) => {
            return(
            <div>
                <h1>{ele.name}</h1>
                <Link to={`/store/${ele._id}`}>{ele._id}</Link>
            </div>
            )
        })
        }
        </div>

    )
}

export default Store
