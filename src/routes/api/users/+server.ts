import { error } from '@sveltejs/kit';

export function GET(obj) {
  return new Response(
    JSON.stringify({ username: 'Steve' }),
    { status: 201 },
  );
}

export async function POST({ request }) {
  const { email } = await request.json();
  console.log({ email });

  if (email != 'francix@gmail.com') {
    return error(404, 'You are not francis');
  }

  return new Response('Success', { status: 201 });
}
