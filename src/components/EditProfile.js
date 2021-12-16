import {useState, useEffect, useContext} from 'react'
import {useParams, Link} from 'react-router-dom'
import {Spinner} from 'react-bootstrap'
import axios from 'axios'
import { API_URL } from '../config'
import { UserContext } from '../context/app.context'
import { InputLabel, MenuItem, Select } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Button from '@mui/material/Button';
import "./EditProfile.css"

const theme = createTheme();

function EditForm(props) {

    const {user} = useContext(UserContext)
    const {btnEdit} = props
    console.log(user)

    if(!user) {
        return <Spinner animation="grow" variant="dark" />
    }

    return (
        <div>
            {/* <h3>Edit Component</h3> */}

            {/* <form onSubmit={(event) => {btnEdit(event, user._id)}} >
            
                <input defaultValue={user.name} name="name"  type="text"  placeholder="Enter name"/>
                <input  type="file"  name="myImage"  accept="image/png, image/jpg"  />

                <h2>Stats</h2>
                <input  name="height"  type="text"  placeholder="height"/>
                <input  name="weight"  type="text"  placeholder="weight"/>
                <input  name="bench"  type="text"  placeholder="Bench"/>
                <input  name="squat"  type="text"  placeholder="squat"/>
                <input  name="deadlift"  type="text"  placeholder="deadlift"/>

                <button  type="submit"  >Edit</button>
		    </form> */}

        <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
                {/* <form onSubmit={btnSubmit}> */}
          <Typography component="h1" variant="h5">
          <h1>Edit Profile</h1>
            
          </Typography>
          <Box component="form" onSubmit={(event) => {btnEdit(event, user._id)}} noValidate sx={{ mt: 1 }}>
            <TextField
                className="edit-textfield"
              margin="normal"
              required
              fullwidth="true"
              id="name"
              label="Enter name"
              name="name"
              autoComplete="name"
              autoFocus
              defaultValue={user.name}
            />
            <h3>Add a picture</h3>
            <input  type="file"  name="myImage"  accept="image/png, image/jpg"  />
            <div>
            <h1>Stats</h1>
            <h4>Add some info about you</h4>
            </div>

            <TextField
            className="edit-textfield"
              margin="normal"
              required
              fullwidth="true"
              name="height"
              label="Height"
              type="shortDescription"
              id="shortDescription"
              autoComplete="current-shortDescription"
              helperText = {props.myError ? props.myError : ""}
              error={props.myError ? true : false}
            />
            <TextField
            className="edit-textfield"
              margin="normal"
              required
              fullwidth="true"
              id="description"
              label="Weight"
              name="weight"
              autoComplete="description"
              autoFocus
            />
            <hr/>
            <TextField
            className="edit-textfield"
              margin="normal"
              required
              fullwidth="true"
              id="description"
              label="Bench"
              name="bench"
              autoComplete="description"
              autoFocus
            />
            <TextField
            className="edit-textfield"
              margin="normal"
              required
              fullwidth="true"
              id="description"
              label="Squat"
              name="squat"
              autoComplete="description"
              autoFocus
            />
            <TextField
            className="edit-textfield"
              margin="normal"
              required
              fullwidth="true"
              id="description"
              label="Deadlift"
              name="deadlift"
              autoComplete="description"
              autoFocus
            />
            <div >
            <Button
                size="large"
                className=""
              type="submit"
              fullwidth="true"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Edit
            </Button>
            </div>
          </Box>
                {/* </form> */}
        </Box>
       </Container>
      </ThemeProvider>        
      </div>
    )
}

export default EditForm