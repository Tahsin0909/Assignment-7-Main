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

    const [creditHours, setCreditHours] = useState([]);
    const [price, setPrice] = useState([]);
    const [creditRemaining, setCreditRemaining] = useState([]);


    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    // console.log(Courses)
    const handleClick = (pera) => {
        const isExists = selectCourse.find(data => data.id == pera.id)
        // if the course already select
        let count = pera.creditHours
        let count2 = pera.price
        if (isExists) {
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
            selectCourse.forEach((item)=>
                count = count + item.creditHours
            )
            setCreditHours(count)
            if(creditHours > 17){
                toast.warn('Credit hours exceed 20.', {
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

            selectCourse.forEach((item2)=>
                count2 = count2 + item2.price
            )
            setPrice(count2)

            const creditRemaining = 20 - count;
            if(creditRemaining < 0){
                toast.warn('Not Enough Credit', {
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
            setCreditRemaining(creditRemaining)
            
        }
        // if the course already select
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
                <Cart setPrice={setPrice} creditHours={creditHours} price={price} creditRemaining={creditRemaining} selectCourse={selectCourse}></Cart>
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