# Course-Registration
---
### **Feature**
---
>-Course Selection: Users can select courses from a list, and the selected courses are dynamically added to a list of         chosen courses.

>-Credit Hours Management: The component keeps track of the total credit hours for selected courses, ensuring they do not exceed 20, and displays the remaining available credit hours.

>-Price Calculation: The component calculates and displays the total price of the selected courses, updating in real-time as courses are added or removed from the selection.
---
### **Discussion The Use of State**
---
>1. courses State: const [courses, setCourses] = useState([]);
    This state is used to store an array of course data fetched from an external JSON file. It is initialized as an empty array using useState([]).
    The setCourses function is used to update the state with the fetched data inside the useEffect.

 >2. selectCourse State:
    const [selectCourse, setSelectCourse] = useState([]);
    This state is used to keep track of the selected courses by the user. It starts as an empty array and is updated when a course is selected.
    When a course is selected, it is added to this array using setSelectCourse.

>3.creditHours State:
    const [creditHours, setCreditHours] = useState([]);
    This state is used to maintain the total credit hours of the selected courses. It is initialized as an empty array, which is not the correct initial value for credit hours. It should be initialized as 0.
    The setCreditHours function is used to update this state whenever a course is selected.

>4.price State:
    const [price, setPrice] = useState([]);
    Similar to creditHours, this state is used to keep track of the total price of the selected courses. It should be initialized as 0, not as an empty array.
    The setPrice function is used to update this state when a course is selected.

>5.creditRemaining State:
    const [creditRemaining, setCreditRemaining] = useState([20]);
    This state is used to track the remaining credit hours available to the user. It is initialized with a value of 20.
    setCreditRemaining is used to update this state, ensuring that the credit hours do not exceed 20, and if they do, it sets the remaining credit hours to 0.