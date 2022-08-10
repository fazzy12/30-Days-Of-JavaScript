
const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']

const skill = JSON.stringify(skills, undefined, 4)
console.log(skill)

//
let age = 250;

const age1 = JSON.stringify(age, undefined, 4)
console.log(age1)

// 
let isMarried = true
const married = JSON.stringify(isMarried, undefined, 4)
console.log(married)

// 
const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}

const students = JSON.stringify(student, undefined, 4)
console.log(students)