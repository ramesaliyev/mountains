<div class="wrapper leaderboard content">
  <h1>Leaderboard</h1>

  <ol class="users">
    <li class="user" ng-repeat="user in model.users">
      <h2><a href="/user/{{user.id}}">{{user.username}}</a></h2>
      <div class="badges">
        <img ng-repeat="badge in user.badges" src="/img/badges/{{badge.imagename}}" title="{{badge.name}}" />  
      </div>
    </li>
  </ol>
</div>