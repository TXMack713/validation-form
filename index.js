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

async function handleSubmit(event) {
  event.preventDefault();

  const data = new FormData(event.target);

  const value = Object.fromEntries(data.entries());

  // value.topics = data.getAll('topics');

  console.log({ value });

  try {
    const rawResponse = await fetch(
      'https://frontend-take-home.fetchrewards.com/form',
      {
        method: 'POST',
        body: JSON.stringify(value),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    const content = rawResponse.json();
    console.log(content);
    return content;
  } catch (err) {
    console.error(`Error at fetch POST: ${err}`);
    throw err;
  }
}

const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);
