import fakeApi from '@/lib/fakeApi';
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
            Vue.set(this.state.activities, key, activities[key])
        })
        return activities
      })
    },
    fetchCategories() {
        return fakeApi.get("categories", { force: 1 })
        .then(categories => {
            Object.keys(categories).forEach((key) => {
                Vue.set(this.state.categories, key, categories[key])
            })
         return categories
        })
      },

    createData(data) {
      data.id = this.generateId();
      data.progress = 0;
      data.createAt = new Date();
      data.updatedAt = new Date();

      return fakeApi.post("activities", data);
    },
   
    fetchUser() {
      return {
        name: "Milos Jeremic",
        id: "-Aj34jknvncx98812",
      };
    },

    deleteDataAPI(activity) {
      //6 step delete, mi ovde povezujem sa fakeapi i definisemo sta
      //brisemo. prvo 5 pa 6
      return fakeApi.delete("activities", activity);
    },
  },
};

export default store;
