import React from 'react';

// export function CourseCard({ courseCode, courseName, terms, reviews }) {
// // export function CourseCard() {
//     // const courseCode = "COMP1511";
//     // const courseName = "Introduction to Programming";
//     // const terms = "Spring 2023";
//     // const reviews = 42;
//     return (

//         <div className="bg-white rounded-md shadow mb-4 p-4">
//             <h1 className="text-xl font-bold text-black">{courseCode}</h1>
//             <div className="flex items-center justify-between mb-2">
//                 <h3 className="text-lg font-medium">{courseCode}</h3>
//                 <p className="text-gray-500">{reviews} reviews</p>
//             </div>
//             <h2 className="text-xl font-bold mb-2">{courseName}</h2>
//             <p className="text-gray-500">{terms}</p>
//         </div>
//     );
// }



function CourseCard({ course_prefix, course_code, course_title, average_stars, total_reviews, offered_terms }) {
    return (
      <div className="bg-white rounded-md shadow mb-4 p-4 flex flex-col items-start justify-between">
        <span className="flex items-start justify-between mb-4">
          <span className="flex flex-wrap items-end">
            <h3 className="text-2xl font-extrabold text-black pr-35">{course_prefix}{course_code}</h3>
            <p className="text-gray-500 text-4xl ml-5">★★★★★</p>
            <br />
            <p className="text-gray-500 text-sm text-end">{total_reviews} reviews</p>
          </span>

          {/* <p className="text-gray-500 text-center">{average_stars.toFixed(1)} stars</p> */}
        </span>


        <h2 className="text-sm text-black mb-10">{course_title}</h2>

        <div className="flex flex-wrap gap-1">
          {offered_terms.map((term) => (
            <span
              className={`px-2 py-1 rounded-xl text-xs text-black font-medium`}
              style={{backgroundColor: "#D4EAF6"}}
            >
              {term}
            </span>
          ))}
        </div>
        
      </div>
    );
  }
  
  export default CourseCard;
  

