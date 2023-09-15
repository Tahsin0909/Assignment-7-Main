import'./Course.css'
const Course = ({ courseData }) => {
    console.log(courseData)
    const { course, description, creditHours, price, banner } = courseData
    return (
        <div className='mt-2'>
            <div className="card card-compact width-overwrite bg-base-100 shadow-xl">
                <figure><img id="banner-img" src={banner} alt="banner-img" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{course}</h2>
                    <p>{description}</p>
                    <div className='price-credit'>
                    <div className='price-container'>
                        <img className='icon' src="../../../src/icon/dollar.png" alt="price" />
                        <p>Price : {price}</p>
                    </div>
                    <div className='credit-container'>
                        <img className='icon' src="../../../src/icon/open-book.png" alt="credit" />
                        <p>Credit : {creditHours} hr</p>
                    </div>
                    </div>
                    <div className="select-btn">
                        <button className="btn btn-primary toSelect">Select</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;