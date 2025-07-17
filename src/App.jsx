import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import './App.css';
import Dashboard from './components/Dashboard';
import AddStudent from './components/AddStudent';
import StudentList from './components/StudentList';
import UpdateStudent from './components/UpdateStudent';
import AddFaculty from './components/AddFaculty';
import FacultyList from './components/FacultyList';
import UpdateFaculty from './components/UpdateFaculty';
import Signup from './components/Signup';
import Login from './components/Login';

const myRouter = createBrowserRouter([
  {
    path: 'signup',
    element: <Signup />,
  },
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: 'dashboard',
    element: <Dashboard />,
    children: [
      { path: '', element: <StudentList /> },
      { path: 'addStudent', element: <AddStudent /> },
      { path: 'studentList', element: <StudentList /> },
      { path: 'updateStudent', element: <UpdateStudent /> },
      { path: 'addFaculty', element: <AddFaculty /> },
      { path: 'facultyList', element: <FacultyList /> },
      { path: 'updateFaculty', element: <UpdateFaculty /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
}

export default App;
