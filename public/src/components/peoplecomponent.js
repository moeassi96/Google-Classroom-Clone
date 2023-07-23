function displayUser(students, teachers) {
 
  const studentsList = document.getElementById('students');
  studentsList.innerHTML = '';
  students.forEach((student) => {
    
    const name = `${student.user_firstname} ${student.user_lastname}`
   
    studentsList.innerHTML += `<div class="student flex items-center">
      <img src=${
        student.img
          ? student.img
          : 'src/assets/images/defaults/default-user.png'
      }>
      <div>${name}</div>
    </div>
    `;
  });
  const teachersList = document.getElementById('teachers');
 
  teachersList.innerHTML = '';
  teachers.forEach((teacher) => {
    const name = `${teacher.user_firstname} ${teacher.user_lastname}`
    teachersList.innerHTML += `<div class="teacher flex items-center">
    <img src=${
      teacher.img ? teacher.img : 'src/assets/images/defaults/default-user.png'
    }>
    <div>${name}</div>
  </div>
    `;
  });
}
