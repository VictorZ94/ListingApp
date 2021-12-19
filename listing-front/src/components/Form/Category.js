import React from 'react'

export const Category = ({newInput, handleChange}) => {
    return (
        <div className="row g-3 align-items-center">
            <div className="col-auto">
                <label htmlFor="category" className="col-form-label">Category :</label>
            </div>
            <div className="col-auto">
                <select className="form-select" value={newInput.newInput} onChange={handleChange} name="category" id="category">
                    <option value="drinks">Drinks</option>
                    <option value="food">Food</option>
                    <option value="art">Art</option>
                </select>
            </div>
            <div className="col-auto">
                <select className="form-select" value={newInput.event} onChange={handleChange} name="event" id="event">
                    <option value="virtual">Virtual</option>
                    <option value="onsite">On site</option>
                </select>
            </div>
        </div>
    )
}
