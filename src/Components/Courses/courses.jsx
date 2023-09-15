import './Courses.css'
import { useState } from 'react';
import Course from '../Course/Course';
import { useEffect } from 'react';
const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(()=>
    {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    }
    ,[])
    console.log(Courses)
    return (
            <div className='courses-container'>
            {
                courses.map((data) => <Course key={data.id} courseData={data}></Course>)
            }
            </div>
    );
};
export default Courses;