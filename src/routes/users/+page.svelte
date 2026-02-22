<script>
  import axios from 'axios';

  let email = $state('');

  async function postUser() {
    try {
      const url = '/api/users';
      const response = await axios.post(url, { email });

      console.log(response);
    } catch (e) {
      console.log(e);
    }
  }
</script>

<h1>Users page</h1>

<input type="email" bind:value={email} />
<button onclick={postUser}>Post user</button>
