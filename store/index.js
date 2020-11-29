export const state= ()=>({
  capital:10000,
  ratio:1,
  times:100,
  result:1000000
})

export const mutations = {
  set_capital:(state,x) => state.capital = x, 
  set_ratio:(state,x) => state.ratio = x,
  set_times:(state,x) => state.times = x,
  set_result:(state,x) => state.result = x,
  
  math_capital:state=> state.capital = state.result / (1 + state.ratio) ** state.times,
  math_ratio:  state=> state.ratio = (state.result / state.capital)**(1 / state.times) - 1,
  math_times:  state=> state.times = Math.log(state.result / state.capital) / Math.log(1+state.ratio),
  math_result: state=> state.result = state.capital * ( 1 + state.ratio ) ** state.times
}