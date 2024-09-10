function makeLotari (){
  let newLot = [];
  for (let i = 0; i <= 6; i++ ){
    let randomLott = Math.floor(Math.random() * 100) + 1;
    if(newLot.includes(i) === false){
      randomLott = Math.floor(Math.random() * 100) + 1;
      newLot.push(randomLott);
    }
  }
  return newLot;
}
const isLotari = makeLotari();
console.log(isLotari);
