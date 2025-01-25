
   const  employees = [
      {
        "id": 1,
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
          {
            "title": "Task 1",
            "description": "Complete the sales report",
            "date": "2025-01-30",
            "category": "Reports",
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "title": "Task 2",
            "description": "Prepare a presentation for Q1",
            "date": "2025-02-05",
            "category": "Meetings",
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false
          },
          {
            "title": "Task 3",
            "description": "Follow up with client",
            "date": "2025-01-28",
            "category": "Client Management",
            "active": false,
            "newTask": false,
            "completed": false,
            "failed": true
          }
        ]
      },
      {
        "id": 2,
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
          {
            "title": "Task 1",
            "description": "Fix bugs in the inventory system",
            "date": "2025-01-25",
            "category": "Development",
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "title": "Task 2",
            "description": "Test the new API endpoints",
            "date": "2025-01-27",
            "category": "Testing",
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false
          }
        ]
      },
      {
        "id": 3,
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
          {
            "title": "Task 1",
            "description": "Organize team meeting",
            "date": "2025-01-29",
            "category": "Team Management",
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "title": "Task 2",
            "description": "Draft a project proposal",
            "date": "2025-02-01",
            "category": "Documentation",
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false
          },
          {
            "title": "Task 3",
            "description": "Create a training schedule",
            "date": "2025-01-28",
            "category": "Training",
            "active": false,
            "newTask": false,
            "completed": false,
            "failed": true
          }
        ]
      },
      {
        "id": 4,
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
          {
            "title": "Task 1",
            "description": "Plan a marketing campaign",
            "date": "2025-02-10",
            "category": "Marketing",
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false
          }
        ]
      },
      {
        "id": 5,
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
          {
            "title": "Task 1",
            "description": "Conduct a customer survey",
            "date": "2025-01-31",
            "category": "Customer Engagement",
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "title": "Task 2",
            "description": "Analyze survey results",
            "date": "2025-02-05",
            "category": "Analysis",
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false
          }
        ]
      }
    ]
 const admin = [{
      "id": 1,
      "email": "admin@example.com",
      "password": "123"
    }]
 export const setLocalStorage = ()=>{
           localStorage.setItem('employees',JSON.stringify(employees))
           localStorage.setItem('admin',JSON.stringify(admin))
 } 
 export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    return {employees,admin}
   
 } 