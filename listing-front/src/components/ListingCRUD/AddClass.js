import React, { useState } from 'react'
import { Category } from '../Form/Category';
import { Highlight } from '../Form/Highlight';
import { Title } from '../Form/Title';
import { ClassDescription } from '../Form/ClassDescription';
import * as Classes from './CallServer'

export const AddClass = () => {

    const initialState = {
        title: "", 
        highlight: "",
    }

    const [newInput, setNewInput] = useState(initialState)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewInput({...newInput, [name]: value});
    }

    const handleInputSubmit = async (e) => {
        e.preventDefault()
        try {
            console.log(await Classes.addNewClass(newInput));
            setNewInput(initialState);
        } catch(error) {
            console.error(error)
        }
    }

    return (
        <form onSubmit={handleInputSubmit}>
            <Title newInput={newInput} handleChange={handleChange}/>

            <hr />

            <Category newInput={newInput} handleChange={handleChange}/> {/** and event */}

            <hr />

            <Highlight newInput={newInput} handleChange={handleChange} />

            <hr />

            <ClassDescription newInput={newInput} handleChange={handleChange} />

            <hr />

            {/* <div className="row g-3 align-items-center">
                <div className="col-auto">
                    <label htmlFor="highlight" className="col-form-label">:</label>
                </div>
                <div className="col-auto">
                    <input type="text" className="form-control" id="highlight"/>
                </div>
            </div> */}
            <button type="submit" className="btn btn-success">Submit</button>
            <hr />
        </form>
    )
}
