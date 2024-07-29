function createStudent(이름, 국어, 영어, 수학, 과학) {
    return {
        이름 : 이름,
        국어 : 국어,
        영어 : 영어,
        수학 : 수학,
        과학 : 과학,

        getSum () {
            return this.국어 + this.영어 + this.수학 + this.과학
        },
        
        getAvg () {
            return this.getSum() / 4
        },

        toString () {
            return `${this.이름}\t${this.getSum()}점\t${this.getAvg()}점\n`
        }
    }
}

const students = []
students.push(createStudent('우리', 100,  100,  100,  100 ));
students.push(createStudent('별이', 92, 98, 96, 88));
students.push(createStudent("겨울", 76, 96, 94, 86));
students.push(createStudent("바다", 98, 52, 98, 92));

let output = "이름\t총점\t평균\n";
for (const s of students) {
  output += s.toString();
}
console.log(output);