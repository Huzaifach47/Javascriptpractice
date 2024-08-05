let employee = {
  firstName: "Ahmed",
  lastName: "Khan",
  age: "28",
  department: "Cs",
  batchNo: "3456",

  emplyeeBasicInfo: function () {
    let myName = `${this.firstName} ${this.lastName}`;
    let depNdbatch = `His batch number is ${this.batchNo} and department is ${this.department}`;
    let both = `Employee name is ${myName}\n${depNdbatch}.`;
    return both;
  },
};

console.log(employee.emplyeeBasicInfo());
