let computer = {
  processor : 'amd',
  motherboard : 'still legend',
  monitor : 'msi',
  ram : 16,
}
let getMonitor = computer.monitor
// console.log(getMonitor);
let setMonitor = getMonitor = 'hp';
// console.log(setMonitor);

let getMotherboard = computer['motherboard']; //this system used only special keys
console.log(getMotherboard);
let setMotherboard = getMotherboard = 'gigabit';
console.log(setMotherboard);
