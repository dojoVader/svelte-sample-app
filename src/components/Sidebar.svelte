<script>
  import Logo from './Logo.svelte';
  let menus = [
      {
          title: 'Home',
          path: '/'
      },
      {
          title: 'About',
          path: '/about'
      },
      {
          title: 'Blog',
          path: '/blog'
      },
      {
          title: 'Channels',
          path: '/channels'
      },
      {
          title: 'All Channels',
          path: '/all-channels'
      },
      {
          title: 'Runs',
          path: '/runs'
      },
      {
          title: 'Manage User',
          path: '/manage-users'
      }
  ]
</script>

<style>
  .sidebar{
    width:265px;
    background: #112337;
    height:100vh;
    position: fixed;
  }
  .menu-items {
      margin-top:39%;
  }
  .menu-items li {
      list-style: none;
      color:white;
      margin: 5% 0%;
  }
</style>

<div class="sidebar">
    <Logo />

    <div class="menu-items">
        <ul>
            {#each menus as menu}
            <li><a rel='prefetch' href="{menu.path}">{menu.title}</a></li>
            {/each}
       
        </ul>
    </div>
</div>