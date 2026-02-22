import { fail } from '@sveltejs/kit';

export const actions = {
  nameofform: async ({ request }) => {
    const formData = await request.formData();
    const name = formData.get('name');
    console.log({ name });

    const errors: { name?: string } = {};

    if (!name) {
      errors.name = 'The input is empty';
    }

    if (!errors.name) {
      return { success: true };
    }

    return fail(422, {
      errors,
    });

    // return {
    //   success: true,
    //   username: `The name is ${name}`,
    // };
  },

  //   anotherformname: async () => {}
};
