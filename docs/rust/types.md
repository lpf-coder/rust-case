---
deep: true
---

# 基本数据类型

## 标量类型

### 整数类型

> 有符号整数
- i8
- i16
- i32
- i64
- i128
- isize: 和平台一致

> 无符号整数
- u8
- u16
- u32
- u64
- u128
- usize: 和平台一致

### 浮点数类型

- f32: 单精度
- f64: 双精度

### 布尔类型

- bool: true/false

### 字符类型

> char: Unicode码点
- 需要使用单引号声明
- 每个字符占用四个字节

## 复合类型

### 元组

> tuple: 多种数据类型的集合
- 元组长度固定
- 可以使用解构拆成多个部分
- 可以使用 .语法 用索引来访问
- (): 空元组也叫单元元组

```rust
let tup = (4, 2.3, '1')
let (x, y, z) = tup;

println!(tup.0)
```

### 数组

> array: 相同数据类型元素的集合
- 数组长度固定
- 每个元素类型必须相同
- 使用[]语法 通过索引访问

```rust
let a = [1, 2, 3, 4, 5];
let b: [i32;5] = [1, 2, 3, 4, 5];

println!(a[0])
```

创建相同值的数组简写形式
```rust
let a = [3; 5];
// 等同于
let a = [3, 3, 3, 3, 3]
// 等同于
let a: [i32; 5] = [3, 3, 3, 3, 3]
```

### 结构体