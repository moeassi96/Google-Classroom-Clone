window.addEventListener("load", async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const class_id = urlParams.get("class_id");
  // sideBar({});

  const res = await fetch(
    "http://localhost/google-clone/Google-Classroom-Clone/api/controllers/getteachers.php",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ class_id }),
    }
  );
  const teachers = await res.json();

  const res_students = await fetch(
    "http://localhost/google-clone/Google-Classroom-Clone/api/controllers/getstudents.php",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ class_id }),
    }
  );
  const students = await res_students.json();

  displayUser(students, teachers);

  const streambtn = document.getElementById("stream");
  const classworkbtn = document.getElementById("classwork");

  streambtn.addEventListener("click", () => {
    window.location.href = `class.html?class_id=${class_id}`;
  });
  classworkbtn.addEventListener("click", () => {
    window.location.href = `classwork.html?class_id=${class_id}`;
  });
});
