import React, { useState, useEffect } from 'react';
const axios = require('axios');

const Jobs = () => {
  const [job, setJob] = useState([]);

  useEffect(() => {
    axios.get('https://codepen.io/jobs.json')
        .then(res => setJob(res.data.jobs))
  }, [])
  
  return (
    <div>
      {job.map((job) => {
        return (
          <div className='container mx-auto my-6 p-4 border border-black'>
            <a href={job.url} target='_blank'> <h3 className='font-bold text-xl'>{job.company_name}</h3> </a>
            <p>{job.title}</p>
            {!job.location && <p>Remote</p>}
            <p>{job.location}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Jobs;