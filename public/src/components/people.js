function displayUser(students, teachers) {
  const studentsList = document.getElementById('students');
  studentsList.innerHTML = '';
  students.forEach((student) => {
    studentsList.innerHTML += `<div class="student flex items-center">
      <img src=${
        student.img
          ? student.img
          : 'src/assets/images/defaults/default-user.png'
      }>
      <div>${student.name}</div>
    </div>
    `;
  });
  const teachersList = document.getElementById('teachers');
  teachersList.innerHTML = '';
  teachers.forEach((teacher) => {
    teachersList.innerHTML += `<div class="teacher flex items-center">
    <img src=${
      teacher.img ? teacher.img : 'src/assets/images/defaults/default-user.png'
    }>
    <div>${teacher.name}</div>
  </div>
    `;
  });
}
