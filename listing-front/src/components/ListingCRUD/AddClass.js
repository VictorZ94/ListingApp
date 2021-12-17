import React, { useState } from 'react'
import { Category } from '../Form/Category';
import { Highlight } from '../Form/Highlight';
import { Title } from '../Form/Title';
import { ClassDescription } from '../Form/ClassDescription';


export const AddClass = () => {

    const initialState = [
        {title: ""},
        {description: ""},
        {highlight: ""},
    ]
    const [newInput, setNewInput] = useState(initialState)

    const handleChange = (e) => {

        const { name, value } = e.target;
        setNewInput({...setNewInput, [name]: value});
        console.log(value)
    }

    return (
        <form>
            <Title newInput={newInput} handleChange={handleChange}/>

            <hr />

            <Category />

            <hr />

            <Highlight newInput={newInput} handleChange={handleChange} />

            <hr />

            <ClassDescription />

            <hr />

            <div className="row g-3 align-items-center">
                <div className="col-auto">
                    <label htmlFor="highlight" className="col-form-label">:</label>
                </div>
                <div className="col-auto">
                    <input type="text" className="form-control" id="highlight"/>
                </div>
            </div>

            <hr />

            <pre>
                {
                    JSON.stringify(newInput, null)
                }
            </pre>
        </form>
    )
}
