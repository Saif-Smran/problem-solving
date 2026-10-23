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

/**
 * @param {number} n
 * @param {string} s
 * @return {string}
 */
var repeatStr = function(n: number, s: string): string {
    return s.repeat(n);
};

// console.log(repeatStr(5, "Hello")); // "HelloHelloHelloHelloHello"

/**
 * @param {string} str
 * @return {string}
 */
var solution = function(str: string): string {
    return str.split('').reverse().join('');
};

// console.log(solution("world")); // "dlrow"

/**
 * @param {number[]} arr
 * @return {number}
 */
var positiveSum = function(arr: number[]): number {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i];
        }
    }
    return sum;
};

// console.log(positiveSum([1, -4, 7, 12])); // 20

/**
 * @param {number} num
 * @return {number}
 */
var summation = function(num: number): number {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
};

// console.log(summation(8)); // 36

/**
 * @param {boolean} b
 * @return {string}
 */
var booleanToString = function(b: boolean): string {
    return b.toString();
};

// console.log(booleanToString(true)); // "true"
// console.log(booleanToString(false)); // "false"

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n: number): string[] {
    const result: string[] = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("FizzBuzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
        } else if (i % 5 === 0) {
            result.push("Buzz");
        } else {
            result.push(i.toString());
        }
    }
    return result;
};

// console.log(fizzBuzz(15)); // ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums: number[]): number[] {
    const result: number[] = [];
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        result.push(sum);
    }
    return result;
};

// console.log(runningSum([1, 2, 3, 4])); // [1, 3, 6, 10]

/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts: number[][]): number {
    let maxWealth = 0;
    for (let i = 0; i < accounts.length; i++) {
        let currentWealth = 0;
        for (let j = 0; j < accounts[i].length; j++) {
            currentWealth += accounts[i][j];
        }
        if (currentWealth > maxWealth) {
            maxWealth = currentWealth;
        }
    }
    return maxWealth;
};

// console.log(maximumWealth( [[1, 5], [7, 3], [3, 5]]))

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums: number[]) : number {
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            nums.splice(i, 1);
            i--;
        }
    }
    return nums.length;
};

// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); // 5

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums: number[]) : boolean {
    const seen = new Set<number>();
    for (const num of nums) {
        if (seen.has(num)) {
            return true;
        }
        seen.add(num);
    }
    return false;
};


// console.log(containsDuplicate([1, 2, 3, 4])); // false
// console.log(containsDuplicate([1, 2, 3, 1])); // true

/**
 * @param {number[]} nums
 * @return {void}
 */
var moveZeroes = function(nums: number[]): void {
    let left = 0;
    let right = 0;
    while (right < nums.length) {
        if (nums[right] !== 0) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++;
        }
        right++;
    }
};

// const arr = [0, 1, 0, 3, 12];
// moveZeroes(arr);
// console.log(arr); // [1, 3, 12, 0, 0]


