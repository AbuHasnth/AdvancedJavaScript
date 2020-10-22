const student = [
    { name: "manna", id: 39},
    { name : "omor", id : 39},
    { name : "omor", id : 9},
    { name : "omor", id : 3},
]

// console.log(student)
const output = [];

    for ( let i = 0; i< student.length; i++){
        const Element= student[i].name;
        output .push(Element);
        
        
    }
    console.log(output)

    const result = student.map ( x => x.name);
    console.log(result)

    const bigger = student.filter( x => x.id > 3);
    console.log(bigger)

    const bigger1 = student.filter( x => x.name.id>3);
    console.log(bigger1)


