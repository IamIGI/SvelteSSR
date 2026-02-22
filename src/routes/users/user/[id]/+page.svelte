<script>
  console.log('Hello');

  let { data } = $props();
  //   console.log(data);
</script>

<h1>User ID page</h1>
<h3>User by ID: {data.params.id}</h3>
<hr />
<div>
  <strong>{data.user.name}</strong> - {data.user.email}
</div>
<!-- <ul>
  {#each data.users as user (user.id)}
    <li>{user.name}</li>
  {/each}
</ul> -->
