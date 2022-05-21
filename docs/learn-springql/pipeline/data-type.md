---
sidebar_position: 10
---

# Data type

SpringQL currently supports the following data types.

## Number

### Integer

#### 2-byte signed

| Language | Type name |
| -------- | --------- |
| SQL      | SMALLINT   |
| Rust     | i16       |
| C        | short       |

#### 4-byte signed

| Language | Type name |
| -------- | --------- |
| SQL      | INTEGER   |
| Rust     | i32       |
| C        | int       |

#### 8-byte signed

| Language | Type name |
| -------- | --------- |
| SQL      | BIGINT    |
| Rust     | i64       |
| C        | long      |

### Floating point number

#### 4-byte signed

| Language | Type name |
| -------- | --------- |
| SQL      | FLOAT     |
| Rust     | f32       |
| C        | float     |

## Boolean

| Language | Type name |
| -------- | --------- |
| SQL      | BOOLEAN   |
| Rust     | bool      |
| C        | bool      |

## String

### UTF-8 with length (not NULL-terminated)

| Language | Type name               |
| -------- | ----------------------- |
| SQL      | TEXT                    |
| Rust     | String                  |
| C        | `char *` , int (length) |

## Binary

Not supported yet.
