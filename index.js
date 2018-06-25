// Code your solution in this file.

// let lowerCaseStudenNames =['Adele', '']

function other (student) {
  return student.toLowerCase();
}

function lowerCaseStudentNames (list) {
return list.map(other)
}

<<<<<<< HEAD
function splitName(name) {
  const studentFirst = name.split(" ")[0];
  const studentLast = name.split(" ")[1];
  
  return { firstName : studentFirst, lastName : studentLast};
}

function nameToAttributes(list) {
  return list.map(splitName);
}


=======
>>>>>>> 92415c99ebb8e43d8710204721c65d0c676bbd1d
