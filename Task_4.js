function ElectrDevices (power, isOn, workTime){
    this.workTime = workTime || 1, 
    this.power = power || 100,
    this.isOn = isOn || false; 
}
ElectrDevices.prototype.powerSwitch = function (){
    this.isOn ? this.isOn = false : this.isOn = true;    
}
ElectrDevices.prototype.powerConsum = function (){
    if (this.isOn) {
        console.log('Power Consumption = '+ (this.power*this.workTime));
    } else {
        console.log ('Powered Off, pls switch on first');
    }   
}

function Lamp (name,power, isOn, workTime,lampType){
    this.workTime = workTime || 1,  
    this.power = power || 100,
    this.isOn = isOn || false;
    this.name = name || 'Lamp'
    this.lampType = lampType || 'LED'

}
Lamp.prototype = new ElectrDevices();
Lamp.prototype.changeLamp = function (newLamp){      
    if (newLamp !== null){
        this.name = newLamp;
        console.log('New Lamp changed to ' + newLamp + ' succsessfully');
    } else {
        console.log('Wrong replace');
    }

}


function Laptop (name,power, isOn, workTime,cpu){
    this.workTime = workTime || 1,  
    this.power = power || 100,
    this.isOn = isOn || false;
    this.name = name || 'Laptop';
    this.cpu = cpu || 'Intel';
}
Laptop.prototype = new ElectrDevices();
Laptop.prototype.switchGameOn = function (gameOn){
    if (this.isOn && gameOn) {
        console.log('Game start');
    } else {
        console.log('Game stop or power off');
    }          
}


lamp_st = new Lamp('Lamp_st',100,false,500);
laptop_int = new Laptop('MSI',1200,true,340);


console.log(lamp_st);
lamp_st.powerSwitch();
console.log(lamp_st.powerConsum());
console.log(lamp_st.changeLamp('UV'));

console.log(laptop_int);
laptop_int.powerSwitch();
console.log(laptop_int.powerConsum());
console.log(laptop_int.switchGameOn(true));
