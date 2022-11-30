<template>
  <div class="dataCreate">
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
              <option v-for="category in categories" :key="category.id">
                {{ category.text }}
              </option>
            </select>
          </div>
        </div>
        <div class="field is-grouped">
          <div class="control">
            <button
              :disabled="!checkDataValid"
              @click="createActivity"
              class="button is-warning"
            >
              Create Notes
            </button>
          </div>
          <div class="control">
            <button class="button is-danger is-text" @click="formDisplay()">
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    categories: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isDisplayed: false,
      newData: {
        title: "",
        notes: "",
        category: "",
      },
    };
  },
  computed: {
    checkDataValid() {
      return this.newData.title && this.newData.notes;
    },
  },
  methods: {
    formDisplay() {
      this.isDisplayed = !this.isDisplayed;
    },
    createActivity() {
      console.log(this.newData);
    },
  },
};
</script>

<style scoped>
</style>