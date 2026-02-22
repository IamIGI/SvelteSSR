import axios from 'axios';
import { error } from '@sveltejs/kit';

export async function load({ params, data }) {
  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${params.id}`,
    );
    const user = await res.data;

    return {
      user,
      params,
      ...data, //server data
    };
  } catch (err) {
    throw error(500, `Failed to fetch users`);
  }
}
