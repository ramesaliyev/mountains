<header class="masthead">
  <nav class="site-navigation">
    <ul>
      <li><a href="/">HOMEPAGE</a></li>
      <li><a ng-if="user.logged" class="highlighted" href="/post">NEW POST</a></li>
      <li><a href="/leaderboard">LEADERBOARD</a></li>
      <li><a ng-if="user.logged" href="/profile">PROFILE</a></li>
      <li><a ng-if="!user.logged" href="/register">REGISTER</a></li>
      <li><a ng-if="!user.logged" href="/login">LOGIN</a></li>
      <li><a ng-if="user.logged" href="/logout">LOGOUT</a></li>
    </ul>
  </nav>
</header>