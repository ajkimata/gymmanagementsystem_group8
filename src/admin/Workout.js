import React, { useState } from "react";

const Workout = () => {
  const [workout, setWorkout] = useState({
    name: "",
    description: "",
    instructions: "",
    workout_time: "",
    experience_needed: "",
    equipment_needed: "",
  });

  const [errors, setErrors] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWorkout({
      ...workout,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]); // Clear previous errors

    try {
      //   const csrfToken = document.querySelector("[name=csrf-token]").content;
      const response = await fetch("http://localhost:4000/workouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          //   "X-CSRF-Token": csrfToken,
        },
        body: JSON.stringify({ workout: workout }),
        // credentials: "include",
      });

      if (!response.ok) {
        if (response.status === 422) {
          const data = await response.json();
          if (data.errors) {
            setErrors(data.errors);
          }
        }
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Workout created:", data);
      // Redirect or update UI accordingly
    } catch (error) {
      console.error("Failed to create workout:", error);
    }
  };

  return (
    <div id="workoutFormContainer">
      <h3 id="heading">Add New Workout</h3>
      <h5 id="coralText">
        * Please make sure to fill out all fields before adding a new workout!
      </h5>
      {errors.length > 0 && (
        <div className="error-messages">
          {errors.map((error, index) => (
            <p key={index} className="error">
              {error}
            </p>
          ))}
        </div>
      )}
      <div className="container">
        <section>
          <form onSubmit={handleSubmit}>
            <label>Name </label>
            <input
              type="text"
              name="name"
              value={workout.name}
              onChange={handleChange}
            />
            <br />
            <label> Description </label>
            <input
              type="text"
              name="description"
              value={workout.description}
              onChange={handleChange}
            />
            <br />
            <label>Instructions </label> <br />
            <textarea
              id="instructions"
              name="instructions"
              value={workout.instructions}
              onChange={handleChange}
            />
            <br />
            <label>Workout Time (minutes)</label>
            <input
              type="text"
              name="workout_time"
              value={workout.workout_time}
              onChange={handleChange}
            />
            <br />
            <label>Experience Needed </label>
            <input
              type="text"
              name="experience_needed"
              value={workout.experience_needed}
              onChange={handleChange}
            />
            <br />
            <label>Equipment Needed </label>
            <input
              type="text"
              name="equipment_needed"
              value={workout.equipment_needed}
              onChange={handleChange}
            />
            <br />
            <input id="addButton" type="submit" value="Add Workout" />
          </form>
        </section>
      </div>
    </div>
  );
};

export default Workout;
