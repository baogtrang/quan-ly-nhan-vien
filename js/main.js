// array that contains employess
var employeeList = [];

// RETRIEVE the data after the browser reloads from localStorage
var jsonData = localStorage.getItem("EMPLOYEELIST");
if(jsonData != null) {
    // convert JSON string to object array and store it in a variable
    var parsedEmployeeArray = JSON.parse(jsonData);
    employeeList = parsedEmployeeArray.map(function(item){
        return new Employee (item.id,item.name,item.email,item.password,item.workDate,item.basicSalary,item.role,item.workHours,item.totalSalary,item.category);
    })
    renderList(employeeList);
}

// SAVE the data into localStorage
function addEmployee(){
    // create object employee from user input
    var employee = getFormData();
    // add the object to the array
    employeeList.push(employee);
    // save the array into localStorage
    var jsonData = JSON.stringify(employeeList);
    localStorage.setItem("EMPLOYEELIST", jsonData);
    console.log("🚀 ~ file: main.js:14 ~ addEmployee ~ employeeList:", employeeList)
    renderList(employeeList);
}

function deleteEmployee(id){
    var index = findIndex(id, employeeList);
    employeeList.splice(index, 1);
    var jsonData = JSON.stringify(employeeList);
    localStorage.setItem('EMPLOYEELIST', jsonData );
    renderList(employeeList);
}

function editEmployee(id) {
    var index = findIndex(id, employeeList);
    console.log("file: main.js:38 ~ editEmployee ~ index:", index)
    $('#myModal').modal('show');
    showFormData(id);
    console.log("file: main.js:41 ~ editEmployee ~ id:", id)

    // Bind the "Update" button to call the updateEmployee function
    $('#updateEmployee').on('click', function () {
        console.log("file: main.js:41 ~ editEmployee ~ id:", id)

        updateEmployee(id);
    });
}

function updateEmployee(id) {
    console.log("file: main.js:52 ~ updateEmployee ~ id:", id)
    var index = findIndex(id, employeeList);
    
    showFormData(id); // Populate the form fields with the updated data
    
    var updatedEmployee = getFormData();
    
    // Update total salary and category in the updated employee object
    updatedEmployee.totalSalary = calculateTotalSalary(updatedEmployee.basicSalary, updatedEmployee.workHours);
    updatedEmployee.category = getCategory(updatedEmployee.totalSalary);
    
    employeeList[index] = updatedEmployee;
    
    var jsonData = JSON.stringify(employeeList);
    localStorage.setItem('EMPLOYEELIST', jsonData);
    
    renderList(employeeList);
    
    $('#myModal').modal('hide');
    $('#updateButton').off('click');
}