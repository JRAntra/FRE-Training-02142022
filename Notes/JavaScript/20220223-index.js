
class Person {
    name ='Jojo';

    constructor(name) {
        this.name = name;
    }

    foo() {
        console.log(this.name);
    }
}
const p = new Person('Dio');
p.foo();
// Output: Dio