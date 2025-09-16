  export const IconColors = [
    "text-red-400",
    "text-blue-400",
    "text-green-400",
    "text-yellow-400",
    "text-pink-400",
    "text-purple-400",
    "text-indigo-400",
    "text-orange-400",
    "text-teal-400",
    "text-cyan-400",
    "text-emerald-400",
    "text-lime-400",
    "text-rose-400",
    "text-slate-400"
  ];

  export  const menuItems = [
      {name:'Home', href: '/', icon:'home'},
      {name:'About', href: '/about' , icon:'about'},
      {name:'Admissions', href: '/admissions' , icon:'admissions', sections: ['Apply Online','Admission Process','Fees & Scholarships',]},
      {name:'Academics', href: '/academics', icon:'campus' , sections: ['Curriculum','Subjects / Programs','Faculty',]},
      {name:'Students', href: '/students', icon:'stedent', sections: ['Timetable','Assignments','Exams & Results','ELibrary']},
      {name:'Parents', href: '/parents', icon:'parent', sections: ['Notices','Events & Calendar','Fees Payment']},
      {name:'Teachers', href: '/teachers', icon:'teacher', sections: ['Dashboard','Attendance','Lesson Plans']},
      {name:'Announcements', href: '/announcements', icon:'academics'},
      {name:'Gallery', href: '/gallery', icon:'menu'},    
      {name:'Contact', href: '/contact', icon:'contact'},    
  ];

  import Professors1 from '../../public/images/Professors1.jpg'
  import Professors2 from '../../public/images/Professors2.jpg'
  import Professors3 from '../../public/images/Professors3.jpg'
  import Professors4 from '../../public/images/Professors4.jpg'
  import Professors5 from '../../public/images/Professors5.jpg'

  export const ProfessorsList = [
    { name: 'Sarah Thompson', title: 'Dr.', specialTitle: 'PhD in Education', img: Professors1 },
    { name: 'James Miller', title: 'Prof.', specialTitle: 'PhD in Physics', img: Professors2 },
    { name: 'Aisha Khan', title: 'Dr.', specialTitle: 'PhD in Computer Science', img: Professors3 },
    { name: 'Michael Chen', title: 'Prof.', specialTitle: 'PhD in Mathematics', img: Professors4 },
    { name: 'Elena Rodriguez', title: 'Dr.', specialTitle: 'PhD in Psychology', img: Professors5 },
  ];

  export const teachers = [
    { title: 'Mr', name: 'David Johnson' },
    { title: 'Mrs', name: 'Emily Parker' },
    { title: 'Mr', name: 'Robert Williams' },
    { title: 'Ms', name: 'Sophia Brown' },
    { title: 'Mrs', name: 'Olivia Davis' },
    { title: 'Mr', name: 'Daniel Wilson' },
    { title: 'Ms', name: 'Isabella Martinez' },
    { title: 'Mrs', name: 'Grace Taylor' },
    { title: 'Mr', name: 'Ethan Anderson' },
    { title: 'Ms', name: 'Charlotte Lee' },
    { title: 'Mr', name: 'Henry Harris' },
    { title: 'Mrs', name: 'Amelia Scott' },
    { title: 'Mr', name: 'Jack Thompson' },
    { title: 'Ms', name: 'Lily Walker' },
    { title: 'Mr', name: 'Matthew Young' }
  ];


export const schooldays = [ 'Monday','Tuesday','Wednesday','Thursday','Friday', ];

export const subjects = [
  "Mathematics",
  "English",
  "Science",
  "History",
  "Geography",
  "Computer/ICT",
  "Art/Drawing",
  "Music",
  "Physical Education",
  "Moral/Religious Education",
  "Economics/Social Studies",
  "Foreign Language"
];

export const apiLink = 'https://wvwkcjmmfbeholawqxge.supabase.co'
export const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind2d2tjam1tZmJlaG9sYXdxeGdlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY0ODUzMTAsImV4cCI6MjA3MjA2MTMxMH0.n4K2-QBBovwE2x5i9OBh-jD6BgOSL2tqUJkAwJ05zi8'


export const schoolSubjectTimeTable = [
  {date:schooldays[0] , subject:subjects[0], time: '9am - 10am', teacher:teachers[0].name}
]

console.log(schoolSubjectTimeTable[0])
