<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="3">
        <v-text-field
          label="capital (元金)"
          v-model="capital"
          prefix="$"
          type="Number"
          v-if="!(tab === 0)"
        ></v-text-field>
        <v-text-field
          label="ratio (利率)"
          v-model="ratio_d"
          prefix="%"
          type="Number"
          v-if="!(tab === 1)"
        ></v-text-field>
        <v-text-field
          label="times (回数)"
          v-model="times"
          prefix="x"
          type="Number"
          v-if="!(tab === 2)"
        ></v-text-field>
        <v-text-field
          label="result (結果)"
          v-model="result"
          prefix="$"
          type="Number"
          v-if="!(tab === 3)"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row justify="center">
      <p class="display-4">
        {{get_prefix}}
        {{Math.round(get_answer * 100)/100}}
      </p>
    </v-row>
    <v-divider></v-divider>
    
    <list-up
      :x="{
        capital,
        ratio:ratio_d / 100,
        result
      }"
      v-if="tab === 2"
    />

  </v-container>
</template>
<script>
export default {
  props:{
    tab:Number
  },
  data:()=>({
    ratio_d:1,
    times:100,
    result:100000,
    capital:10000,
  }),
  computed:{
    ratio(){return this.ratio_d / 100},

    math_capital(){ return this.capital = Math.round(this.result / (1 + this.ratio) ** this.times)},
    math_ratio(){ return this.ratio_d = Math.round(((this.result / this.capital)**(1 / this.times) - 1) * 10000)/100},
    math_times(){ return this.times = Math.round(Math.log(this.result / this.capital) / Math.log(1+this.ratio))},
    math_result(){return this.result = Math.round(this.capital * ( 1 + this.ratio ) ** this.times)},  

    get_answer(){
      switch(this.tab){
        case 0:
          return this.math_capital
          break;
        case 1:
          return this.math_ratio
          break;
        case 2:
          return this.math_times
          break;
        case 3:
          return this.math_result
          break;
      }
    },
    get_prefix(){
      switch(this.tab){
        case 0:
          return '$'
          break;
        case 1:
          return '%'
          break;
        case 2:
          return 'x'
          break;
        case 3:
          return '$'
          break;
      }
    }
  },
}
</script>