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


### Number

- Is a primitive type.
- immutable.
- Use by default IEEE 754 64-bit.
- Supports Decimal, Hexadecimal and octal:
  - **Decimal:** Decimal numbering system, base 10, must start with a number from 0 to 9, followed by numbers from 0 to 9 with or without a point, indicating whether it's an integer or decimal;
  - **Hexadecimal:** Hexadecimal numbering system, base 16, must start with **0x** or **0X**, followed by numbers from 0 to 9 and of **A** to **F**;
  - **Octal:** Octal numbering system, base 8, should start with **0o** or ""0O"", followed  by numbers from **0** to **7**;
