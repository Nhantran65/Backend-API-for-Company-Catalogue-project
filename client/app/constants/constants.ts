
const companies = [
  {
    company_id: 1,
    featured: true,
    name: "TechBreeze",
    description: "Leading provider of cloud-based solutions.",
    location: "San Francisco, CA",
    website: "www.techbreeze.com",
    logo: "www.softsprint.com/logo.png",
    industry: "Cloud Services",
    established: "2015-03-21",
    other_details: {
      HQ: "USA",
      Employee_Count: "500+",
    },
  },
  {
    company_id: 2,
    featured: false,
    name: "SoftSprint",
    description: "Software development and consultancy firm.",
    location: "Austin, TX",
    website: "www.softsprint.com",
    logo: "www.softsprint.com/logo.png",
    industry: "Software Development",
    established: "2012-07-18",
    other_details: {
      HQ: "USA",
      Employee_Count: "300+",
    },
  },
  {
    company_id: 3,
    featured: false,
    name: "NexaTech",
    description:
      "Pioneers in artificial intelligence and machine learning solutions.",
    location: "Boston, MA",
    website: "www.nexatech.com",
    logo: "www.nexatech.com/logo.jpg",
    industry: "Artificial Intelligence",
    established: "2017-05-15",
    other_details: {
      HQ: "USA",
      Employee_Count: "800+",
    },
  },
  {
    company_id: 4,
    featured: false,
    name: "SkywardSoft",
    description:
      "Developers of top-tier mobile applications with a global user base.",
    location: "San Diego, CA",
    website: "www.skywardsoft.net",
    logo: "www.skywardsoft.net/logo.jpg",
    industry: "Mobile Application Development",
    established: "2011-02-10",
    other_details: {
      HQ: "USA",
      Employee_Count: "250",
    },
  },
  {
    company_id: 5,
    featured: false,
    name: "DataFlow Systems",
    description: "Specialists in big data analytics and visualization.",
    location: "Seattle, WA",
    website: "www.dataflow.com",
    logo: "www.dataflow.com/logo.jpg",
    industry: "Data Analytics",
    established: "2016-10-24",
    other_details: {
      HQ: "USA",
      Employee_Count: "550+",
    },
  },
  {
    company_id: 6,
    featured: false,
    name: "QuantumLeap Computing",
    description: "Front-runners in quantum computing research and application.",
    location: "Houston, TX",
    website: "www.quantumleap.org",
    logo: "www.quantumleap.org/logo.jpg",
    industry: "Quantum Computing",
    established: "2019-03-21",
    other_details: {
      HQ: "USA",
      Employee_Count: "150",
    },
  },
  {
    company_id: 7,
    featured: false,
    name: "GreenTech Innovations",
    description:
      "Championing sustainable technology solutions for a greener planet.",
    location: "Denver, CO",
    website: "www.greentechinnovations.com",
    logo: "www.greentechinnovations.com/logo.jpg",
    industry: "Sustainable Technologies",
    established: "2015-07-28",
    other_details: {
      HQ: "USA",
      Employee_Count: "400+",
    },
  },
  {
    company_id: 8,
    featured: false,
    name: "VirtualSpace Creations",
    description:
      "Creating immersive virtual reality experiences for gaming and professional training.",
    location: "Los Angeles, CA",
    website: "www.virtualspace.com",
    logo: "www.virtualspace.com/logo.jpg",
    industry: "Virtual Reality",
    established: "2014-11-11",
    other_details: {
      HQ: "USA",
      Employee_Count: "300",
    },
  },
  {
    company_id: 9,
    featured: false,
    name: "NetGuard Solutions",
    description:
      "Providing cutting-edge cybersecurity measures to enterprises globally.",
    location: "New York, NY",
    website: "www.netguard.com",
    logo: "www.netguard.com/logo.jpg",
    industry: "Cybersecurity",
    established: "2013-04-15",
    other_details: {
      HQ: "USA",
      Employee_Count: "700+",
    },
  },
  {
    company_id: 10,
    featured: false,
    name: "CloudCrest",
    description:
      "Enabling businesses with scalable and robust cloud infrastructure.",
    location: "Chicago, IL",
    website: "www.cloudcrest.io",
    logo: "www.cloudcrest.io/logo.jpg",
    industry: "Cloud Services",
    established: "2010-12-05",
    other_details: {
      HQ: "USA",
      Employee_Count: "900+",
    },
  },
];

const users = [
  {
    user_id: 1,
    first_name: "John",
    last_name: "Doe",
    email: "john.doe@example.com",
    password: "[hashed_password]",
    role: "Alumnus",
    profile_picture: "www.example.com/johndoe.png",
    bio: "Software Engineer with 5 years of experience.",
  },
  {
    user_id: 2,
    first_name: "Jane",
    last_name: "Smith",
    email: "jane.smith@example.com",
    password: "[hashed_password]",
    role: "Intern",
    profile_picture: "www.example.com/janesmith.png",
    bio: "Final year computer science student.",
  },
  {
    user_id: 3,
    first_name: "Alice",
    last_name: "Wright",
    email: "alice.wright@example.com",
    password: "[hashed_password]",
    role: "Alumnus",
    profile_picture: "www.example.com/alicewright.jpg",
    bio: "Data Scientist with expertise in predictive modeling.",
  },
  {
    user_id: 4,
    first_name: "Lucas",
    last_name: "Martinez",
    email: "lucas.martinez@example.com",
    password: "[hashed_password]",
    role: "Admin",
    profile_picture: "www.example.com/lucasmartinez.jpg",
    bio: "Database Administrator with 8 years in the tech industry.",
  },
  {
    user_id: 5,
    first_name: "Olivia",
    last_name: "Taylor",
    email: "olivia.taylor@example.com",
    password: "[hashed_password]",
    role: "Intern",
    profile_picture: "www.example.com/oliviataylor.jpg",
    bio: "Computer Engineering student with a passion for IoT.",
  },
  {
    user_id: 6,
    first_name: "Ethan",
    last_name: "Nguyen",
    email: "ethan.nguyen@example.com",
    password: "[hashed_password]",
    role: "Intern",
    profile_picture: "www.example.com/ethannguyen.jpg",
    bio: "Final year student specializing in cybersecurity.",
  },
  {
    user_id: 7,
    first_name: "Ava",
    last_name: "Robinson",
    email: "ava.robinson@example.com",
    password: "[hashed_password]",
    role: "Alumnus",
    profile_picture: "www.example.com/avarobinson.jpg",
    bio: "UX/UI Designer with a flair for minimalist designs.",
  },
  {
    user_id: 8,
    first_name: "Logan",
    last_name: "Patel",
    email: "logan.patel@example.com",
    password: "[hashed_password]",
    role: "Admin",
    profile_picture: "www.example.com/loganpatel.jpg",
    bio: "Senior Developer with expertise in cloud infrastructure.",
  },
  {
    user_id: 9,
    first_name: "Isabella",
    last_name: "Gomez",
    email: "isabella.gomez@example.com",
    password: "[hashed_password]",
    role: "Alumnus",
    profile_picture: "www.example.com/isabellagomez.jpg",
    bio: "Digital Marketer with a focus on tech companies.",
  },
  {
    user_id: 10,
    first_name: "Liam",
    last_name: "O'Brien",
    email: "liam.obrien@example.com",
    password: "[hashed_password]",
    role: "Alumnus",
    profile_picture: "www.example.com/liamobrien.jpg",
    bio: "Project Manager with 6 years of experience in agile methodologies.",
  },
];


const stories = [
  {
    story_id: 1,
    company_id: 1,
    user_id: 1,
    title: "My journey with TechBreeze",
    content:
      "Working at TechBreeze was a transformative experience. Their cloud solutions are top-notch.",
    date_posted: "2023-10-12 14:30:00",
    likes: 50,
    status: "Published",
    tag: []
  },
  {
    story_id: 2,
    company_id: 2,
    user_id: 2,
    title: "Internship insights at SoftSprint",
    content:
      "I learned a lot during my summer internship at SoftSprint. The team is supportive and projects challenging.",
    date_posted: "2023-09-01 09:15:00",
    likes: 35,
    status: "Pending",
    tag: []
  },
  {
    story_id: 3,
    company_id: 3,
    user_id: 3,
    title: "Life of an intern at Nextech",
    content:
      "Fun and extremely instructive experience. not to mentain the high pay that comes with the hardwork. Definitely reccomend.",
    date_posted: "2023-07-26 11:15:00",
    likes: 234,
    status: "Published",
    tag: []
  },
];

const comments = [
  {
    comment_id: 1,
    story_id: 1,
    user_id: 2,
    content:
      "Great to hear about your experience, John! I'm considering them for my next job.",
    date_posted: "2023-10-12 16:45:00",
  },
  {
    comment_id: 2,
    story_id: 2,
    user_id: 1,
    content:
      "SoftSprint has a great reputation. Glad you had a good experience, Jane!",
    date_posted: "2023-09-01 12:10:00",
  },
];

const tags = [
  {
    tag_id: 1,
    tag_name: "Interview Process",
  },
  {
    tag_id: 2,
    tag_name: "Work Environment",
  },
  {
    tag_id: 3,
    tag_name: "Learning Opportunities",
  },
  {
    tag_id: 4,
    tag_name: "Team Dynamics",
  },
  {
    tag_id: 5,
    tag_name: "Challenges",
  },
  {
    tag_id: 6,
    tag_name: "Lucrative",
  },
  {
    tag_id: 7,
    tag_name: "Nexatech",
  },
];

const story_tags = [
  {
    story_id: 1,
    tag_id: 1,
  },
  {
    story_id: 1,
    tag_id: 5,
  },
  {
    story_id: 1,
    tag_id: 7,
  },
  {
    story_id: 2,
    tag_id: 3,
  },
  {
    story_id: 2,
    tag_id: 4,
  },
  {
    story_id: 2,
    tag_id: 5,
  },
  {
    story_id: 3,
    tag_id: 6,
  },
  {
    story_id: 3,
    tag_id: 7,
  },
];


export {comments, companies, users, tags, stories, story_tags}
