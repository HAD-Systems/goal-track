
<script>
	import UserControls from '$lib/components/user/user-controls.svelte'
</script>

<header class="dashboard-header">
  <div class="container h-full">
    <div class="inner">
      <nav class="nav-main">
        <ul>
          <li>
            <a href="/account/register">Register</a>
          </li>
          <li>
            <a href="/account/login">Login</a>
          </li>
          <li>
            <a href="/account">Account</a>
          </li>
        </ul>
      </nav>
      <UserControls />
    </div>
  </div>
</header>

<style>
	.dashboard-header {
    height: 4rem;
    position: absolute;
    top: 0;
    right: 0;
	}
	.inner {
		display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
	}
  .nav-main {
    display: none;
  }
</style>

