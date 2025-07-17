import React, { useState } from "react";
import { getDatabase, ref, set } from "firebase/database";
import { app } from "../Firebase";
import { useNavigate } from "react-router-dom"; // ✅ Import navigate

const AddStudent = () => {
  const [name, setName] = useState("");
  const [admNo, setAdmNo] = useState(""); // ✅ Changed to empty string
  const [phone, setPhone] = useState(""); // ✅ Changed to empty string

  const navigate = useNavigate(); // ✅ Initialize navigate

  const submitHandler = (event) => {
    event.preventDefault();

    const db = getDatabase(app);
    set(ref(db, "student/" + admNo), {
      studentName: name,
      phoneNumber: phone,
    })
      .then(() => {
        console.log("Student added successfully ✅");
        // Clear form after submission
        setName("");
        setPhone("");
        setAdmNo("");
        // Navigate to student list
        navigate("/dashboard/studentList"); // ✅ Correct usage
      })
      .catch((err) => {
        console.error("Error adding student:", err);
      });
  };

  return (
    <div style={{ width: "300px" }}>
      <form
        onSubmit={submitHandler}
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <input
          value={admNo}
          onChange={(e) => setAdmNo(e.target.value)}
          type="text"
          placeholder="Adm No."
          required
          style={{
            padding: "0.5rem",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Student name"
          required
          style={{
            padding: "0.5rem",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          type="number"
          placeholder="Phone number"
          required
          style={{
            padding: "0.5rem",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "0.5rem",
            borderRadius: "4px",
            border: "none",
            backgroundColor: "#1e3a8a",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddStudent;
