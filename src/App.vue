<template>
  <div v-if="activities && categories" id="app"> 
    <nav class="navbar is-white topNote">
      <div class="container">
        <div class="navbar-name">
          <h2>{{ appName }}</h2>
        </div>
      </div>
    </nav>
    <TheNavbar />
    <section class="container">
      <div class="columns">
        <div class="column is-3">
          <DataCreate @dataCreated="addData" :categories="categories" />
        </div>
        <div class="column is-9">
          <div
            class="box content"
            :class="{ fetching: fetchingData, 'has-error': error }"
          >
            <div v-if="error">
              {{ error }}
            </div>
            <div v-else>
              <div v-if="fetchingData">Loading . . .</div>
              <DataItems
                v-for="activity in activities"
                :activity="activity"
                :categories="categories"
                :key="activity._id"
                @activityDeleted="clickActivityDelete"> <!--3 delete-->
              ></DataItems>
            </div>
            <div v-if="!fetchingData">
              <div class="data-length">Currently {{ dataLength }} task</div>
              <div class="data-message">{{ dataMessage }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Vue from "vue";
import TheNavbar from "./components/TheNavbar.vue";
import DataCreate from "@/components/DataCreate.vue";
import { fetchActivities, fetchUser, fetchCategories, deleteDataAPI } from "@/api";
import DataItems from "@/components/DataItems.vue";
export default {
  name: "app",
  components: { DataItems, DataCreate, TheNavbar },
  data() {
    return {
      creator: "MJ",
      appName: "Notes",
      isTextDisplayed: true,
      items: { 1: { name: "User1" }, 2: { name: "User2" } },
      fetchingData: false,
      error: null,
      user: {},
      activities: null,
      categories: null,
    };
  },
  created() {
    this.fetchingData = true;
    fetchActivities()
      .then((activities) => {
        this.activities = activities;
        this.fetchingData = false;
      })
      .catch((err) => {
        this.error = err;
        this.fetchingData = false;
      });
    this.user = fetchUser();
    fetchCategories().then(categories => {
        this.categories = categories
    })
  },
  computed: {
    dataLength() {
      // this function or computed counts tasks
      return Object.keys(this.activities).length;
    },
    dataMessage() {
      if (this.dataLength && this.dataLength < 5) {
        return "See some tasks";
      } else if (this.dataLength >= 5) {
        return "Many tasks, good for you";
      } else {
        return "No tasks...";
      }
    },
  },
  methods: {
    textDisplay() {
      this.isTextDisplayed = !this.isTextDisplayed;
    },
    addData(newData) {
      Vue.set(this.activities, newData.id, newData); // This property used for display new activities
    },
    clickActivityDelete (activity) {  // 7 delete
      deleteDataAPI(activity)
      .then(deletedActivity => {
        Vue.delete(this.activities, deletedActivity.id)
      })
    }
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
html,
body {
  font-family: "Open Sans", serif;
  background: #f2f6fa;
}
footer {
  background-color: #f2f6fa !important;
}
.fetching {
  border: 1.5px solid rgb(252, 107, 50);
}
.has-error {
  border: 1.5px solid rgb(184, 24, 184);
}
.data-message {
  float: right;
}
.data-length {
  display: inline-block;
}
.example-wrapper {
  margin-left: 30px;
}
h2 {
  font-size: 2rem;
}
.topNote {
  border-top: 15px solid #00c6ff;
}
.topNote .container {
  border-bottom: 0.5px solid rgb(140, 154, 174);
}

.container .columns {
  margin: 3rem 0;
}
.navbar-meni .navbar-item {
  padding: 0 2rem;
}

aside.menu {
  padding-top: 3rem;
}
aside.menu .menu-list {
  line-height: 1.5;
}
aside.menu .menu-label {
  padding-left: 10px;
  font-weight: 700;
}
.button.is-primary.is-alt {
  background: #00c6ff;
  font-weight: 600;
  font-size: 13px;
  height: 2.3rem;
  line-height: 2.6;
}
.button.is-text {
  text-decoration: none;
}
.media-left img {
  border-radius: 50%;
}
.media-content p {
  font-size: 14px;
  line-height: 2.3;
}
article.post {
  margin: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e6eaee;
}
article.post:last-child {
  padding-bottom: 0;
  border-bottom: none;
}
.menu-list li {
  padding: 5px;
}
notebar-brand > h2 {
  font-size: 30px;
  padding: 18px;
}
</style>