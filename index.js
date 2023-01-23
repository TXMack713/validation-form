const email = document.getElementById('user_email');

email.addEventListener('input', (event) => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity(
      'Please enter a legitimate email to proceed. Ex: myemail@example.com'
    );
  } else {
    email.setCustomValidity('');
  }
});

// const page = document.querySelector('body');
// page.addEventListener('load', getOccupation);
// page.addEventListener('load', getState);

const user_occupation = document.getElementById('user_occupation');
user_occupation.addEventListener('click', getOccupation);

const user_state = document.getElementById('user_state');
user_state.addEventListener('click', getState);

async function getOccupation() {
  const url = 'https://frontend-take-home.fetchrewards.com/form';
  const response = await fetch(url);
  const data = await response.json();
  const occupations = data['occupations'];
  for (let i = 0; i < occupations.length; i++) {
    const option = document.createElement('option');
    option.innerHTML = occupations[i];
    option.value = occupations[i];
    user_occupation.appendChild(option);
  }
}

async function getState() {
  const url = 'https://frontend-take-home.fetchrewards.com/form';
  const response = await fetch(url);
  const data = await response.json();
  const locations = data['states'];
  for (let i = 0; i < locations.length; i++) {
    const option = document.createElement('option');
    const locale = locations[i]['abbreviation'] + ' - ' + locations[i]['name'];
    option.innerHTML = locale;
    option.value = locations[i]['name'];
    user_state.appendChild(option);
  }
}

const submit = document.getElementById('submit');
submit.addEventListener('click', () => {
  let userName = document.getElementById('name').value;
  let userEmail = document.getElementById('email').value;
  let userPassword = document.getElementById('user_password').value;
  let userOccupation = document.getElementById('user_occupation').value;
  let userState = document.getElementById('user_state').value;

  console.log(userName);
  console.log(userEmail);
  console.log(userPassword);
  console.log(userOccupation);
  console.log(userState);
});
