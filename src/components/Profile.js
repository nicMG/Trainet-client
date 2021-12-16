import React, { useContext } from 'react'
import { UserContext } from '../context/app.context'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Fab } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';
import "./Profile.css" 

function Profile(props) {

    const {user} = useContext(UserContext)
    console.log(user)

    const {userTest} = props
    console.log(userTest)

    if(!user){
        return <p>Loading </p>
    }

    
    return (
      <div class="all">
        <div class="header">
            <div class="ProfileCard">
              <img src={user.image}></img>
              <h1>{user.name}</h1>

                <Link to={"/profile/edit"}>
                  <Fab color="secondary" aria-label="edit">
                      <EditIcon />
                  </Fab>
                </Link>
                <div class="stats">
                {
                  user.stats ? <h3>Height: {user.stats.height}</h3>
                  : ""
                }
                {
                  user.stats ? <h3>Weight: {user.stats.weight}</h3>
                  : ""
                }
                <hr/>
                {
                  user.stats ? <h3>Bench Press: {user.stats.bench}</h3>
                  : ""
                }
                {
                  user.stats ? <h3>Squat: {user.stats.squat}</h3>
                  : ""
                }
                {
                  user.stats ? <h3>Deadlift: {user.stats.deadlift}</h3>
                  : ""
                }
              </div>
              </div>
              
              
        </div>
      
      <div className='routine-btn'>
          
             <Button variant="contained"><Link to={"/store"}>Add workouts</Link></Button>  
             <Button variant="contained"><Link to={"/workouts/create"}>Create Workout</Link></Button>
          
      </div>

      
      {/* <div className='routine-btn'>
          {
            !user.isCoach ? <Button variant="contained"><Link to={"/store"}>Add workouts</Link></Button> : <Button variant="contained"><Link to={"/workouts/create"}>Create Workout</Link></Button>
          }
      </div> */}


      <div className="routines-list">
        {
          user.routines.map((ele) => {
              return (
                  <div className="routine-item">
                        <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>{ele.name} 1</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        {ele.shortDescription}
                        <br></br>
                        <Link to={`/workout/${ele._id}`}>Details</Link>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  </div>
              )
          })
      }
      </div>
      
    </div>
    )
}

export default Profile
