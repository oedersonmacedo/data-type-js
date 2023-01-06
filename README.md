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
  - ****

- **WARNING** no to confuse the operators **|** and **&** with **||** and **&&**.
