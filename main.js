class persona {
    constructor(nombre, edad, genero) {
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }
    obtDetalles() {
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}, Genero: ${this.genero}`);
    }
};

class estudiante extends persona {
    constructor(nombre, edad, genero, curso, grupo) {
        super(nombre, edad, genero);
        this.curso = curso;
        this.grupo = grupo;
    }
    registrar() {
        console.log(`${this.nombre} se ha registrado en el curso ${this.curso}, en el grupo ${this.grupo}`);
    }
};

class profesor extends persona {
    constructor(nombre, edad, genero, asignatura, nivel) {
        super(nombre, edad, genero);
        this.asignatura = asignatura;
        this.nivel = nivel;
    }
    asignar() {
        console.log(`${this.nombre} de ${this.edad} es el profesor asignado a la asignatura de ${this.asignatura} de nivel ${this.nivel}`);
    }
};

const estudiante1 = new estudiante('Pepe', 18, 'masculino', 'Fisica', 'A');
estudiante1.obtDetalles();
estudiante1.registrar();

const profesor1 = new profesor('Lucía', 35, 'femenino', 'Física y Química', 'Difícil')
profesor1.obtDetalles();
profesor1.asignar();




//EJERCICIO EXTRA MAYAS Y AZTECAS.

class warrior{
    constructor(life, power){
        this.life = life;
        this.power = power;
    }
    attack(){
        return this.power;
    }
    defend(damage){
        let remainingLife = this.life - damage;
        console.log(remainingLife)
    }
};

class maya extends warrior{
    constructor(life, power){
        super(life, power)
    }
    drinkColaCao(){
        this.power += 10;
    }
};

class azteca extends warrior{
    constructor(life, power){
        super(life, power);
    }
    drinkNesquik(){
        this.life += 10;
    }
};

let mayaWarrior = new maya(100, 100);
let aztecWarrior = new azteca(100, 100);

//AztecaWarrior bebe Nesquick
aztecWarrior.drinkNesquik();
console.log(aztecWarrior.life);

//mayaWarrior bebe ColaCao
mayaWarrior.drinkColaCao();
console.log(mayaWarrior.power);

//Azteca ataca a maya -> maya se defiende
aztecWarrior.defend(mayaWarrior.attack());

//Maya ataca a Azteca -> Azteca se defiende.
mayaWarrior.defend(aztecWarrior.attack());



  