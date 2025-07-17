import React, { useState, useEffect } from "react";
import { doc, updateDoc, getFirestore } from "firebase/firestore";
import { app } from "../Firebase";
import { useLocation, useNavigate } from "react-router-dom";

const UpdateFaculty = () => {
  const location = useLocation();
  const navigate = useNavigate();

  
  const [name, setName] = useState(location.state.FacultyName);
  const [phone, setPhone] = useState(location.state.phoneNumber);

 
  const submitHandler = async (e) => {
    e.preventDefault();
    const db = getFirestore(app);
    const docRef= doc(db, 'faculty', location.state.id);
    try {
      await updateDoc(docRef, {FacultyName:name, phoneNumber:phone})
      navigate('/dashboard/facultyList');
    }
    catch(e){
      console.log(e);
    }


    
  };

  return (
    <div>
      <h1>Update Faculty</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateFaculty;
