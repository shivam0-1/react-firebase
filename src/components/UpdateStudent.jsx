import React, { useState } from "react";
import { getDatabase, ref, set } from "firebase/database";
import { app } from "../Firebase";
import { useNavigate, useLocation } from "react-router-dom";

const UpdateStudent = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [name, setName] = useState(location.state[1].studentName);
  const [admNo, setAdmNo] = useState(location.state[0]);
  const [phone, setPhone] = useState(location.state[1].phoneNumber);

  console.log(location);

  const submitHandler = (event) => {
    event.preventDefault();

    const db = getDatabase(app);
    set(ref(db, "student/" + admNo), {
      studentName: name,
      phoneNumber: phone,
    })
      .then(() => {
        console.log("Student updated successfully ✅");
        setName("");
        setPhone("");
        setAdmNo("");
        navigate("/dashboard/studentList");
      })
      .catch((err) => {
        console.error("Error updating student:", err);
      });
  };

  return (
    <div style={{ width: "300px" }}>
      <form
        onSubmit={submitHandler}
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <input
          disabled
          value={admNo}
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
          type="tel"
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
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateStudent;
