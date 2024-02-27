import React from 'react';


function CourseCard({ course_prefix, course_code, course_title, average_stars, total_reviews, offered_terms }: {
  course_prefix: string;
  course_code: number;
  course_title: string;
  average_stars: number;
  total_reviews: number;
  offered_terms: string[];
}) {
    return (
      <div className="bg-white rounded-md shadow mb-4 p-4 flex flex-col items-start justify-between">
        <span className="flex items-start justify-between mb-4">
          <span className="flex flex-wrap items-end">
            <h3 className="text-2xl font-extrabold text-black pr-35">{course_prefix}{course_code}</h3>

          </span>
          
          <div className="flex flex-wrap items-end">
            <p className="text-gray-500 text-3xl ml-5">★★★★★</p>
            {/* <br></br> */}
            <p className="text-gray-500 text-sm text-end">{total_reviews} reviews</p>
          </div>

        </span>

        <h2 className="text-sm text-black mb-10">{course_title}</h2>

        <div className="flex flex-wrap gap-2">
          {offered_terms.map((term, index) => (
            <span
              key={index}
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
  

