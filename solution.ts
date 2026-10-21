/**
 * @param {number} n
 * @return {string}
 */
var staircase = function (n: number): string {
    let result = '';
    for (let i = 1; i <= n; i++) {
        result += '#'.repeat(i) + '\n';
    }
    return result;
};

// console.log(staircase(6));


/**
 * @param {number[]} grades
 * @return {number[]}
 */
var gradingStudents = function (grades: number[]): number[] {
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] >= 38) {
            if (grades[i] % 5 >= 3) {
                grades[i] += 5 - (grades[i] % 5);
            }
        }
    }
    return grades;
};

/**
 * @param {string} s
 * @return {string}
 */
var timeConversion = function (s: string): string {
    if (s.slice(0, 2) === '12' && s.slice(-2) === 'AM') {
        s = '00' + s.slice(2, -2);
    }
    if (s.slice(-2) === 'PM' && s.slice(0, 2) !== '12') {
        s = (parseInt(s.slice(0, 2)) + 12).toString() + s.slice(2, -2);
    }
    if (s.slice(0, 2) === '12' && s.slice(-2) === 'PM') {
        s = s.slice(0, -2);
    }
    return s;
};


// console.log(timeConversion("07:05:45PM")); // "19:05:45"
// console.log(timeConversion("12:00:00AM")); // "00:00:00"
// console.log(timeConversion("12:00:00PM")); // "12:00:00"
// console.log(timeConversion("12:30:45PM")); // "12:30:45"

