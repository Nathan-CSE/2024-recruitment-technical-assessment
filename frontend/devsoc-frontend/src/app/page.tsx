import CourseCard from './courseCard';
import SideBar from './sidebar'
import coursesData from './courses.json';

export default function Home() {
  return (
    <div className="container mx-auto px-20 py-8 h-full" style={{ backgroundColor: 'white'}}>
      <div className="flex">

        <SideBar />
        
        <div className="ml-20 w-full">

          <header className="text-left mb-9 flex flex-col gap-4">
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
            className="rounded-md border border-gray-400 py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:ring-opacity-50 w-48 pl-4 mb-5 shadow"
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
                  key={course.course_code}
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
      </div>
    </div>
  );
}
