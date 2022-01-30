import React from 'react';
import './Main.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import { Link } from 'react-router-dom';

function Main() {
  return (
    <div className="all-prime">
      <div className="all-main">
        <h1>TRAINET</h1>

        <h2>Ready to train?</h2>
      </div>
      <Link
        to={'/signup'}
        className="link-main"
        style={{ textDecoration: 'none', color: '#3e1c13' }}
      >
        <Button
          variant="contained"
          size="large"
          color="inherit"
          className="boton-main"
        >
          SIGN UP NOW
        </Button>
      </Link>
    </div>
  );
}

export default Main;
