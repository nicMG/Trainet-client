import React from 'react'
import { useContext } from 'react'
import {Button} from  'react-bootstrap'
import { UserContext } from '../context/app.context'

function CreateWorkout(props) {

    const {btnSubmit} = props

    return (

        <form onSubmit={btnSubmit}>
        <input  name="name"  type="text"  placeholder="Enter name"/>
        <input  name="description"  type="text"  placeholder="Enter desc"/>
        <input  type="file"  name="myImage"  accept="image/png, image/jpg"  />
        <Button  type="submit">Submit</Button>
		</form>
    )
}

export default CreateWorkout
