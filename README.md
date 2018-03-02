Four-function calculator.

•	jQuery, CSS, and HTML
•	Regular Expressions ensure integrity of calculator.
•	User input creates a string, which the application evaluates when the user clicks the equals button.

• Logic highlights:
  -User cannot input 2 decimals before an operator ('8.2.1+' not allowed). Regular Expressions used here.
  -User cannot input an operator or decimal after a decimal ('8.+'  and '8..' not allowed).
  -User cannot enter 2 operators in a row ('8+-' not allowed).
  -User cannot begin an equation with 'plus', 'divided by', or 'times.' Decimal and minus are ok. ('+8' not allowed '-8' is allowed).
  
• Ways to improve:
  -Check that all entered numbers are valid. Currently, the user cannot enter 2 decimals before an operator ('8.2.1+') but they can enter 2 decimals AFTER an operator ('8.2 + 3.2.5' still allowed).

