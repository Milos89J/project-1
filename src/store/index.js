import fakeApi from '@/lib/fakeApi.js';
import Vue from 'vue';

const store = {
  state: {
    activities: {},
    categories: {},
    generateId() {
      return Math.floor(new Date() * Math.random());
    },

    fetchActivities() {
      return fakeApi.get("activities", { force: 1 })
      .then(activities => {
        Object.keys(activities).forEach((key) => {
            this.setItem('activities', key, activities[key])
        })
        return activities
      })
    },
    fetchCategories() {
        return fakeApi.get("categories", { force: 1 })
        .then(categories => {
            Object.keys(categories).forEach((key) => {
                this.setItem('categories', key, categories[key])
            })
         return categories
        })
      },
      setItem (resource, id, item) {
      Vue.set(this.state[resource], id, item)
      },

    createActivity(data) {
      data.id = this.generateId();
      data.progress = 0;
      data.createAt = new Date();
      data.updatedAt = new Date();

      return fakeApi.post("activities", data)
      .then(createdActivity => {
        this.setItem('activities', createdActivity.id, createdActivity)
      })
    },
   
    fetchUser() {
      return {
        name: "Milos Jeremic",
        id: "-Aj34jknvncx98812",
      };
    },

    deleteData(activity) {
      return fakeApi.delete("activities", activity)
      .then(deleteData => {
        Vue.delete(this.state.activities, activity.id)
        return deleteData
      })
    },
}
  };

export default store;
