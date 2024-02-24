import Image from "next/image";
import CourseCard from './CourseCard';

export default function Home() {
  const coursesData = [
    {
      "course_prefix": "COMP",
      "course_code": 1511,
      "course_title": "Programming Fundamentals",
      "average_stars": 4.8,
      "total_reviews": 68,
      "offered_terms": [
        "Term 1", "Term 2", "Term 3"
      ]
    },
    {
      "course_prefix": "COMP",
      "course_code": 1531,
      "course_title": "Software Engineering Fundamentals",
      "average_stars": 3.9,
      "total_reviews": 47,
      "offered_terms": [
        "Term 1", "Term 2", "Term 3"
      ]
    },
    {
      "course_prefix": "COMP",
      "course_code": 1521,
      "course_title": "Computer Systems Fundamentals",
      "average_stars": 4,
      "total_reviews": 40,
      "offered_terms": [
        "Term 1", "Term 2", "Term 3"
      ]
    },
    {
      "course_prefix": "COMP",
      "course_code": 2521,
      "course_title": "Data Structures and Algorithms",
      "average_stars": 4,
      "total_reviews": 36,
      "offered_terms": [
        "Summer", "Term 1", "Term 2", "Term 3"
      ]
    },
    {
      "course_prefix": "COMP",
      "course_code": 2511,
      "course_title": "Object-Oriented Design & Programming",
      "average_stars": 3,
      "total_reviews": 33,
      "offered_terms": [
        "Term 1", "Term 2", "Term 3"
      ]
    },
    {
      "course_prefix": "COMP",
      "course_code": 3311,
      "course_title": "Database Systems",
      "average_stars": 4,
      "total_reviews": 33,
      "offered_terms": [
        "Term 1", "Term 3"
      ]
    }
  ]


  return (
    <div className="container mx-auto px-4 py-8" style={{ backgroundColor: 'white'}}>
      <header className="text-left mb-8">
        <h3 style={{color: "black"}}>DevSoc presents</h3>
        <h1 className="text-6xl font-bold" style={{ color: "#4579EE" }}>unilectives</h1>
        <p className="text-lg font-bold" style={{ color: "black" }}>Your one-stop shop for UNSW course and elective reviews.</p>
      </header>

      <div className="flex items-center justify-between mb-4">

        <input 
          type="text" 
          className="px-3 py-2 rounded-md border-2 focus:ring-opacity-50 w-full border-indigo-400 placeholder-indigo-400" 
          placeholder="Search for a course e.g. COMP1511" 
          style={{ 
            // borderColor: '#B3BCEA',
            color: 'black',
          }} 
        />
        
      </div>

      <select 
        className="rounded-md border border-gray-400 py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:ring-opacity-50 w-48 pl-4 mb-5"
        style={{
          backgroundColor: 'white',
          color: 'grey',
          opacity: '75%',
          
        }}
      >
        <option value="" disabled selected>Sort by</option>

      </select>

      <div className="overflow-auto rounded-md shadow">
        
      </div>

      <div className="overflow-auto rounded-md">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {coursesData.map((course) => (
            <CourseCard 
              course_prefix={course.course_prefix}
              course_code={course.course_code}
              course_title={course.course_title}
              average_stars={course.average_stars}
              total_reviews={course.total_reviews}
              offered_terms={course.offered_terms}
            />
          
          ))}
        </div>
      </div>

      
    </div>
  );
}
