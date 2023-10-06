// Write your solution in this file!


let employee = {
    name: "Harris Anyangu",
    streetAdress: "Zambia Road",
}
   
function updateEmployeeWithKeyAndValue(employee, key, value) {
    let copyEmployee = {...employee, [key] : value, }
    return copyEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key, value) {
    let copyEmployee = {...employee, [key]:value }
    delete copyEmployee[key];
    return copyEmployee;    
}


function destructivelyDeleteFromEmployeeByKey(employee, key, value) {
    delete employee[key];
    console.log(employee);
    return employee;

}

