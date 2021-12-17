import React from 'react'

export const Title = () => {
    return (
        <div className="row g-3 align-items-center">
            <div className="col-auto">
                <label htmlFor="title" className="col-form-label">Title :</label>
            </div>
            <div className="col-11">
                <input type="text" className="form-control" id="title"/>
            </div>
        </div>
    )
}
