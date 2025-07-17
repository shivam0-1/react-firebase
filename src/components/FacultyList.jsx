import React, { useEffect, useState } from "react";
import { app } from "../Firebase";
import {
  collection,
  deleteDoc,
  getDocs,
  getFirestore,
  doc
} from "firebase/firestore";

import { useNavigate } from "react-router-dom";

const FacultyList = () => {
  const [facultyData, setFacultyData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const db = getFirestore(app);
      const collectionRef = collection(db, "faculty");
      const docSnap = await getDocs(collectionRef);
      const data = docSnap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(data);
      setFacultyData(data);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch faculty data.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;

  const deleteData = async (id) => {
    const db = getFirestore(app);

    const dataRef = doc(db, "faculty", id);
    try {
      deleteDoc(dataRef);
      getData();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Faculty List</h1>
      {facultyData.length === 0 ? (
        <p>No faculty found.</p>
      ) : (
        facultyData.map((faculty) => (
          <div key={faculty.id}>
            <p>
              {faculty.FacultyName} {faculty.phoneNumber}
            </p>
            <button onClick={() => {deleteData(faculty.id)}}>Delete</button>
            <button onClick={() => {navigate('/dashboard/updateFaculty', {state:faculty})}}>Update</button>
          </div>
        ))
      )}
    </div>
  );
};

export default FacultyList;
