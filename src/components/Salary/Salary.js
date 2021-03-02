import React from 'react';

const Salary = (props) => {
    const salary = props.salary;
    console.log(salary);

    const totalSalary = salary.reduce((total, player) => total + player.salary, 0);

    // const total =salary.reduce((total, play) => total + play.salary, 0)

    // const totalSalary = salary.reduce((total, play)=>play.salary,0);


    // const total = salary.reduce((total,player)=> total + player.salary, 0)
//     let total =0;
//    for (let i = 0; i < salary.length; i++) {
//        const player = salary[i];
//        total = total + player.salary;
       
//    }
    return (
        <div>
            <h3>Salary Summary</h3>
            <h4>Selected Player Count: {salary.length}</h4>
            <p>Total Salary: {totalSalary}</p>
            {/* <h4>Total Salary: {total}</h4> */}
        </div>
    );
};

export default Salary;