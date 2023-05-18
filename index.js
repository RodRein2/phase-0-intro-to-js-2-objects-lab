// Write your solution in this file
let employee = {
    name: "Ana",
    streetAddress: "123 Lane Ave"
};

let udpatedEmployee = updateEmployeeWithKeyAndValue(employee, "streetAddress", "432 Oil St");

function updateEmployeeWithKeyAndValue (employee, key, value) {
    return {
        ...employee,
        [key]: value
    };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key) {
    const updatedEmployee = {...employee};
    delete updatedEmployee[key];
    return updatedEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}