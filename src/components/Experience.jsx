// src/components/Experience.js
import React, { useState } from "react";
import "../styles/Experience.css";

const experiences = [
  {
    title: "Bafa",
    details:
      "2016: Stage Théorique--2016: Stage Pratique (ski) 14j--2017: Stage Approfondissement",
  },

  {
    title: "Ventes",
    details:
      "2016-2018: Garcia jeans (Troyes)--2016-2019: Adidas (Troyes)--2019: Reebok (Troyes)--2021: New Balance (Troyes)",
  },
  {
    title: "Logistique",
    details:
      "2022-2023: manutention - STTI (Troyes)--2021: mise en rayon E.leclerc",
  },
  {
    title: "Restauration",
    details:
      "2023: second de cuisine- MAME (St tropez)--2020: plongeur-Riotel (Quebec)",
  },
];

const Experience = () => {
  const [filter, setFilter] = useState("");

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredExperiences = experiences.filter((exp) =>
    exp.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="filter-exp">
      <input
        type="text"
        placeholder="Filtrer par titre"
        value={filter}
        onChange={handleFilterChange}
        className="filter"
      />
      <ul>
        {filteredExperiences.map((exp, index) => (
          <li key={index}>
            <h3>{exp.title}</h3>
            <p>{exp.details}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;
