import './Courses.css'
import { useState } from 'react';
import Course from '../Course/Course';
import { useEffect } from 'react';
import Cart from '../Cart/Cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [selectCourse, setSelectCourse] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    // console.log(Courses)
    const handleClick = (pera) => {
        const isExsist = selectCourse.find(data => data.id == pera.id)
        // if the course already select
        if (isExsist) {
            // toast
            toast.warn('Course already selected!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }
        else {
            setSelectCourse([...selectCourse, pera])
        }

    }
    // console.log(selectCourse)
    return (
        <div className='course-body'>
            <div className='courses-container'>
                {
                    courses.map((data) => <Course key={data.id} handleClick={handleClick} courseData={data}></Course>)
                }
            </div>
            <div>
                <Cart selectCourse={selectCourse}></Cart>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <ToastContainer />
        </div>
    );
};
export default Courses;