<template>
  <div>
    <article class="item">
      <h4 class="title-data">{{ activity.title  | uppercase }}</h4>
      <p>{{ categories[activity.category] }}</p>
      <p>{{ activity.notes }}</p>
      <div class="media">
        <div class="media-left"></div>
        <div class="media-content">
          <div class="content">
            <p>
              <a href="#">User One</a> updated {{ activity.updatedAt | appTime }} minutes
              ago &nbsp;
            </p>
          </div>
        </div>
        <div class="media-right">
          <span
            >Progress:
            <span :class="'color-' + activityProgress"
              >{{ activity.progress }} %</span
            ></span
          >
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  props: {
    categories: {
      type: Object,
      required: true,
    },
    activity: {
      type: Object,
      required: true,
    },
  },

  computed: {
    activityProgress() {
      if (this.activity.progress <= 0) {
        return "red";
      } else if (this.activity.progress <= 50) {
        return "orange";
      } else {
        return "green";
      }
    },
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
.item .title-data {
  margin-bottom: 4px;
}
</style>