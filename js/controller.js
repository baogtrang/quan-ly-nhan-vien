// show the WHOLE list
function renderList (employeeList){
    var contentHTML = "";
    for (var i=0; i<employeeList.length; i++){
        var employee = employeeList[i];
        var contentTr = `<tr>
            <td>${employee.id}</td>
            <td>${employee.name}</td>
            <td>${employee.email}</td>
            <td>${employee.workDate}</td>
            <td>${employee.role}</td>
            <td>${employee.totalSalary}</td>
            <td>${employee.category}</td>
            <td>
                <button onclick="editEmployee('${employee.id}')">Edit</button>
                <button onclick="deleteEmployee('${employee.id}')">Delete</button>
            </td>
        </tr>`;
        contentHTML += contentTr;
    }
    document.getElementById("tableDanhSach").innerHTML = contentHTML;
}
function findIndex (id, employeeList) {
    var index = employeeList.findIndex(function(employee){
        return employee.id == id;
    })
    return index;
}

// get user data then create an employee object
function getFormData (){
    var _id =document.getElementById("tknv").value;
    var _name=document.getElementById("name").value;
    var _email=document.getElementById("email").value;
    var _password=document.getElementById("password").value;
    var _workDate=document.getElementById("datepicker").value;
    var _basicSalary=document.getElementById("luongCB").value;
    var _role=document.getElementById("chucvu").value;
    var _workHours=document.getElementById("gioLam").value;
    var employee = new Employee (_id, _name, _email, _password, _workDate, _basicSalary, _role, _workHours);
    return employee;
}

// click Edit button, 
function showFormData (id){
    var _id =document.getElementById("tknv").value;
    var _name=document.getElementById("name").value;
    var _email=document.getElementById("email").value;
    var _password=document.getElementById("password").value;
    var _workDate=document.getElementById("datepicker").value;
    var _basicSalary=document.getElementById("luongCB").value;
    var _role=document.getElementById("chucvu").value;
    var _workHours=document.getElementById("gioLam").value;
}

