/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

// Type is either 'password' or 'data'
export const updateSettings = async (data, type) => {
  try {
    let url =
      type === 'password'
        ? 'http://127.0.0.1:3000/api/v1/users/update-my-password'
        : 'http://127.0.0.1:3000/api/v1/users/update-me';
    const res = await axios({
      method: 'PATCH',
      url,
      data
    });

    if (res.data.status === 'success') {
      showAlert('success', `${type.toUpperCase()} updated successfully!`);
    }
  } catch (err) {
    console.error(err);
    showAlert('error', err.response.data.message);
  }
};
