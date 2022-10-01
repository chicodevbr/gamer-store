const form = document.querySelector('.login');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const isEmail = isValidatedEmail(email);
  const isPassword = passwordValidator(password);

  console.log(isEmail, password, isPassword);
});

const isValidatedEmail = (value) => {
  const emailRegex = new RegExp(
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  );

  return emailRegex.test(value);
};

const passwordValidator = (password) => {
  const pwdRegex = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{4,8}$/);
  return pwdRegex.test(password);
};
