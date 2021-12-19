import React, { useEffect, useState } from 'react'
import * as CallServer from './CallServer'
import { AllClasses } from './AllClasses'


export const ListClasses = () => {

    const [classes, setClasses] = useState([])

    const listClass = async () => {
        try {
            const res = await CallServer.listClass();
            const data = await res.json();
            setClasses(data.classes);
        } catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        listClass();
    }, [])

    return (
        <div className='container-fluid'>
            <div className="row">
                {
                    classes.map((oneClass) => <AllClasses key={oneClass.slug} data={oneClass} />)
                }
            </div>
        </div>
    )
}
