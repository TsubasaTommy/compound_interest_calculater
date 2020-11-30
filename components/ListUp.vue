<template>
  <div class="d-flex flex-column flex-wrap custom-listup-div">
    <p
      class="text-caption font-weight-thin mb-1"
      v-for="(item, index) in get_list"
      :key="index"
    >
      {{ `${index}:(${item})` }}
    </p>
  </div>
</template>
<script>
import make_list from '@/assets/js/make_list'
export default {
  props: {
    x: {},
  },
  computed:{
    get_list(){
      return make_list(this.x.capital,this.x.ratio,this.x.result)
    }
  },

};
</script>
<style lang="scss">
.custom-listup-div {
  max-height: 55vh;
  overflow: scroll;
}
</style>