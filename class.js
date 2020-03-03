class Student{
    constructor(sId, sName,){
        this.id = sId;
        this.name = sName;
        this.school = "Ideal School";
    }
}

const student1 = new Student (11, "Jonaki");
const student2 = new Student (22, "Nidhi");
const student3 = new Student (33, "Nazrul Farazi");

console.log(student1, student2, student3);
