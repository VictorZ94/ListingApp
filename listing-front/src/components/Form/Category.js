import React from 'react'

export const Category = () => {
    return (
        <div className="row g-3 align-items-center">
            <div className="col-auto">
                <label for="category" className="col-form-label">Category :</label>
            </div>
            <div className="col-auto">
                <select className="form-select" id="category">
                    <option value="1">Drinks</option>
                    <option value="1">Food</option>
                    <option value="1">Art</option>
                </select>
            </div>
            <div className="col-auto">
                <select className="form-select" id="category">
                    <option value="1">Virtual</option>
                    <option value="1">On site</option>
                </select>
            </div>
        </div>
    )
}
