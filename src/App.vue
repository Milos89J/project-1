<template>
  <div id="app">
    <nav class="navbar is-white topNote">
      <div class="container">
        <div class="navbar-name">
          <h2>{{appName}}</h2>
        </div>
      </div>
    </nav>
    <nav class="navbar is-white">
      <div class="container">
        <div class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item is-active" href="#">Newest</a>
            <a class="navbar-item" href="#">Progress</a>
            <a class="navbar-item" href="#">Finished</a>
          </div>
        </div>
      </div>
    </nav>
    <section class="container">
      <div class="columns">
        <div class="column is-3">
          <a
            v-if="!isDisplayed"
            @click="formDisplay()"
            class="button is-primary is block is-alt"
            href="#"
            >New Notes</a
          >
          <div v-if="isDisplayed" class="create-form">
            <h3>Create Notes</h3>
            <form>
              <div class="field">
                <label class="label">Title</label>
                <div class="control">
                  <input v-model="newData.title" />
                </div>
              </div>
              <div class="field">
                <label class="label">Notes</label>
                <div class="control">
                  <textarea
                    v-model="newData.notes"
                    class="textarea"
                    placeholder="Type some notes..."
                  ></textarea>
                </div>
              </div>
              <div class="field"> 
                <label class="label">Category</label>
                <div class="control">
                  <select v-model="newData.categoty" class="select">
                    <option disabled value="">Select one</option>
                    <option v-for="category in categories" :key="category.id"> {{category.text}} </option>
                  </select>
                </div>
              </div>
              <div class="field is-grouped">
                <div class="control">
                  <button
                    :disabled="checkDataValid"
                    @click="createActivity"
                    class="button is-warning"
                  >
                    Create Notes
                  </button>
                </div>
                <div class="control">
                  <button
                    class="button is-danger is-text"
                    @click="formDisplay()"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="column is-9">
          <div class="box content">
            <DataItems
              v-for="activity in activities"
              :activity="activity"
              :key="activity.id"
            ></DataItems>
            <div class="data-length">Currently {{dataLength}} task</div>
            <div class="data-message">{{dataMessage}}</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { fetchActivities, fetchUser, fetchCategories } from "@/api";
import DataItems from "@/components/DataItems.vue";
export default {
  name: "app",
  components: { DataItems },
  data() {
    return {
      isDisplayed: false,
      creator: 'MJ',
      appName: 'Notes',
      isTextDisplayed: true,
      newData: {
        title: "",
        notes: "",
        category: "",
      },
      items: { 1: { name: "Milos" }, 2: { name: "Sava" } },
      user: {},
      activities: {},
      categories: {},
    };
  },
  created() {
    this.activities = fetchActivities();
    this.user = fetchUser();
    this.categoties = fetchCategories();
  },
  computed: {
    checkDataValid() {
      return !this.newData.title || !this.newData.notes;
    },
    dataLength () { // this function or computed counts tasks
    return Object.keys(this.activities).length 
    },
    dataMessage () {
      if (this.dataLength && this.dataLength < 5) {
        return 'See some tasks'
      } else if (this.dataLength >= 5) {
        return 'Many tasks, good for you'
      } else {
        return 'No tasks...'
      }
    },
  },
  methods: {
    textDisplay() {
      this.isTextDisplayed = !this.isTextDisplayed;
    },
    formDisplay() {
      this.isDisplayed = !this.isDisplayed;
    },
    createActivity() {
      console.log(this.newData);
    },
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