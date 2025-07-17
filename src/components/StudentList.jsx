import React, { useEffect, useState } from 'react';
import { getDatabase, onValue, ref, off , remove} from 'firebase/database';
import { app } from '../Firebase';

import { useNavigate } from "react-router-dom"; // ✅ Import navigate

const StudentList = () => {
    const [studentData, setStudentData] = useState(null);

    const navigate = useNavigate()

    useEffect(() => {
        const db = getDatabase(app);
        const studentRef = ref(db, 'student');

        onValue(studentRef, (snapshot) => {
            const data = snapshot.val();
            console.log(data);
            setStudentData(data);
        });

        return () => off(studentRef); // ✅ cleanup added
    }, []);

    const deleteData = (key) => {
        const db= getDatabase(app);
        const studentRef= ref(db, 'student/'+key);
        remove(studentRef);

    }
    return (
        <div>
            <h1>Student List</h1>

            {studentData ? (
                <div>
                    {Object.entries(studentData).map(([key, value]) => (
                        <div key={key}>
                            <p>{value.studentName} {value.phoneNumber}</p>
                            <button onClick={() =>{deleteData(key)}}>delete</button>
                            <button onClick={() => {navigate('/dashboard/updateStudent', {state:[key, value]})}}>Update</button>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No students found.</p> 
            )}
        </div>
    );
};

export default StudentList;
