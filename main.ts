// TYPESCRIPT 1st Lesson
// number
// string
// boolean
// null
// undefined
// object
// symbol
// bigint

let isLoading : boolean = false
isLoading = true
// isLoading = 45 // Type 'number' is not assignable to type 'boolean'.

let isNumber : number = 45
// isNumber = "Hello" // Type 'string' is not assignable to type 'number'.

let isString : string = "Hello"
let isNull : null = null
let isUndefined : undefined = undefined


let something : any = 5
something = false
something = "Hello"

let isArray: any[] = [45,65,65, "45", "87", true]
let isArray1: Array<number> = [45,65,65, "45", "87", true]
// Type 'string' is not assignable to type 'number'.
// Type 'boolean' is not assignable to type 'number'.

// несколько типов данных в массиве
// в первом случае строго важна последовательность
// а в другом просто определяем типы которые можно добавлять в массив

let isArray2: [number, number,number, string,string, boolean] = [45,65,65, "45", "87", true]
let isArray3: Array<number | string> = [45,65,65, "45", "87"]


// let isObject : object = 4 // Type 'number' is not assignable to type 'object'.
let isObject : object = {} // хреновый вариант

