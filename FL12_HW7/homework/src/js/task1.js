const MIN_EMAIL_LENGTH = 5;
const MIN_PASSWORD_LENGTH = 6;

let email = prompt('Enter your email, please');
let password;
let isChangePassword;

if (email === null || email.trim() === '') {
  alert('Canceled');
} else {
  if (email.length < MIN_EMAIL_LENGTH) {
    alert("I don't know any emails having name length less than 5 symbols");
  } else {
    if (email === 'user@gmail.com' || email === 'admin@gmail.com') {
      password = prompt('Enter your password, please');
      if (password === null || password.trim() === '') {
        alert('Canceled');
      } else {
        if (
          password === 'UserPass' && email === 'user@gmail.com' ||
          password === 'AdminPass' && email === 'admin@gmail.com'
        ) {
          isChangePassword = confirm('Do you want to change your password?');
          if (isChangePassword) {
            password = prompt('Enter your old password, please');
            if (password === null || password.trim() === '') {
              alert('Canceled');
            } else {
              if (
                password === 'UserPass' && email === 'user@gmail.com' ||
                password === 'AdminPass' && email === 'admin@gmail.com'
              ) {
                password = prompt('Enter your new password, please');
                if (password === null || password.trim() === '') {
                  alert('Canceled');
                } else {
                  if (password.length < MIN_PASSWORD_LENGTH) {
                    alert('It’s too short password. Sorry.');
                  } else {
                    let confirmPassword = prompt(
                      'Enter your new password again, please'
                    );
                    if (confirmPassword === password) {
                      alert('You have successfully changed your password.');
                    } else {
                      alert('You wrote the wrong password.');
                    }
                  }
                }
              }
            }
          } else {
            alert('You have failed the change.');
          }
        } else {
          alert('Wrong password');
        }
      }
    } else {
      alert('I don’t know you');
    }
  }
}
