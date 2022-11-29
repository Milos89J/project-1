<template>
  <div>
    <article class="post">
      <h4>{{ activity.title }}</h4>
      <div class="media">
        <div class="media-left">
        </div>
        <div class="media-content">
          <div class="content">
            <p>
              <a href="#">User One</a> updated
              {{ activity.updatedAt }} minutes ago &nbsp;
            </p>
          </div>
        </div>
        <div class="media-right">
          <span>Progress Bar</span>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
    props: [
        'activity'
    ]
};
</script>

<style scoped>
</style>