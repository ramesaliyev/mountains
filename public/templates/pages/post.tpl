<div class="wrapper form-standalone content">
  <div class="form">
    <h3>New Post</h3>
    <input ng-model="model.title" placeholder="Title" type="text" />
    <textarea ng-model="model.text" placeholder="Content"></textarea>
    <a ng-click="post()" class="button button-primary">Post</a>
  </div>
</div>