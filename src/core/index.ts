class Person {
    name: string

    constructor(name: string) {
        this.name = name
    }

    makeGreeting(): string {
        return `Hi, I am ${this.name}`
    }
}

const fer = new Person('Fer')
console.log(fer.makeGreeting())