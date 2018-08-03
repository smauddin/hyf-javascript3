function StudentsFactory(studentsArray, classRoom) {


  const add = (newStudentName) => {
    studentsArray.push(newStudentName);

  };
  const deleteStudent = (previousStudentName) => {
    studentsArray.splice(studentsArray.indexOf(previousStudentName), 1);

  };
  const deleteAll = () => {
    studentsArray = [];
  };
  const changeRoom = (newRoom) => {
    classRoom = newRoom;
  };
  const printAll = () => {
    if (studentsArray.length == 0) {
      return 'There are no students in ' + classRoom;
    } else {
      const stringOfStudentsArray = [studentsArray.slice(0, -1).join(', '), studentsArray.slice(-1)[0]].join(studentsArray.length < 2 ? '' : ' & ');
      return stringOfStudentsArray;
    }

  };

  return {
    add,
    deleteStudent,
    deleteAll,
    changeRoom,
    printAll

  };

}

// All Students
const students = StudentsFactory(['Niels', 'Mads'], '3a');
console.log("Students in Class 3a:  ", students.printAll());

// New Student added
students.add('Anowar');
console.log("Anowar Added in class 3a: ", students.printAll());

// Another Student Added
students.add('Pankaj');
console.log("Pankaj Added in class 3a: ", students.printAll());

//Student deleted 
students.deleteStudent('Anowar');
console.log("Anowar deleted from class 3a: ", students.printAll());

//Room changed
students.changeRoom('3b');
console.log("classRoom changed to 3b: ", students.printAll());

//Delete all students 
students.deleteAll();
console.log("All students deleted: ", students.printAll());

