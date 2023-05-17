class Parent {
    constructor(ownCity){
        this.ownCity = ownCity || 'Moscow';
        this.hasFlat = true;        
    }
    getInfo(){
        return ('I live in ' + this.ownCity);
    }
}

class Child extends Parent {
    constructor(isStudent, city, ownCity){
        super(ownCity);
        this.isStudent = isStudent;
        this.city = isStudent ? city : ownCity;
    }
    getInfo(){
        if (this.isStudent) {
            return ('I study in ' + this.city);
        } else {
            return super.getInfo();
        }
    }
}

const student = new Child (true, 'Piter');
console.log (student.getInfo());

const employee = new Child (false, 'New York');
console.log(employee.getInfo());