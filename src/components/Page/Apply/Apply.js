import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Apply = () => {
    const [apply, setApply] = useState({})
    const { servicesId } = useParams();

    useEffect(() => {
        fetch(`https://warm-oasis-87609.herokuapp.com/services/${servicesId}`)
        .then(res => res.json())
        .then(data => setApply(data))
      
    }, [servicesId])

    return (
        <div>
            <h2>apply</h2>
        </div>
    );
};

export default Apply;