<template>
  <div>
    <DataItemUpdate v-if="controlDisplayed" :activity="activity" :categories="categories" @updateEdit="changeUpdateEdit"/>
    <DataDetail v-else :activity="activity" :categories="categories" @updateEdit="changeUpdateEdit"/> <!--Edit func-->
    
  </div>
</template>

<script>
import DataDetail from './DataDetail.vue';
import DataItemUpdate from './DataItemUpdate.vue';
export default {
  components: {
    DataDetail, 
    DataItemUpdate,
  },
  props: {
    activity: {
      required: true,
      type: Object
    },
    categories: {
       required: true,
       type: Object
    }
  },
  data () {
      return {
      controlDisplayed: false
      }
    },
    methods: {
       changeUpdateEdit (isUpdate) { /// edit func, when click we are changing from dataitemupdate
        this.controlDisplayed = isUpdate
       }
    },
  };
</script>

<style lang="scss" scoped>
</style>