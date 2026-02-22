import axios from 'axios';
import { error, redirect } from '@sveltejs/kit';

export async function load() {
  redirect(307, '/');
  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts`,
    );
    const posts = await res.data;

    return {
      posts,
    };
  } catch (err) {
    throw error(500, `Failed to fetch posts`);
  }
}
