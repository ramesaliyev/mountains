<div class="wrapper user content">
  <div ng-if="!model.user" class="loading">
    Loading user...
  </div>

  <div class="profile" ng-if="model.user">
    <h1>{{model.user.username}}</h1>
  </div>

  <div class="profile" ng-if="model.user.badges.length">
    <h2>Earned Badges</h2>
    <ul class="badges">
      <li class="badge" ng-repeat="badge in model.user.badges">
        <img src="/img/badges/{{badge.imagename}}" />
        <span class="name">{{badge.name}}</span>
        <span class="info">{{badge.info}}</span>
      </li>
    </ul>
  </div>
  
  <div class="profile" ng-if="model.badges.length && model.path == '/profile'">
    <h2>Other Badges</h2>
    <ul class="badges">
      <li class="badge not-earned" ng-repeat="badge in model.badges">
        <img src="/img/badges/{{badge.imagename}}" />
        <span class="name">{{badge.name}}</span>
        <span class="info">{{badge.info}}</span>
      </li>
    </ul>
  </div>
</div>