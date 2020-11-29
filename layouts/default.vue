<template>
  <v-app>
    <v-app-bar app>
      <template>
        <v-tabs v-model="nav.tab">
          <v-tab v-for="item in nav.items" :key="item" :to="item" nuxt>
            {{item}}
          </v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    
    <v-main>
      <nuxt />
    </v-main>

    <v-footer>
      
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data:()=>({
    nav:{
      tab:null,
      items:[
        'capital',
        'ratio',
        'times',
        'result'
      ]
    }
  })
}
</script>
<style lang="scss">
html{
  ::-webkit-scrollbar{
    display:none;
  }
}
</style>