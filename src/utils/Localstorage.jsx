const employe = [ 
  {
    id: 1,
    firstName: "Ali",
    email: "employee1@example.com",
    password: "123",
    taskCount: {
      active: 5,
      newtask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Fix login bug",
        description: "Resolve login issue in app",
        date: "2026-04-01",
        category: "Development",
        active: true,
        newtask: true,
        completed: false,
        failed: false
      },
      {
        title: "Update UI",
        description: "Improve dashboard design",
        date: "2026-04-02",
        category: "Design",
        active: true,
        newtask: false,
        completed: false,
        failed: false
      },
      {
        title: "API integration",
        description: "Connect frontend with backend",
        date: "2026-04-03",
        category: "Development",
        active: false,
        newtask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 2,
    firstName: "Ahmed",
    email: "employee2@example.com",
    password: "123",
    taskCount: {
      active: 5,
      newtask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Write documentation",
        description: "Prepare project docs",
        date: "2026-04-01",
        category: "Documentation",
        active: true,
        newtask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix CSS issues",
        description: "Resolve responsive bugs",
        date: "2026-04-02",
        category: "Design",
        active: false,
        newtask: false,
        completed: true,
        failed: false
      },
      {
        title: "Test APIs",
        description: "Check API responses",
        date: "2026-04-03",
        category: "Testing",
        active: false,
        newtask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 3,
    firstName: "Usman",
    email: "employee3@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newtask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Create components",
        description: "Build reusable components",
        date: "2026-04-01",
        category: "Development",
        active: true,
        newtask: true,
        completed: false,
        failed: false
      },
      {
        title: "Optimize images",
        description: "Reduce image size",
        date: "2026-04-02",
        category: "Performance",
        active: true,
        newtask: false,
        completed: false,
        failed: false
      },
      {
        title: "Deploy app",
        description: "Deploy on server",
        date: "2026-04-03",
        category: "DevOps",
        active: false,
        newtask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 4,
    firstName: "Hassan",
    email: "employee4@example.com",
    password: "123",
    taskCount: {
      active: 5,
      newtask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Database setup",
        description: "Setup MongoDB",
        date: "2026-04-01",
        category: "Database",
        active: true,
        newtask: true,
        completed: false,
        failed: false
      },
      {
        title: "Backup data",
        description: "Take DB backup",
        date: "2026-04-02",
        category: "Database",
        active: false,
        newtask: false,
        completed: true,
        failed: false
      },
      {
        title: "Fix server crash",
        description: "Resolve crash issue",
        date: "2026-04-03",
        category: "Backend",
        active: false,
        newtask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 5,
    firstName: "Bilal",
    email: "employee5@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newtask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Client meeting",
        description: "Discuss requirements",
        date: "2026-04-01",
        category: "Management",
        active: true,
        newtask: true,
        completed: false,
        failed: false
      },
      {
        title: "Prepare report",
        description: "Monthly report",
        date: "2026-04-02",
        category: "Management",
        active: true,
        newtask: false,
        completed: false,
        failed: false
      },
      {
        title: "Review code",
        description: "Check team code",
        date: "2026-04-03",
        category: "Review",
        active: false,
        newtask: false,
        completed: true,
        failed: false
      }
    ]
  }
];

const admin = [{
  id: 1,
  firstName: "Admin",
  email: "admin@example.com",
  password: "123"
}];
export const setLocalStorage =()=>{
  localStorage.setItem("employess",JSON.stringify(employe));

  localStorage.setItem("admin",JSON.stringify(admin));
  

}

setLocalStorage()
export const getLocalStorage =()=>{
  const employees = JSON.parse(localStorage.getItem('employess')) || []
  const admin = JSON.parse(localStorage.getItem('admin')) || null
  return { employees, admin }
}