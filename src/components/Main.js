import React from 'react'
import "./Main.css"
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import { Link } from 'react-router-dom';

function Main() {
    return (
        <div className='all'>
            <div className='box'>
            <h1>TRAINET</h1>

            <h2>Ready to train?</h2>
            </div>
            <Button variant="contained" size="large">
          <Link to={"/signup"}>SIGN UP NOW</Link>
        </Button>
        </div>

    )
}

export default Main
