import Module from './Module'


import './Modulebox.css'
export default function Modulebox({department,current_semester}){
   
   let object_index;
   let sem;

   if(department=='computer'){
       object_index=0;
   }

   

   let departments_semesters_modules = [
      {
          d_name: "computer",
          full_sems:{
          sem_1: {
              m1: "Introduction to Programming",
              m2: "Discrete Mathematics",
              m3: "Digital Logic Design",
              m4: "Computer Systems and Architecture",
              m5: "Data Structures and Algorithms",
              m6: "Calculus",
             
          },
          sem_2: {
              m1: "Object-Oriented Programming",
              m2: "Database Systems",
              m3: "Computer Networks",
              m4: "Operating Systems",
              m5: "Linear Algebra",
              m6: "Electronics and Microprocessors",
              
          },
          sem_3: {
              m1: "Advanced Data Structures",
              m2: "Algorithms",
              m3: "Computer Organization",
              m4: "Embedded Systems",
              m5: "Signal Processing",
              m6: "Probability and Statistics",
          },
          sem_4: {
              m1: "Operating Systems",
              m2: "Computer Networks",
              m3: "Database Management Systems",
              m4: "Microprocessors and Microcontrollers",
              m5: "Machine Learning",
              m6: "Professional and Ethical Issues in Computing"
          },
          sem_5: {
              m1: "Advanced Algorithms",
              m2: "Network Security",
              m3: "Embedded Systems Design",
              m4: "Artificial Intelligence",
              m5: "Computer Architecture",
              m6: "Software Project Management"
          },
          sem_6: {
              m1: "Distributed Systems",
              m2: "Data Mining",
              m3: "Mobile Computing",
              m4: "Cybersecurity",
              m5: "Advanced Machine Learning",
              m6: "Project Work/Internship"
          },
          sem_7: {
              m1: "Cloud Computing",
              m2: "Big Data Analytics",
              m3: "IoT (Internet of Things)",
              m4: "Human-Computer Interaction",
              m5: "Research Methodology",
              m6: "Elective"
          },
          sem_8: {
              m1: "Advanced Computer Networks",
              m2: "Blockchain Technology",
              m3: "Quantum Computing",
              m4: "Ethics in Emerging Technologies",
              m5: "Capstone Project/Thesis",
              m6: "Elective"
          }
      }
      
   }
      
  ];
  
   
    if(current_semester=="sem_1"){sem=departments_semesters_modules[object_index].full_sems.sem_1}
    if(current_semester=="sem_2"){sem=departments_semesters_modules[object_index].full_sems.sem_2}
    if(current_semester=="sem_3"){sem=departments_semesters_modules[object_index].full_sems.sem_3}
    if(current_semester=="sem_4"){sem=departments_semesters_modules[object_index].full_sems.sem_4}
    if(current_semester=="sem_5"){sem=departments_semesters_modules[object_index].full_sems.sem_5}
    if(current_semester=="sem_6"){sem=departments_semesters_modules[object_index].full_sems.sem_6}
    if(current_semester=="sem_7"){sem=departments_semesters_modules[object_index].full_sems.sem_7}
    if(current_semester=="sem_8"){sem=departments_semesters_modules[object_index].full_sems.sem_8}
    
     
   


   return(
    <div className="container_modulebox">
     <Module modulename={sem.m1}/>
     <Module modulename={sem.m2}/>
     <Module modulename={sem.m3}/>
     <Module modulename={sem.m4}/>
     <Module modulename={sem.m5}/>
     <Module modulename={sem.m6}/>
     <Module/>
     
     
     
    </div>
   )
}