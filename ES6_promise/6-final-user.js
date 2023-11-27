import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const arr = [];
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((resolves) => {
      resolves.forEach((resolve) => {
        arr.push({ status: resolve.status, value: resolve.status === 'fulfilled' ? resolve.value : `${resolve.reason.name}: ${resolve.reason.message}` });
      });
      return arr;
    }).catch((err) => err);
}
