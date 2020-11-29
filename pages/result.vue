<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="3">
        <v-text-field
          label="ratio"
          v-model="ratio"
          prefix="%"
          type="Number"
        ></v-text-field>
        <v-text-field
          label="times"
          v-model="times"
          prefix="x"
          type="Number"
        ></v-text-field>
        <v-text-field
          label="capital"
          v-model="capital"
          prefix="$"
          type="Number"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row justify="center">
      <p class="display-4">
        ${{Math.round(get_result * 100)/100}}
      </p>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data:()=>({
    ratio:null,
    times:null,
    capital:null,
  }),
  computed:{
    get_result(){
      this.$store.commit('set_ratio',this.ratio/100)
      this.$store.commit('set_times',this.times)
      this.$store.commit('set_capital',this.capital)
      this.$store.commit('math_result')
      return this.$store.state.result
    }
  },
}
</script>