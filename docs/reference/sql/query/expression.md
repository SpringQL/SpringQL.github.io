---
sidebar_position: 100
---

# Expression

Expressions appear anywhere in SELECT statements, such as select_list, where clause, or group-by clause.

A expression is one of the following subsections.

## Constant

### Null constant

```text title="Null constant literal"
NULL
```

### Numeric constant

Currently, the following numeric literals are supported.

```text title="Integer constant literal"
[0-9]+
```

```text title="Float constant literal"
[0-9]+\.[0-9]+
```

Both are evaluated as minimal-sized signed value.
For example, `1` is evaluated as `SMALLINT`, and `4294967296` (2^32) is evaluated as `INTEGER`.

### String constant

A string constant UTF-8 string wrapped by `'` (single quote). It is evaluated into a TEXT type.

```text title="String constant literal examples"
'abc'
'abc  def'
'あいうえお'
'🍣'
```

### Boolean constant

`TRUE` or `FALSE`.

### Duration constant

Constructed from a function call prefixed `DURATION_`.

## Column reference

A column in a stream can be referenced as follows:

```text title="Column reference"
<stream name>.<column name>
```

Note that, currently, you cannot omit the stream name.

## Operator invocation

An operator takes one (unary operator) or two (binary operator) operands.

A operand is also an expression.

```text title="Unary operator"
<unary operator> <expression>
```

```text title="Binary operator"
<expression> <binary operator> <expression>
```

- Unary operators:
  - `-`: Make the expression negative.
- Binary operators:
  - `=`: Check if two expressions are equal.
  - `+`: Add two expressions.
  - `*`: Multiply two expressions.
  - `AND`: Check if two expressions are both true.

## Function call

A function call is composed of a function name and arguments.

```text title="Function call"
<function name> (<arg1>, <arg2>, ...)
```

A function is evaluated in the row-by-row basis, unlike aggregate expressions.

Currently, these functions are available.

- `DURATION_MILLIS(<integer>)`: Construct a `DURATION` type value from a integer number (milliseconds).
- `DURATION_SECS(<integer>)`: Construct a `DURATION` type value from a integer number (seconds).
- `FLOOR(<float>)`: Return the integer part of a float number.
- `FLOOR_TIME(<timestamp>, <resolution (duration type)>)`: Return the timestamp rounded down to the nearest resolution.

## Aggregate expression

An aggregate expression is composed of an aggregate function name and arguments.

```text title="Aggregate expression"
<aggregate function name> (<arg1>, <arg2>, ...)
```

Aggregate expressions are called with window clauses.
The final result of an aggregate expression is output when a window pane is closed.

Currently, these aggregate functions are available.

- `AVG(<number>)`: Average of a number. Result is a float number.
