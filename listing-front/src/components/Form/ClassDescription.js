import React from 'react'

export const ClassDescription = () => {
    return (
        <div className="row g-3 align-items-center">
            <div className="col-12">
                <label htmlFor="highlight" className="col-form-label">Class Description:</label>
            </div>
            <div className="col-12">
                <textarea class="form-control" aria-label="With textarea"></textarea>
            </div>
        </div>
    )
}
