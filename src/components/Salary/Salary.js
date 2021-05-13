import { Button } from 'bootstrap';
import React from 'react';

const Salary = (props) => {
  const salary = props.salary;


let total = 0;
  for (let i = 0; i < salary.length; i++) {
    const player = salary[i];
    total = total + player.salary;
    
  }

  const formatNumber = num =>{
    const precision = num.toFixed(2);
    return Number(precision);
  }

  return (
    <div>
      <h4>Annual Salary Summary</h4>
      <h5>Name: </h5>
      <p>Hired Players:{salary.length} </p>
      <p>Total Salary: ‍{formatNumber(total)}</p>
    </div>
  );
};

export default Salary;