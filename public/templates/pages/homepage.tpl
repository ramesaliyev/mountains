<div class="homepage">
  <img class="cover" src="/img/cover.png" />

  <div class="wrapper content">
    <div ng-if="model.status=='loading'" class="loading">
      Loading posts...
    </div>

    <div ng-if="model.status=='loaded' && !model.posts.length" class="loading">
      There is no post to show.
    </div>

    <div ng-if="model.status=='loaded' && model.posts.length" class="posts">
      <div class="post" ng-repeat="post in model.posts track by $index">
        <h1><a href="/read/{{post.id}}">{{post.title}}</a></h1>
        <span class="author"><a href="/user/{{post.author.id}}">by {{post.author.username}}</a></span>
        <p>{{post.text}}</p>
      </div>
    </div>
  </div>
</div>