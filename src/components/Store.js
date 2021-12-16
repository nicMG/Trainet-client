import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { API_URL } from '../config'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./Store.css"



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
        <div className='store'>
        <h1>STORE</h1>
        
        <h2>Browse workouts</h2>

        <div className='store-list'>
            {
                workouts.map((ele) => {
                return(
                <div className='store-item'>
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        >
                        <Typography>{ele.name}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            {ele.shortDescription}
                            <br></br>
                            <Link to={`/store/${ele._id}`}>Details</Link>
                        </Typography>
                        </AccordionDetails>
                    </Accordion>


                    {/* <h1>{ele.name}</h1>
                    <Link to={`/store/${ele._id}`}>{ele.name}</Link>
                    <p>{ele.description}</p> */}
                </div>
                )
            })
            }
        </div>
        
        </div>

    )
}

export default Store
