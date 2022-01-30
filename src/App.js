import React, { useContext, useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Errorpage from './components/Errorpage';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Nav from './components/Nav';
import Profile from './components/Profile';
import Main from './components/Main';
import Store from './components/Store';
import ItemDetails from './components/ItemDetails';
import axios from 'axios';
import { API_URL } from './config';
import { UserContext } from './context/app.context';
import SignInCoach from './components/SignInCoach';
import SignUpCoach from './components/SignUpCoach';
import CreateWorkout from './components/CreateWorkout';
import EditWorkout from './components/EditWorkout';
import EditProfile from './components/EditProfile';
import YourWorkouts from './components/YourWorkouts';

function App() {
  const { user, setUser } = useContext(UserContext);
  const [error, setError] = useState(null);
  const [workOuts, setWorkOuts] = useState([]);
  const [fetchingUser, setFetchingUser] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        let userResponse = await axios.get(`${API_URL}/user`, {
          withCredentials: true,
        });
        setFetchingUser(false);
        setUser(userResponse.data);
      } catch (error) {
        setFetchingUser(false);
      }
    };

    getData();
  }, []);

  const handleSignIn = async (event) => {
    event.preventDefault();
    try {
      let newUser = {
        email: event.target.email.value,
        password: event.target.password.value,
      };

      let response = await axios.post(`${API_URL}/signin`, newUser, {
        withCredentials: true,
      });

      setUser(response.data);
      navigate('/profile');
    } catch (error) {
      setError(error.response.data.error);
    }
  };

  const handleSignInC = async (event) => {
    event.preventDefault();
    try {
      let newUser = {
        email: event.target.email.value,
        password: event.target.password.value,
      };

      let response = await axios.post(`${API_URL}/signin/coach`, newUser, {
        withCredentials: true,
      });
      console.log(response.data);
      setUser(response.data);
      navigate('/profile');
    } catch (error) {
      setError(error.response.data.error);
    }
  };

  const handleLogOut = async () => {
    await axios.post(`${API_URL}/logout`, {}, { withCredentials: true });
    setUser(null);
    navigate('/');
  };

  const handleCreateWk = async (event) => {
    event.preventDefault();

    let imageForm = new FormData();
    imageForm.append('imageUrl', event.target.myImage.files[0]);
    let imgResponse = await axios.post(`${API_URL}/upload`, imageForm);
    // console.log(event.target.name.value)

    let newWorkOut = {
      name: event.target.name.value,
      shortDescription: event.target.shortDescription.value,
      description: event.target.description.value,
      image: imgResponse.data.image,
    };
    let response = await axios.post(`${API_URL}/workouts/create`, newWorkOut, {
      withCredentials: true,
    });
    setWorkOuts([response.data, ...workOuts]);
    navigate('/store');
  };

  const handleEditProfile = async (event, id) => {
    event.preventDefault();

    let imageForm = new FormData();
    imageForm.append('imageUrl', event.target.myImage.files[0]);
    let imgResponse = await axios.post(`${API_URL}/upload`, imageForm);

    let editedProfile = {
      name: event.target.name.value,
      // description: event.target.description.value,
      image: imgResponse.data.image,
      height: event.target.height.value,
      weight: event.target.weight.value,
      bench: event.target.bench.value,
      squat: event.target.squat.value,
      deadlift: event.target.deadlift.value,
    };
    console.log(editedProfile);
    if (user.isCoach) {
      let response = await axios.patch(
        `${API_URL}/profile/coach/${id}`,
        editedProfile,
        { withCredentials: true }
      );
      console.log(response.data);

      let updatedUser = user;
      updatedUser.name = response.data.name;
      // updatedUser.description = response.data.description
      updatedUser.image = response.data.image;

      setUser(updatedUser);
      navigate('/profile');
      console.log('coach');
    } else {
      let response = await axios.patch(
        `${API_URL}/profile/${id}`,
        editedProfile,
        { withCredentials: true }
      );

      // let updatedUser = user
      // updatedUser.name = response.data.name
      // updatedUser.description = response.data.description
      // updatedUser.image = response.data.image

      setUser(response.data);
      navigate('/profile');
      console.log('user', response.data);
    }
  };

  const handleAddWorkout = async (workoutId, profileId) => {
    let addedRoutine = {
      workoutId: workoutId,
    };

    let response = await axios.patch(
      `${API_URL}/profile/${profileId}`,
      addedRoutine,
      { withCredentials: true }
    );

    let updatedUser = user;
    updatedUser.routines = response.data.routines;

    setUser(updatedUser);
    navigate('/profile');
    console.log(user);
  };

  if (fetchingUser) {
    return <p>Fetching</p>;
  }

  return (
    <div>
      <Nav btnLogOut={handleLogOut} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/signin"
          element={<SignIn onSignIn={handleSignIn} myError={error} />}
        />
        <Route
          path="/signin/coach"
          element={<SignInCoach onSignIn={handleSignInC} myError={error} />}
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signup/coach" element={<SignUpCoach />} />
        <Route path="/*" element={<Errorpage />} />
        <Route path="/store" element={<Store />} />
        <Route
          path="/store/:id"
          element={<ItemDetails btnAdd={handleAddWorkout} />}
        />
        <Route path="/workout/:id" element={<YourWorkouts />} />
        <Route path="/profile" element={<Profile userTest={user} />} />
        <Route
          path="/profile/edit"
          element={<EditProfile btnEdit={handleEditProfile} />}
        />
        <Route
          path="/workouts/create"
          element={<CreateWorkout btnSubmit={handleCreateWk} />}
        />
        <Route path="/workouts/:id/edit" element={<EditWorkout />} />
      </Routes>
    </div>
  );
}

export default App;
