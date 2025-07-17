import React, { useState } from "react";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { app } from "../Firebase";
import { useNavigate } from "react-router-dom"; // ✅ Import navigate

const AddFaculty = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate(); // ✅ Initialize navigate

  const submitHandler = async (e) => {
    e.preventDefault(); // prevent page reload

    console.log("Name:", name);
    console.log("Phone:", phone);

    const db = getFirestore(app);

    const docRef = await addDoc(collection(db, 'faculty'), {
      FacultyName: name,
      phoneNumber: phone
    });

    setName("");
    setPhone("");

    console.log(docRef, docRef.id);

    navigate("/dashboard/FacultyList"); // ✅ Now this will work
  };

  return (
    <div>
      <h1>Add Faculty</h1>
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddFaculty;
