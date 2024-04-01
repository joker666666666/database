import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  // Key configurations for Stress in this section
  stages: [
    { duration: '10s', target: 100 }, // traffic ramp-up from 1 to a higher 200 users over 10 minutes.
    { duration: '10s', target: 100 }, // stay at higher 200 users for 30 minutes
    { duration: '10s', target: 0 }, // ramp-down to 0 users
  ],
};

export default () => {
  const urlRes = http.get(`http://localhost:5001/users/?VU=${__VU}&ITER=${__ITER}&skip=0&limit=100`);
  sleep(1);
};