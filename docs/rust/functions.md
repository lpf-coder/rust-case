---
deep: true
---

# 函数

```rust
fn function_name(){
    println!("hello function")
}
```

## 参数

> 参数是一种特殊的变量

```rust
fn test(num: i32){
    println!("传入的参数 num 为 {num}")
}
```

## 语句和表达式

> 函数体由一系列的语句和一个可选的结尾表达式构成

### 语句

> 是执行一些操作但不返回值的指令

- 创建变量并绑定一个值
- 函数定义

### 表达式

> 计算并返回值

- 函数调用
- 宏调用是一个表达式 
- 用大括号创建的一个新的块作用域

### 具有返回值的函数

```rust
fn print_num()
```