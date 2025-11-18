/**
 * Define the Course and Assignment concepts using the class notations
 */
class Course{
    constructor(courseName, instructor, creditHours, assignments){
    this.courseName = courseName;
    this.instructor = instructor;
    this.creditHours = creditHours;
    if (typeof(this.courseName) != "string"){
        this.courseName = "Untitled Course"; // Even better it would be to output an error message saying "incorrect input format. Please type in a string like "Mar 20 or March 30th." and allow for the user to try again 
    }
    if (typeof(this.instructor) != "string"){
        this.instructor = "TBA"; // Even better it would be to output an error message saying "incorrect input format. Please type in a string like "Mar 20 or March 30th." and allow for the user to try again 
    }    
    if (typeof(this.creditHours) != "number" || Number.isNaN(this.creditHours)){
        this.creditHours = 0; // Even better it would be to output an error message saying "incorrect input format. Please type in a string like "Mar 20 or March 30th." and allow for the user to try again 
    }   
    if (arguments.length > 4){
        console.log(`You are likely trying to input multiple assignments' information without making them into Assignment objects and placing them into an array inside of the Class object input.\n\n Try again in the format highlighted below:\n\nFirst you define something of this form:\n let a1 = new Assignment('Project Proposal', 'Jan 15'); \n let a2 = new Assignment('Midterm Report', 'Feb 20');\n\nThen, you must place a1 and a2 into the Class object in the following way:\n let c1 = new Course('Software Engineering', 'Dr. Pepper', 3, [a1,a2]);`);
    }
    if (assignments === undefined || assignments === null){ 
        this.assignments = [];
    }
    else if (!Array.isArray(assignments)){
        this.assignments = [assignments]; 
    }
    else{
        this.assignments = assignments;
    }
    if (this.assignments.length === 0){
        let new_arr = new Assignment("","");
        this.assignments = [new_arr];
    }
    }

    courseInfo(){
    console.log('Course: ' + this.courseName + 
                ' | Instructor: ' + this.instructor + 
                ' | Credit Hours: ' + this.creditHours);
    console.log('Assignments >>>');
    for (let a of this.assignments){
        if (!(a instanceof Assignment)){
            console.log(`${a} must be an object of the Assignments class. Please ensure that this is done correctly.`);
            continue;
        }
        if (a === null || a === undefined){
            console.log(`Unacceptable assignment property input of ${a}. Do not write 'undefined' or 'null' for the assignment's name or due date. Try again.`);
            continue;
        }
        else{
            a.printAssignment();
        }
    }
}
}
class Assignment{
    constructor(title, dueDate){
    this.title = title;
    this.dueDate = dueDate;
    if (typeof(this.title) != "string" || this.title === ""){
        this.title = "Untitled Assignment"; // Even better it would be to output an error message saying "incorrect input format. Please type in a string like "Mar 20 or March 30th." and allow for the user to try again 
    }
    if (typeof(this.dueDate) != "string" || this.dueDate === ""){
        this.dueDate = "TBD"; // Even better it would be to output an error message saying "incorrect input format. Please type in a string like "Mar 20 or March 30th." and allow for the user to try again 
    }  
    }
    printAssignment(){
    console.log('   Title: ' + this.title + ' | Due Date: ' + this.dueDate);
    }
}
// create the objects using the classes
let a1 = new Assignment('Project Proposal', 'Jan 15');
let a2 = new Assignment('Midterm Report', 'Feb 20');
let a3 = new Assignment('Final Report', 4066);
let a4 = new Assignment();
let a5 = new Assignment("","",undefined);
let a6= new Assignment("","",null);
let a7= new Assignment("","",[null, undefined]);
let a8 = "oops";
let a9 = ('Project Proposal', 'Jan 15');

let c1 = new Course("Software Engineering", "Dr. Pepper", 3, [a1,a2]);
let c2 = new Course("Data Science", Number("Dr. Evil"), NaN, a4);
let c3 = new Course();
let c4 = new Course("Software Engineering", "Dr. Pepper", "3", a5);
let c5 = new Course("Software Engineering", "Dr. Pepper", 3, a6);
let c6 = new Course("Software Engineering", "Dr. Pepper", 3, a7);
let c7 = new Course("Software Engineering", "Dr. Pepper", 3, undefined);
let c8 = new Course("Software Engineering", "Dr. Pepper", 3, null);
let c9 = new Course("Software Engineering", "Dr. Pepper", 3, [null, undefined, a1]);
let c10 = new Course("Software Engineering", "Dr. Pepper", 3, [a8, a1]);
let c11 = new Course("Software Engineering", "Dr. Pepper", 3, 10);
//let c12 = new Course("Software Engineering", "Dr. Pepper", 3, 'Project Proposal', 'Jan 15');
//let c13 = new Course("Software Engineering", "Dr. Pepper", 3, 'Project Proposal', 'Jan 15', 'Midterm Report', 'Feb 20');
//let c14 = new Course("Software Engineering", "Dr. Pepper", 3, 'Project Proposal', 3);

// Display info
c1.courseInfo();
c2.courseInfo();  
//c3.courseInfo();
//c4.courseInfo();
//c5.courseInfo();
//c6.courseInfo();  
//c7.courseInfo(); 
//c8.courseInfo();  
//c9.courseInfo();
//c10.courseInfo();
//c11.courseInfo();
//c12.courseInfo();
//c13.courseInfo();
//c14.courseInfo();
