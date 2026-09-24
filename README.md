React Practicals – Complete Practical Portfolio

A collection of 14 React practicals demonstrating progressive concepts from basic React components to a complete Capstone Student Management System with CRUD operations, Redux Toolkit, React Router, Fetch API, and MongoDB.

📚 Practical List
Practical	Project	Concepts / Technologies
01	React Introduction	React basics, JSX, Components
02	Components Demo	Functional Components, Props
03	Event Handling	Events, State, Event Handlers
04	Counter Application	useState, Hooks
05	Form Handling	Forms, Controlled Components
06	Dynamic List	Lists, map(), Keys
07	Conditional Rendering	Conditions, State-based UI
08	React Hooks	useState, useEffect
09	To-Do List Manager	Lists, Keys, State Management
10	Personal Portfolio Website	CSS, CSS Modules, CSS-in-JS
11	College Information Portal	React Router
12	Shopping Cart	Redux, Store, Actions, Reducers, Redux Toolkit
13	Weather Information App	Fetch API, Promises, Async/Await
14	Student Management System	Components, Props, Hooks, Forms, Lists, Router, Fetch API, Redux Toolkit, MongoDB
🎯 Practical 14 – Capstone

Practical 14 combines the concepts learned throughout the previous practicals into a complete application.

Student Management System

The application supports:

Add students
View students
Search students
Edit students
Delete students
Navigate between pages
Persistent database storage
Technologies
React
React Router
Redux Toolkit
Fetch API
Node.js
Express.js
MongoDB
Mongoose
Vite
Architecture
                  ┌─────────────────────┐
                  │     React Frontend   │
                  │                     │
                  │ Components          │
                  │ Props               │
                  │ Hooks               │
                  │ Forms               │
                  │ Lists               │
                  │ React Router        │
                  │ Redux Toolkit       │
                  └──────────┬──────────┘
                             │
                         Fetch API
                             │
                             ▼
                  ┌─────────────────────┐
                  │    Express REST API │
                  │                     │
                  │ POST   → Create     │
                  │ GET    → Read       │
                  │ PUT    → Update     │
                  │ DELETE → Delete     │
                  └──────────┬──────────┘
                             │
                             ▼
                  ┌─────────────────────┐
                  │       MongoDB       │
                  │                     │
                  │ Student Records     │
                  └─────────────────────┘
📁 Repository Structure
react-practicals/
│
├── Practical-01/
├── Practical-02/
├── Practical-03/
├── Practical-04/
├── Practical-05/
├── Practical-06/
├── Practical-07/
├── Practical-08/
├── Practical-09/
├── Practical-10/
├── Practical-11/
├── Practical-12/
├── Practical-13/
│
├── Practical-14/
│   ├── frontend/
│   │   ├── src/
│   │   │   ├── components/
│   │   │   ├── pages/
│   │   │   └── store/
│   │   ├── package.json
│   │   └── vite.config.js
│   │
│   └── backend/
│       ├── models/
│       ├── routes/
│       ├── server.js
│       └── package.json
│
├── .gitignore
└── README.md
🚀 Installation

Each practical may have its own dependencies.

Navigate to the required practical:

cd Practical-01

Install dependencies if it is a Node/Vite project:

npm install

Run:

npm run dev

For Practical 14, both frontend and backend must be started.

Backend
cd Practical-14/backend
npm install
npm run dev

Configure .env:

PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/practical14_students
Frontend

Open another terminal:

cd Practical-14/frontend
npm install
npm run dev

Configure:

VITE_API_URL=http://localhost:5000/api
🗄️ Database

Practical 14 uses MongoDB for persistent student data.

Student records contain:

Name
Email
Course
Semester
Created At
Updated At

CRUD operations are implemented through the Express API:

HTTP	Endpoint	Operation
GET	/api/students	Get all students
GET	/api/students/:id	Get one student
POST	/api/students	Add student
PUT	/api/students/:id	Edit student
DELETE	/api/students/:id	Delete student
🔎 Search

The Student Management System provides client-side searching by:

Student name
Email
Course

Example:

Search: "CSE"

        ↓

Student records containing
"CSE" are displayed
🧭 Navigation

Practical 14 uses React Router with pages such as:

/
├── Home
├── Students
├── Add Student
├── Edit Student
└── About
🔄 Redux Toolkit

Redux Toolkit is used for centralized student state.

Redux Store
     │
     └── students
          ├── items
          ├── loading
          └── error

The application uses Redux actions/reducers for:

fetchStart()
fetchSuccess()
fetchFailure()
addStudent()
updateStudent()
removeStudent()
🔐 Environment Variables

Do not commit database credentials.

The repository uses:

.env.example

instead of committing .env.

Example:

MONGODB_URI=mongodb://127.0.0.1:27017/practical14_students
🚫 Git Ignore

The repository excludes:

node_modules/
dist/
build/
.vite/
.env
*.log

This keeps the repository lightweight and prevents credentials or generated dependencies from being uploaded.

🎓 Learning Outcomes

After completing these practicals, the learner demonstrates understanding of:

React fundamentals
JSX
Functional components
Props
State
Event handling
React Hooks
Forms
Lists and keys
Conditional rendering
CSS styling
React Router
REST APIs
Fetch API
Asynchronous JavaScript
Redux
Redux Toolkit
Global state management
Backend API development
MongoDB database connectivity
CRUD operations
Full-stack React application development
🏆 Capstone Outcome

Practical 14 serves as the final Capstone Practical, integrating the major React concepts covered in Practicals 1–13 into a functional full-stack Student Management System.

Basic React
     ↓
Components
     ↓
Props & State
     ↓
Hooks
     ↓
Forms & Lists
     ↓
Routing
     ↓
API Integration
     ↓
Redux Toolkit
     ↓
Database Connectivity
     ↓
Full CRUD
     ↓
CAPSTONE
👨‍💻 Repository

React Practicals – Practical Portfolio

This repository contains the complete implementation of the React practical exercises and the final Capstone project.
