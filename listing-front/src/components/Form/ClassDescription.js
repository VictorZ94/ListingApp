import React from 'react'

export const ClassDescription = ({newInput, handleChange}) => {
    return (
        <div className="row g-3 align-items-center">
            <div className="col-12">
                <label htmlFor="description" className="col-form-label">Class Description:</label>
            </div>
            <div className="col-12">
                <input type="text" name="description" value={newInput.description} onChange={handleChange} className="form-control" id="description"/>
            </div>
        </div>
    )
}
