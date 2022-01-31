import * as React from 'react';
import { useContext } from 'react';
import Button from '@mui/material/Button';
import { UserContext } from '../context/app.context';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './CreateWorkout.css';
import TextEditor from './TextEditor';
import { EditorContext } from '../context/editor.context';
const theme = createTheme();

function CreateWorkout(props) {
  const { btnSubmit } = props;
  const { editorText, setEditorText } = useContext(EditorContext);
  return (
    <div className="create-main">
      {/* <input  name="name"  type="text"  placeholder="Enter name"/>
        <input  name="description"  type="text"  placeholder="Enter desc"/>
        <input  type="file"  name="myImage"  accept="image/png, image/jpg"  />
        <Button  type="submit">Submit</Button> */}

      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="sm" className="tarjeta-create">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 5,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {/* <form onSubmit={btnSubmit}> */}
            <Typography component="h1" variant="h4">
              <h1>CREATE WORKOUT</h1>
            </Typography>
            <Box
              component="form"
              onSubmit={btnSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                className="edit-textfield"
                margin="normal"
                required
                // fullwidth="true"
                style={{ width: '70vw' }}
                id="name"
                label="Enter name"
                name="name"
                autoComplete="name"
                autoFocus
              />
              <TextField
                className="edit-textfield"
                margin="normal"
                required
                fullwidth="true"
                style={{ width: '70vw' }}
                name="shortDescription"
                label="Enter a short description"
                type="shortDescription"
                id="shortDescription"
                autoComplete="current-shortDescription"
                helperText={props.myError ? props.myError : ''}
                error={props.myError ? true : false}
              />
              {/* <TextField
                className="edit-textfield"
                margin="normal"
                required
                fullwidth="true"
                style={{ width: '70vw' }}
                id="description"
                label="Enter a description"
                name="description"
                autoComplete="description"
                autoFocus
              /> */}
              <TextEditor />
              <div className="img-box-create">
                <input
                  type="file"
                  name="myImage"
                  accept="image/png, image/jpg"
                />
              </div>

              <div>
                <Button
                  type="submit"
                  fullwidth="true"
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Submit
                </Button>
              </div>
            </Box>
            {/* </form> */}
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default CreateWorkout;
