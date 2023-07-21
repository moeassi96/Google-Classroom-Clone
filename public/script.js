window.onload = () => {
  const next = document.getElementById('next');
  console.log(next);
  const sign_in_content = document.getElementById('sign-in-content');
  let step = 0;
  sign_in_content.innerHTML = signInSection(step);
  console.log(document.getElementById('sign-in-email'));
  next.addEventListener('click', () => {
    step++;
    console.log(step);
    sign_in_content.innerHTML = signInSection(step);
    console.log(document.getElementById('sign-in-email'));
  });
};
