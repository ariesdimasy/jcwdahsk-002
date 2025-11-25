
function calculateStudents(students: Student[]) {
    let result = {
        age: {
            highest: students[0].age,
            lowest: students[0].age,
            average: 0
        },
        score: {
            highest: students[0].score,
            lowest: students[0].score,
            average: 0
        }
    }

    for (let i = 0; i < students.length; i++) {
        result.age.average += students[i].age
        result.score.average += students[i].score

        if (students[i].age > result.age.highest) {
            result.age.highest = students[i].age
        }
        if (students[i].age < result.age.lowest) {
            result.age.lowest = students[i].age
        }
        if (students[i].score > result.score.highest) {
            result.score.highest = students[i].score
        }
        if (students[i].score < result.score.lowest) {
            result.score.lowest = students[i].score
        }
    }

    result.age.average = Math.ceil(result.age.average / students.length)
    result.score.average = Math.ceil(result.score.average / students.length)

    return result
}

class Student {
    name: string = ""
    email: string = ""
    age: number = 0
    score: number = 0

    constructor (name: string, email: string, age: number, score: number) {
        this.name = name
        this.email = email
        this.age = age
        this.score = score
    }
}

let students = [
    new Student("Siti Kurnia", "sitikurnia@gmail.com", 15, 76),
    new Student("Hendrik", "hendrik@gmail.com", 16, 89),
    new Student("Fadil", "fadil@gmail.com", 14, 82),
    new Student("Vian", "vian@gmail.com", 15, 90)
]

console.log(calculateStudents(students))