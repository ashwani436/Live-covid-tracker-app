import React, { useState, useEffect } from "react";

const Vehiclesearch = () => {
  const [hasError, setErrors] = useState(false);
  const [vehicle, setvehicle] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://findfalcone.herokuapp.com/vehicles");
      res
        .json()
        .then(res => setvehicle(res))
        .catch(err => setErrors(err));
    }

    fetchData();
  });
  return (
    <div>
      <select>
                {vehicle.map((option, key)=><option key={key}>{option}</option>)}
            </select>
      <hr />
      <span>Has error: {JSON.stringify(hasError)}</span>
    </div>
  );
};
export default Vehiclesearch;