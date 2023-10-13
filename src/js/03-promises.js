import Notiflix from 'notiflix';
 
function createPromise(position, delay) {
      const shouldResolve = Math.random() > 0.3;

      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (shouldResolve) {
            resolve({ position, delay });
          } else {
            reject({ position, delay });
          }
        }, delay);
      });
    }

    const form = document.querySelector('.form');
    const inputDelay = form.querySelector('[name="delay"]');
    const inputStep = form.querySelector('[name="step"]');
    const inputAmount = form.querySelector('[name="amount"]');

    form.addEventListener('submit', function (event) {
      event.preventDefault();

      const delay = Number(inputDelay.value);
      const step = Number(inputStep.value);
      const amount = Number(inputAmount.value);

      for (let i = 0; i < amount; i++) {
        const currentDelay = delay + i * step;
        createPromise(i + 1, currentDelay)
          .then(({ position, delay }) => {
            console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
          })
          .catch(({ position, delay }) => {
            console.log(`❌ Rejected promise ${position} in ${delay}ms`);
          });
      }
    });