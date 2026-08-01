// localStorage.clear()
const employees = [
 {
  id: 1,
  firstName: "Rahul",
  email: "employee1@example.com",
  password: "123",

  taskCount: {
    active: 2,
    newTask: 1,
    completed: 1,
    failed: 0
  },

  tasks: [
    {
      active: true,
      newTask: true,
      completed: false,
      failed: false,
      taskTitle: "Design Login Page",
      taskDescription: "Create a responsive login page using React.",
      taskDate: "2026-07-30",
      category: "Frontend"
    },
    {
      active: true,
      newTask: false,
      completed: false,
      failed: false,
      taskTitle: "Fix Navbar",
      taskDescription: "Resolve mobile responsiveness issues.",
      taskDate: "2026-07-31",
      category: "Frontend"
    },
    {
      active: false,
      newTask: false,
      completed: true,
      failed: false,
      taskTitle: "Update README",
      taskDescription: "Improve project documentation.",
      taskDate: "2026-07-28",
      category: "Documentation"
    }
  ]
},
{
  id: 2,
  firstName: "Aman",
  email: "employee2@example.com",
  password: "123",

  taskCount: {
    active: 1,
    newTask: 1,
    completed: 1,
    failed: 1
  },

  tasks: [
    {
      active: true,
      newTask: true,
      completed: false,
      failed: false,
      taskTitle: "Develop REST API",
      taskDescription: "Create authentication endpoints.",
      taskDate: "2026-07-30",
      category: "Backend"
    },
    {
      active: false,
      newTask: false,
      completed: true,
      failed: false,
      taskTitle: "Database Schema",
      taskDescription: "Design user and task tables.",
      taskDate: "2026-07-27",
      category: "Database"
    },
    {
      active: false,
      newTask: false,
      completed: false,
      failed: true,
      taskTitle: "Payment Integration",
      taskDescription: "Integrate payment gateway.",
      taskDate: "2026-07-26",
      category: "Backend"
    }
  ]
},
{
  id: 3,
  firstName: "Priya",
  email: "employee3@example.com",
  password: "123",

  taskCount: {
    active: 2,
    newTask: 1,
    completed: 1,
    failed: 0
  },

  tasks: [
    {
      active: true,
      newTask: true,
      completed: false,
      failed: false,
      taskTitle: "Write Unit Tests",
      taskDescription: "Increase test coverage.",
      taskDate: "2026-07-30",
      category: "Testing"
    },
    {
      active: true,
      newTask: false,
      completed: false,
      failed: false,
      taskTitle: "Bug Fixes",
      taskDescription: "Resolve reported UI bugs.",
      taskDate: "2026-08-01",
      category: "Testing"
    },
    {
      active: false,
      newTask: false,
      completed: true,
      failed: false,
      taskTitle: "Code Review",
      taskDescription: "Review pull requests.",
      taskDate: "2026-07-29",
      category: "Development"
    }
  ]
},
{
  id: 4,
  firstName: "Vikram",
  email: "employee4@example.com",
  password: "123",

  taskCount: {
    active: 1,
    newTask: 1,
    completed: 1,
    failed: 1
  },

  tasks: [
    {
      active: true,
      newTask: true,
      completed: false,
      failed: false,
      taskTitle: "Create Dashboard",
      taskDescription: "Build employee dashboard UI.",
      taskDate: "2026-07-30",
      category: "Frontend"
    },
    {
      active: false,
      newTask: false,
      completed: true,
      failed: false,
      taskTitle: "Optimize Images",
      taskDescription: "Compress project assets.",
      taskDate: "2026-07-28",
      category: "Performance"
    },
    {
      active: false,
      newTask: false,
      completed: false,
      failed: true,
      taskTitle: "Deploy Website",
      taskDescription: "Deploy application to production.",
      taskDate: "2026-07-27",
      category: "Deployment"
    }
  ]
},
{
  id: 5,
  firstName: "Neha",
  email: "adi@gmail.com",
  password: "123",

  taskCount: {
    active: 2,
    newTask: 1,
    completed: 1,
    failed: 0
  },

  tasks: [
    {
      active: true,
      newTask: true,
      completed: false,
      failed: false,
      taskTitle: "Research AI APIs",
      taskDescription: "Compare OpenAI and Gemini APIs.",
      taskDate: "2026-07-31",
      category: "Research"
    },
    {
      active: true,
      newTask: false,
      completed: false,
      failed: false,
      taskTitle: "Prepare Presentation",
      taskDescription: "Create project demo slides.",
      taskDate: "2026-08-02",
      category: "Presentation"
    },
    {
      active: false,
      newTask: false,
      completed: true,
      failed: false,
      taskTitle: "Update Portfolio",
      taskDescription: "Add latest projects.",
      taskDate: "2026-07-29",
      category: "Documentation"
    }
  ]
}
];

const admin = {
  id: 1,
  firstName: "Aditya",
  email: "admin@gmail.com",
  password: "123"
};


  
export const setLocalStorage = () => {
  if (!localStorage.getItem("employees")) {
    localStorage.setItem("employees", JSON.stringify(employees));
  }

  if (!localStorage.getItem("admin")) {
    localStorage.setItem("admin", JSON.stringify(admin));
  }
};
export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employees, admin };
};

