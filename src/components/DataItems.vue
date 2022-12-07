<template>
  <div>
    <DataItemUpdate v-if="controlDisplayed"/>
    <DataDetail v-else :activity="activity" :categories="categories"/>
    
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
    }
  };
</script>

<style lang="scss" scoped>
</style>