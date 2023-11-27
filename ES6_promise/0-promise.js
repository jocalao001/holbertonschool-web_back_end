export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    resolve('exito');
    reject(new Error('error'));
  });
}
