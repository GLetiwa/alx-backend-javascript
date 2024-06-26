import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  return Promise
    .all([uploadPhoto(), createUser()])
    .then((responses) => {
      console.log(`${responses[0].body} ${responses[1].firstName} ${responses[1].lastName}`);
    })
    .catch(() => {
      console.error('Signup system offline');
    });
}

export default handleProfileSignup;
