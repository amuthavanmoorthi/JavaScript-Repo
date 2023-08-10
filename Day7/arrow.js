this.name="hi"
this.age="bye"

let a=()=>{
console.log(this.name)
let b=()=>{
    console.log(this.age)
}
b()
}
a()



