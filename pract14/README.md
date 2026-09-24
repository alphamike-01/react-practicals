# Practical 14 – Student Management System (Capstone Practical)

This implementation follows the Practical 14 requirements:

> **Student Management System – Add, edit, delete, search students and navigate between pages. (Capstone Practical)**

### Concepts demonstrated

- React Components
- Props
- Hooks (`useState`, `useEffect`)
- Forms and controlled inputs
- Lists and `map()`
- React Router
- Fetch API
- Redux Toolkit
- Redux Store / Slice / Actions / Reducers
- Real MongoDB database connectivity
- Express REST API
- Full Create, Read, Update and Delete operations
- Student search
- Multi-page navigation

## Architecture

```text
React UI
   │
   ├── React Router
   ├── Components + Props + Hooks
   └── Redux Toolkit Store
          │
          │ Fetch API
          ▼
     Express REST API
          │
          ▼
       MongoDB
```

## Pages

- `/` – Home
- `/students` – View and search students
- `/students/add` – Add student
- `/students/edit/:id` – Edit student
- `/about` – Capstone information

## CRUD API

| Method | Endpoint | Operation |
|---|---|---|
| GET | `/api/students` | Read all students |
| GET | `/api/students/:id` | Read one student |
| POST | `/api/students` | Create student |
| PUT | `/api/students/:id` | Update student |
| DELETE | `/api/students/:id` | Delete student |

## Setup

### Backend

```bash
cd backend
npm install
```

Create `.env` from `.env.example`:

```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/practical14_students
```

Start:

```bash
npm run dev
```

### Frontend

Open another terminal:

```bash
cd frontend
npm install
```

Create `.env` from `.env.example` if needed:

```env
VITE_API_URL=http://localhost:5000/api
```

Start:

```bash
npm run dev
```

Open the Vite URL, normally:

```text
http://localhost:5173
```

## Demonstrating the Practical

### Create
Go to **Add Student**, fill the form and submit. The record is inserted into MongoDB.

### Read
Go to **Students**. Records are fetched from the Express API using the browser Fetch API and stored in Redux.

### Search
Use the search field on the Students page. Search works by student name, email or course.

### Update
Click **Edit** on a student, change the values and submit. The MongoDB record is updated.

### Delete
Click **Delete** and confirm. The record is deleted from MongoDB and the Redux list is refreshed.

### Navigation
The navbar demonstrates React Router navigation between Home, Students, Add Student and About.

## Git

Do not commit:

```text
node_modules/
.env
dist/
```

The included `.gitignore` handles these files.
