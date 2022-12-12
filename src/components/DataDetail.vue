<template>
    <div>
      <article class="item">
        <div class="activity-title-wrapper">
          <h4 class="activity-title">{{ activity.title }}</h4>
          <i class="fas fa-cog activity-settings" @click="controlDisplayed = !controlDisplayed"></i>
        </div>
        <p>{{ categories[activity.category] }}</p>
        <p>{{ activity.notes }}</p>
        <div class="media">
          <div class="media-left"></div>
          <div class="media-content">
            <div class="content">
              <p>
                <a href="#">User One</a> updated
                {{ activity.updatedAt | appTime }} minutes ago &nbsp;
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
        <div v-if="controlDisplayed" class="activity-controll">
          <a class="button is-warning" @click="$emit('updateEdit', true)">Edit</a>
          <a class="button is-danger" @click="deleteData">Delete</a> <!--2 delete-->
        </div>
      </article>
    </div>
  </template>
  
  <script>
  import store from '@/store'
  import mixins from '@/mixins/mixins'
  export default {
    mixins: [mixins],
    data () {
      return {
      controlDisplayed: false
      }
    },
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
    methods: {
      deleteData () { // 1 delete
        store.deletedata(this.activity)
      
      }
    }
  };
  </script>
  
  <style lang="scss" scoped>
  .activity-title {
    margin-bottom: 5px;
    display: inline-block;
  }
  .activity-settings {
    float: right;
    font-size: 20px;
  
    &:hover {
      cursor: pointer;
    }
  }
  .activity-controll {
    margin: 20px 0 0 0;
  
    a {
      margin-right: 5px;
    }
  }
  
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