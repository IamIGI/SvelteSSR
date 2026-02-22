<!-- <script>
  import {
    afterNavigate,
    beforeNavigate,
    goto,
  } from '$app/navigation';

  afterNavigate(() => {
    //When navigate to location
    console.log('After navigate');
  });

  beforeNavigate(() => {
    //When navigate OUT the location
    console.log('before navigate');
  });
</script>

<h1>Contact page</h1>
<button onclick={() => goto('/')}>Redirect page</button> -->

<script>
  import { enhance } from '$app/forms';
  let { form } = $props();

  console.log({ form });
</script>

<!-- enhance - prevent reload page after submit -->
<!-- <form method="POST" use:enhance> -->
<form
  method="POST"
  action="?/nameofform"
  use:enhance={({
    formElement,
    formData,
    action,
    cancel,
  }) => {
    console.log(formElement); //DOM ELEMENT
    console.log(formData.get('name')); //FORMDATA
    console.log(action); //WHERE POSTED
    // cancel();
    return async ({ result, update }) => {
      console.log(result);
      update();
    };
  }}
>
  <div class="mb-3">
    <label for="name" class="form-label">Your name</label>
    <input type="text" class="form-control" name="name" />
    {#if form && form.errors}
      <p>{form.errors.name}</p>
    {/if}
  </div>
  <button type="submit" class="btn btn-primary"
    >Submit</button
  >
</form>

{#if form && form.success}
  <p>Thank you !!!</p>
{/if}

<!-- form action="?/anotherformname" -->
