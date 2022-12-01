<template>
  <div>
    <article class="post">
      <h4>{{ activity.title }}</h4>
      <div class="media">
        <div class="media-left"></div>
        <div class="media-content">
          <div class="content">
            <p>
              <a href="#">User One</a> updated {{ activity.updatedAt }} minutes
              ago &nbsp;
            </p>
          </div>
        </div>
        <div class="media-right">
          <span
            >Progress: <span :class="'color-' + activityProgress">{{ activity.progress }} %</span></span
          >
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  props: {
    activity: {
      type: Object,
      required: true,
    },
  },
  computed: {
    activityProgress () {
      if (this.activity.progress <= 0) {
        return 'red'
      } else if (this.activity.progress <= 50) {
        return 'orange'
      } else {
        return 'green'
      }
    }
  },
};
</script>

<style scoped>
.color-red {
  color: red;
}
.color-orange {
  color: orange;
}
.color-green {
  color: green;
}
</style>