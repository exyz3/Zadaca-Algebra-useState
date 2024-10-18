import React, { useState } from "react";

export default function UserChildren({ name, years, children }) {
  //po inputu promjeniti ime
  //dovrsiti
  const [names, setNames] = useState("");

  const handleChange = (event) => {
    setNames(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={names}
        placeholder="Enter name:"
        onChange={handleChange}
      ></input>
      <p>
        Pozdrav, moje ime je {name} i imam {years} godina.
      </p>
      <p>{children}</p>
    </div>
  );
}
