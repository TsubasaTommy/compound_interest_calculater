<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="3">
        <v-text-field
          label="capital"
          v-model="capital"
          prefix="$"
          type="Number"
        ></v-text-field>        
        <v-text-field
          label="times"
          v-model="times"
          prefix="x"
          type="Number"
        ></v-text-field>
        <v-text-field
          label="result"
          v-model="result"
          prefix="$"
          type="Number"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row justify="center">
      <p class="display-4">
        %{{Math.round(get_ratio * 10000)/100}}
      </p>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data:()=>({
    times:null,
    capital:null,
    result:null,
  }),
  computed:{
    get_ratio(){
      this.$store.commit('set_times',this.times)
      this.$store.commit('set_capital',this.capital)
      this.$store.commit('set_result',this.result)
      this.$store.commit('math_ratio')
      return this.$store.state.ratio
    }
  },
}
</script>