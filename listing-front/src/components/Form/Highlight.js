import React from 'react'

export const Highlight = ({newInput, handleChange}) => {
    return (
        <div className="row g-3 align-items-center">
            <div className="col-12">
                <label htmlFor="highlight" className="col-form-label">Highlights:</label>
            </div>
            <div key='1' className="col-11">
                <input type="text" name="highlight" className="form-control" id="highlight" value={newInput.highlight} onChange={handleChange}/>
            </div>
            <div className="col-1">
                <button id="highlight" type="" className="btn btn-primary">Add</button>
            </div>
        </div>
    )
}
