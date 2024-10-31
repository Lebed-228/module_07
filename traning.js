// №7.7.1

function printInfo() {
    console.log(this.name, this.age)
}
const person = {
    name: 'Вася',
    age: 18
}
printInfo.call(person)

// №7.7.2

function calculate(a, b, operator){
    if (operator == '+'){
        return a+b
    }
    if (operator == '-'){
        return a-b
    }
    if (operator == '*'){
        return a*b
    }
    if (operator == '/'){
        return a/b
    }
}
const op = {
    a: 2,
    b: 3,
    operator: '-'
}

const result = calculate.apply(op, [2,3,'*'])
console.log(result)

// №7.7.3

const users = [
    {name: 'Вася', age: 15},
    {name: 'Петя', age: 52},
    {name: 'Даня', age: 17},
    {name: 'Таня', age: 75}
]

const age = users.filter(users => users.age >=18)
console.log(age)

const names = users.map(users => users.name)
console.log(names)

// №7.7.4

const users = [
    {name: 'Вася', age: 15},
    {name: 'Петя', age: 52},
    {name: 'Даня', age: 17},
    {name: 'Таня', age: 75}
]

function setFullName(fullName){
    this.fullName = fullName
}
const setPersonFullName = setFullName.bind(users);

setPersonFullName('John Smith')

console.log(users)


// №7.7.5

function getNumbers(numbers){
    return numbers.sort((a,b) => a-b)
}
const numbers = [3, 1, 4, 5, 9, 2, 6]
const sortNumbers = getNumbers(numbers)
console.log(sortNumbers)