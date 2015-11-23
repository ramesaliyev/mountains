<div class="post-page">
  <div class="wrapper content">

    <div ng-if="!model.post" class="loading">
      Loading post...
    </div>

    <div ng-if="model.post" class="posts">
      <div class="post">
        <h1>{{model.post.title}}</h1>
        <span class="author"><a href="/user/{{model.post.author.id}}">by {{model.post.author.username}}</a></span>
        <p>{{model.post.text}}</p>
      </div>
    </div>
  </div>
</div>