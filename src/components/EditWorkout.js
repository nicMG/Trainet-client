import React from 'react'
import { useParams } from 'react-router'

function EditWorkout() {

    const {id} = useParams()

    return (
        <div>
            <h3>Edit Component {id}</h3>

            <form onSubmit >
            
            {/* event is passed automatically when 'btnEdit' is invoked by the browser */}
            {/* <form onSubmit={btnEdit} > */}

                <input defaultValue="name" name="name"  type="text"  placeholder="Enter name"/>
                <input defaultValue="description" name="description"  type="text"  placeholder="Enter desc"/>
                <button  type="submit"  >Edit</button>
		    </form>
        </div>
    )
}

export default EditWorkout
