import React from 'react';

const Skills = () => {
  const skillSet = ['HTML5',, 'JavaScript (ES6+)', 'React.js', 'Tailwind CSS', 'Git & GitHub'];

  return (
    <section className="section skills-section">
      <h2>Keahlian</h2>
      <ul className="skills-list">
        {skillSet.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;