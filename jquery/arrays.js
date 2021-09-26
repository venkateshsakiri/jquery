let employees=[
    {
        id:1,
        Name:'venkatesh',
        age:25,
        company:'TCS',
        salary:50000,
        isActive:'True'
    },
    {
        id:2,
        Name:'srihari',
        age:30,
        company:'wipro',
        salary:25000,
        isActive:'false'
    },
    {
        id:3,
        Name:'bottam',
        age:35,
        company:'cognigent',
        salary:10000,
        isActive:'True'
    },
    {
        id:4,
        Name:'suresh',
        age:42,
        company:'DXC',
        salary:25000,
        isActive:'false'
    },
    {
        id:5,
        Name:'ramesh',
        age:56,
        company:'infosys',
        salary:26500,
        isActive:'True'
    },
];
/* console.log(employees);
console.log(employees[4].Name);
let result='';
for(let employee of employees){
    result+=`${employee.Name} `;
}
console.log(result);


let juniorEmployee = [];
for(let employee of employees){
    if(employee.age<=40){
        juniorEmployee.push(employee);
    }
}
console.log(juniorEmployee);*/


/*   let activeEmployee= [];
for(let employee of employees){
    if(employee.isActive){
        activeEmployee.push(employee);
    }
}
console.log(activeEmployee);*/


/*let colors=['white','black','silver','purpule','blue','yellow'];
    result='';
for(let i=0; i<=colors.length-1;i++){
   result+=`${colors[i]} `;
}
console.log(result);


result='';
for(let index in colors){
   result+=`${colors[index]} `;
}
console.log(result);

result='';
for(let color of colors ){
   result+=`${color} `;
}
console.log(result);


result='';
colors.forEach(function(paint){
    result+=`${paint} `
});
console.log(result);


result='';
colors.forEach(color=>result+=`${color} `);
console.log(result);
                        */

      var k = '<tbody>'  
     for(i=0;i<employees.length;i++){
         k+='<tr>';
         k+='<td>'+employees[i].id+'<td>';
         k+='<td>'+employees[i].Name+'<td>';
         k+='<td>'+employees[i].age+'<td>';
         k+='<td>'+employees[i].company+'<td>';
         k+='<td>'+employees[i].salary+'<td>';
         k+='<td>'+employees[i].isActive+'<td>';
     }  
     k+='</tbody>';
     document.getElementById('dataTable').innerHTML=k;     