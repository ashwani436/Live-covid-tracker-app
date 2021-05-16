import React, { useState, useEffect } from "react";
//import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

const Planets = () => {
  const [hasError, setErrors] = useState(false);
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://findfalcone.herokuapp.com/planets");
      res
        .json()
        .then(res => setPlanets(res))
        .catch(err => setErrors(err));
    }

    fetchData();
  });

  return (
    <div>(
       <select>
                {planets.map((option, key)=><option key={key}>{option}</option>)}
            </select>
      <hr />
      <span>Has error: {JSON.stringify(hasError)}</span>
    </div>
  );
};
export default Planets;