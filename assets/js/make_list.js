function loop(capital, ratio, result) {
  //===型矯正===//
  capital = Number(capital)
  ratio = Number(ratio)
  result = Number(result)

  if(0 < ratio){

    const list = [];
    let sum = 0;
    sum = 0;
    sum = capital

    
    while (sum <= result) {
      sum += sum * ratio;
      list.push(Math.round(sum));
    }
    return list;
  }
}
export default (capital,ratio,result)=>{
  return loop(capital,ratio,result);
}

//Typescript is GOD