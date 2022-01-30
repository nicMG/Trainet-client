import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';
import { API_URL } from '../config';
import { UserContext } from '../context/app.context';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './ItemDetails.css';

function ItemDetails(props) {
  const { id } = useParams();
  const [workout, setWorkout] = useState(null);
  const { btnAdd } = props;
  const { user } = useContext(UserContext);

  useEffect(() => {
    const getData = async () => {
      let response = await axios.get(`${API_URL}/workouts/${id}`, {
        withCredentials: true,
      });
      setWorkout(response.data);
      console.log(response.data);
    };

    getData();
  }, []);

  if (!workout) {
    return <Spinner animation="grow" variant="dark" />;
  }

  return (
    <div className="all">
      <div className="detail-header">
        <div className="detail-header-left">
          <img src={workout.image} className="detail-img" />
        </div>
        <div className="detail-header-right">
          <h1 className="detail-title">{workout.name}</h1>
          <div className="detail-button-container">
            <button
              className="detail-button"
              onClick={() => {
                btnAdd(id, user._id);
              }}
            >
              Add workout
            </button>
          </div>
        </div>
      </div>
      <div className="detail-text">
        <p>{workout.description}</p>
      </div>
    </div>
  );
}

export default ItemDetails;
