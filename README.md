# Data type in JavaScript

- The data types in JavaScript divided into primitives and objects.
- The primitives are immutable, that is, they don't change over time.
- The  existing data types are:

| Example | Return |
| -------------------- | --------------------- |
| typeof 10 | number |
| typeof “test” | string |
| typeof true | boolean |
| typeof Symbol('iterator') | symbol |
| typeof null | object |
| typeof undefined | undefined |

- Objects are values that represent an in-memory reference that can be changed.
- typeof is diferent from instanceof.

---
### Number

- Is a primitive type.
- immutable.
- Use by default IEEE 754 64-bit.
- Supports Decimal, Hexadecimal and octal:
  - **Decimal:** Decimal numbering system, base 10, must start with a number from 0 to 9, followed by numbers from 0 to 9 with or without a point, indicating whether it's an integer or decimal;
  - **Hexadecimal:** Hexadecimal numbering system, base 16, must start with **0x** or **0X**, followed by numbers from 0 to 9 and of **A** to **F**;
  - **Octal:** Octal numbering system, base 8, should start with **0o** or ""0O"", followed  by numbers from **0** to **7**;
 - The toExponential, toFixed and toPrecision methods can be used to change the way a number is represented;
  - **toExponential:** The method returns a string representing a number in exponential notation;
  - **toFixed:** The method returns the amounts after the limiting point according to the passed parameter. In short, quantity after the point;
  - **toPrecision:** Returns number with a specified precision;
 - **Numerical operations**
  - Arithmetic operators: + (sum), - (minus), * multiplication, / (division), and % (remainder division)
  - Assigment operators: =, +=, -=, * =, /= and %=
  - Incerement and decrement operator: -- and ++:
    - If the operator has after the variable (*variable++ or variable--*), first it will show the value and then assign it one more or one less;
    - However, if the operator has before the variable (*++variable or --variable*), it will first assign one more or one less, and then show the updated value;

#### Bitwise
- Binary operators (Bitwise): |(OR), &(AND), ^(XOR), ~(NOT), <<(LEFT SHIFT), >>(RIGHT SHIFT) and >>>(UNSIGNED RIGHT SHIFT):
  - **Bitwise | (OR):** The bitwise operator OR, returns 1, in each position that the bit has 1, if it don't 1 assigns 0;
  - **Bitwise & (AND):** The bitwise operator AND, returns 1 only if both positions have the number 1, otherwise assigns 0;
  - **Bitwise ^ (XOR):** The bitwise operator XOR, returns 1 only if 1 has 1 the comparassion, if both have 0;
  - **Bitwise ~ (NOT):** The bitwise operator OR, inverts the bit value;
  - **Operator << (left shift):** Shifts for left the first operand the amount informed in the second operand, keeping in mind that maximum is 32 bits. It's padded to the right with 0, acording to the second operator;
  - **Operator >> (right shift):** Shifts for right the first operand the amount informed in the second operator, keeping in mind that maximum is 32 bits. It's padded to the left with 0, acording to the second operator;
  - **Unsigned right shift (>>>):** Seeks the representation of the first operand as a number without a negative sign, transforming to into  32-bits, after the process shifts for right. It's padded to the left with 0, acording to the second operator;
- **WARNING** no to confuse the operators **|** and **&** with **||** and **&&**.

#### Conversion number
- The simplest way to convert a number is by calling the Number constructor function. Example: *const  test = Number(0b10)*, expect value 2.
- Another way is much assigned is the converts for way of the operators numerics. Example: *const  test = +"10"*, expect value 10.
- **WARNING**, not all operators perform the data conversion. Example: *const test = 3 + "12"*, expect value "312".
- The method *toString* of the number, allows to convert  for any system of numeration, needs to indicate why is the base desired, passing as parameter 10 for decimal, 16 for hexadecimal, 2 for binary and 8 for octal.
- The *parseInt* method allows  to convert a String for a number. And is possible to convert with the bases decimal, hexadecimal, binary and octal. If not informed, the base assumes that the informed number is a decimal. As a parameter, the number is passed and, if necessary, the base the number is on.
- The parseFloat method does not allow the conversion of the bases, only numbers in the decimal type system.

#### IEEE 754
- Created in 1985 and adopted in several programming languages such as JavaScript, Ruby, Python and Java.
- In JS, its representation is divided into 64 bits, the first position being the sign of the number, the next 11 bits are the exponential and its remaining 52 bits are called a fraction.
- It is necessary to be careful for some types of operations involving numbers, because it can return something that you did not imagine.
- When some operations are performed with decimal numbers, there may be residues due to the possibility of rounding. Example: 0.1 + 0.2 = 0.30000000000000004. Site that does the calculation and shows the division of Bits IEEE 754 Calculator
- When the number exceeds the limits of the Number type, it is returned to Infinity. Both for positive or negative numbers.
- NaN (Not a Number) is returned when performing a mathematical operation, where the result is not possible to determine.

#### Math API
- It is a built-in object that has constant properties and methods and mathematical functions. It is not a function object.
- Math works with the Number type. It doesn't work with BigInt.
- Math is not a constructor, all properties and accessor methods are static.
- ## Properties:
  - E: Natural logarithm. (Euller)
  - LN10: Natural logarithm of 10
  - LN2: Natural logarithm of 2
  - LOG10E: Logarithm of E in base 10
  - LOG2E: Logarithm of E to base 2
  - IP: IP
  - SQRT1_2: Square root of 1/2
  - SQRT: Square root of 2
- #### Methods:
  - abs: Returns the positive number.
  - ceil: Rounds the number up.
  - floor: Rounds the number down.
  - round: Rounds the number up if the decimal part is from 5 to 9 and down if it is from 0 to 4.
  - sign: Returns 1 if the number is positive and -1 if it is negative, if it is 0 it returns 0 and if it is -0 it returns -0. If the number is not valid, it returns NaN.
  - trunc: Returns the integer part of the number.
  - cbrt: Returns the cube root of the number.
  - cos: Returns the cosine of an angle.
  - exp: Returns E raised to an exponent.
  - hypot: Returns the square root of the squares of numbers.
  - log: Returns the logarithm of the number in natural base.
  - pow: Returns the number raised to a given exponent.
  - sin: Returns the sine of an angle.
  - sqrt: Returns the square root of the number.
  - tan: Returns the tangent of an angle.
  - min: Returns the smallest number passed by parameter.
  - max: Returns the largest number passed by parameter.
  - random: Returns a random number between 0 and 1, not including 1.

#### String
- String is a primitive, immutable type and is represented internally by the Unicode standard, encoded in UTF-16
- There are 4 ways to declare a String:
  - single quotes: const test = 'test';
  - double quotes: const test = “test”;
  - grave accent: const test = `test`;
  - constructor function: const test = new String('test');
- CAUTION: The constructor function is slower and can degrade performance.
- Some characters need to be escaped: “, \, \n
- It is possible to write characters using their code point in the Unicode standard. Example: '\u0030' prints '0';
- ##### String API
  - length: Returns the length of the String
  - indexOf: Returns the first position found of the character passed by parameter
  - lastIndexOf: Returns the last found position of the character passed by parameter
  - toUpperCase: Returns a new String converting letters to uppercase
  - toLowerCase: Returns a new String converting letters to lowercase
  - charAt: Returns the character at the position passed by parameter
  - charCodeAt: Returns the code based on the position passed by parameter
  - fromCharCode: Returns a character based on the code passed by parameter
  - includes: Returns true if the String contains the String passed by parameter
  - startsWith: Returns true if the String starts with the String passed by parameter
  - endsWith: Returns true if the String ends with the String passed by parameter
  - localeCompare: Returns -1 if the String passed by parameter is greater, 0 if equal and 1 if less
  - match: Returns parts of the String based on the RegExp passed by parameter
  - search: Returns the first position found based on the RegExp passed by parameter
  - replace: Returns a new String resulting from replacing the String or RegExp passed in the first parameter by the second parameter
  - slice: Returns a part of the String that is invoking the function starting at the position passed in the first parameter to the final position passed in the second parameter, or from the position passed in the first parameter to the end if the second parameter is not informed
  - split: Returns an array containing the result of dividing the original String according to the criteria passed by parameter
  - substring: Similar to slice, it does not accept negative values as a parameter and allows the inversion of parameters
  - concat: Returns a new String resulting from the concatenation of the one invoking the function and the other, passed by parameter
  - padStart: Completes the String with characters at the beginning
  - padEnd: Complete the String with characters at the end
  - repeat: Repeats a character
  - trim: Trims leading and trailing whitespace
  - trimLeft: Trims leading whitespace
  - trimRight: Trims trailing whitespace

#### Boolean
- The Boolean type is primitive, immutable, and represented by the placeholder words true and false.
- Beware of type coercion. (true === new Boolean(true)), returns false.
- Type coercion happens when a data type is used in a context where it is implicitly or explicitly converted.
- #### Boolean operators
  - Comparison operators ==, ===, !=, !==, <, >, <=, and >=.
  - Be careful with the comparison operators == and !=, always prefer the use of operators === and !==.
  - Logical operators || and &&.
  - Ternary operator (expression) ? true : false.
- #### Symbol
  - The Symbol type is primitive, unique, and immutable, acting like a unique key on an object.
  - In addition, it is used in operations performed by the interpreter, such as the for/of command or String API operations such as match, split, replace and many others.

#### Regular Expressions
- Regular expressions are structures formed by a sequence of characters that specify a formal pattern that serve to validate, extract or even replace characters within a String.
- \ - The slash is used before special characters, in order to escape them.
- Starting and ending with a given character
  ^ - Starts with a given character
  $ - Ends with a given character
- Character groups
  - [abc] - Accepts any character within the group, in this case a, b, and c
  - [^abc] - Does not accept any character within the group, in this case a, b or c
  - [0-9] - Accepts any character between 0 and 9
  - [^0-9] - Does not accept any character between 0 and 9
- Quantifiers
  - Quantifiers can be applied to characters, groups, sets, or metacharacters.
  - {n} - Quantifies a specific number
  - {n,} - Quantifies a minimum number
  - {n,m} - Quantifies a minimum and maximum number
  - ? - Zero or one
  - * - Zero or more
  - + - One or more
- metacharacters
  - \w - Represents the set [a-zA-Z0-9_]
  - \W - Represents the set [^a-zA-Z0-9_]
  - \d - Represents the set [0-9]
  - \D - Represents the set [^0-9]
  - \s - Represents a whitespace
  - \S - Represents non-whitespace
  - \n - Represents a line break
  - \t - Represents a tab
- Capture Groups
  - () - Determines a capture group to extract values from a given String
- Modifiers
  - i - Case-insensitive matching
  - g - Global matching
  - m - Multiline matching
