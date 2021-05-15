import React from 'react';
import './salary.css'
const Salary = (props) => {
  const salary = props.salary;


let total = 0;
  for (let i = 0; i < salary.length; i++) {
    const player = salary[i];
    total = total + player.salary;
  }

let name = [];
  for (let i = 0; i < salary.length; i++) {
    const player = salary[i];
    name = name + player.name + ","; 
  }


  const formatNumber = num =>{
    const precision = num.toFixed(2);
    return Number(precision);
  }

  return (
    <div className="salary">
      <h4>Annual Salary Summary</h4> <hr />
       <p>Name: {name}</p>
      <p>Hired Players:{salary.length} </p><hr />
      <p>Total Salary: ‍{formatNumber(total)}</p>
    </div>
  );
};

export default Salary;