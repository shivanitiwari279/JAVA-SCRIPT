const name ="Shivani"

const repoCount = 8

//console.log("My name is " + name + " and my repocount is "+ repoCount );  //OUTDATED !!

// console.log(`My name is ${name} and my repocount is ${repoCount} `);  

//MODERN AND WELL STRUCTURED FORM KNOWN AS "STRING INTERPOLATION" AND ALSO HAS THE BENIFITIAL PART THAT WE CAN DO MULTIPLE THINGS 
// ON GO


const newName = new String("Vani")
console.log(newName);
console.log(newName[0]);
console.log(newName.__proto__);
console.log(newName.charAt(2));
console.log(newName.indexOf('i'));
console.log(newName.length);
console.log(newName.toUpperCase());


/*

JAVASCRIPT STRING METHODS

|  # | Method / Property     | What it does                       | Example                             |
| -: | --------------------- | ---------------------------------- | ----------------------------------- |
|  1 | `length`              | Returns string length              | `"Hello".length` → `5`              |
|  2 | `at()`                | Returns character at an index      | `"Hello".at(1)` → `"e"`             |
|  3 | `charAt()`            | Returns character at an index      | `"Hello".charAt(1)` → `"e"`         |
|  4 | `charCodeAt()`        | Returns UTF-16 code of character   | `"A".charCodeAt(0)` → `65`          |
|  5 | `codePointAt()`       | Returns Unicode code point         | `"A".codePointAt(0)` → `65`         |
|  6 | `concat()`            | Joins strings                      | `"Hello".concat(" World")`          |
|  7 | `endsWith()`          | Checks if string ends with text    | `"Hello".endsWith("lo")` → `true`   |
|  8 | `includes()`          | Checks if string contains text     | `"Hello".includes("ell")` → `true`  |
|  9 | `indexOf()`           | Finds first occurrence             | `"Hello".indexOf("l")` → `2`        |
| 10 | `lastIndexOf()`       | Finds last occurrence              | `"Hello".lastIndexOf("l")` → `3`    |
| 11 | `localeCompare()`     | Compares two strings               | `"a".localeCompare("b")`            |
| 12 | `match()`             | Finds matches using RegExp         | `"abc123".match(/\d+/)`             |
| 13 | `matchAll()`          | Finds all RegExp matches           | `"a1b2".matchAll(/\d/g)`            |
| 14 | `normalize()`         | Normalizes Unicode text            | `"é".normalize()`                   |
| 15 | `padEnd()`            | Adds characters at the end         | `"5".padEnd(3, "0")` → `"500"`      |
| 16 | `padStart()`          | Adds characters at the beginning   | `"5".padStart(3, "0")` → `"005"`    |
| 17 | `repeat()`            | Repeats a string                   | `"Hi".repeat(3)` → `"HiHiHi"`       |
| 18 | `replace()`           | Replaces first match               | `"Hi Hi".replace("Hi", "Bye")`      |
| 19 | `replaceAll()`        | Replaces all matches               | `"Hi Hi".replaceAll("Hi", "Bye")`   |
| 20 | `search()`            | Searches using RegExp              | `"abc123".search(/\d/)` → `3`       |
| 21 | `slice()`             | Extracts part of a string          | `"Hello".slice(1, 4)` → `"ell"`     |
| 22 | `split()`             | Converts string into an array      | `"a,b,c".split(",")`                |
| 23 | `startsWith()`        | Checks if string starts with text  | `"Hello".startsWith("He")` → `true` |
| 24 | `substring()`         | Extracts part of a string          | `"Hello".substring(1, 4)` → `"ell"` |
| 25 | `substr()`            | Extracts part of a string          | `"Hello".substr(1, 3)` → `"ell"`    |
| 26 | `toLowerCase()`       | Converts to lowercase              | `"HELLO".toLowerCase()`             |
| 27 | `toUpperCase()`       | Converts to uppercase              | `"hello".toUpperCase()`             |
| 28 | `toLocaleLowerCase()` | Locale-aware lowercase             | `"HELLO".toLocaleLowerCase()`       |
| 29 | `toLocaleUpperCase()` | Locale-aware uppercase             | `"hello".toLocaleUpperCase()`       |
| 30 | `toString()`          | Returns string representation      | `str.toString()`                    |
| 31 | `toWellFormed()`      | Creates well-formed Unicode string | `str.toWellFormed()`                |
| 32 | `isWellFormed()`      | Checks Unicode validity            | `str.isWellFormed()`                |
| 33 | `trim()`              | Removes whitespace from both ends  | `" Hi ".trim()`                     |
| 34 | `trimStart()`         | Removes whitespace from beginning  | `" Hi".trimStart()`                 |
| 35 | `trimEnd()`           | Removes whitespace from end        | `"Hi ".trimEnd()`                   |
| 36 | `valueOf()`           | Returns primitive string value     | `str.valueOf()`                     |

*/