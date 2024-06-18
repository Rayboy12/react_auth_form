// src/Form.js
import React, { useState } from "react";
import { ref, set } from "firebase/database";
import { database } from "./firebaseConfig";
import { v4 as uuidv4 } from 'uuid'; // Untuk menghasilkan ID unik

function Form() {
  const [data, setData] = useState({
    name: "",
    age: "",
    address: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Generate a unique ID for each data entry
    const uniqueId = uuidv4();

    // Create a reference to the location in the database where the data will be stored
    const dataRef = ref(database, `users/${uniqueId}`);

    // Save data to the database
    set(dataRef, data)
      .then(() => {
        console.log("Data saved successfully!");
        alert("Data saved successfully!");
        // Reset form after submission
        setData({
          name: "",
          age: "",
          address: ""
        });
      })
      .catch((error) => {
        console.error("Error saving data:", error);
        alert("Error saving data.");
      });
  };

  return (
    <div>
      <h2>Fill the Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={data.name}
          onChange={handleChange}
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={data.age}
          onChange={handleChange}
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={data.address}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
