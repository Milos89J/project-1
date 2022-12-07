<template>
  <article class="post">
    <div class="activity-title">
      <input v-model="activity.title" type="text" class="input" />
      <i
        @click="controlDisplayed = !controlDisplayed"
        class="fas fa-cog activity-settings"
      ></i>
    </div>
    <div class="activity-category">
      <select v-model="activity.category" class="select">
        <option disabled value="">Please select one</option>
        <option
          v-for="category in categories"
          :key="category.id"
          :value="category.id"
        >
          {{ category.text }}
        </option> 
      </select>
    </div>
    <div class="control activity-notes">
      <textarea v-model="activity.notes" class="textarea" placeholder="Write some notes here" />
    </div>
    <div class="media">
      <div class="media-left"></div>
      <div class="media-content">
        <div class="content">
          <p>
            <a href="#">User One</a> updated {{ activity.updatedAt | appTime }} minutes ago 
             &nbsp;
          </p>
        </div>
      </div>
      <div class="media-right">
        <input
          v-model="activity.progress"
          id="progress"
          type="range"
          name="progress"
          min="0"
          max="100"
          value="90"
          step="10"
        />
        <label for="progress">Progress</label>
      </div>
    </div>
    <div v-if="controlDisplayed" class="activity-controll">
      <a class="button is-warning" @click="updateActivity">Update</a>
      <a class="button is-danger" @click="$emit('updateEdit', false)">Cancel</a>
    </div>
  </article>
</template>

<script>
import mixins from "@/mixins/mixins";
export default {
  mixins: [mixins],

  props: {
    categories: {
      type: Object,
      required: true,
    },
  
  },
  data() {
    return {
      controlDisplayed: false,
      activity: {}
     
    };
  },
  methods: {
    updateActivity () {
        console.log(this.activity)
    }
  }
};
</script>
<style lang="scss" scoped>
.activity-title {
  margin-bottom: 5px;
}
.activity-category {
    margin-bottom: 5px;
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