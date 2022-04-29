# redux-js-example
在原生 js 里使用 redux 的小 demo

## Getting started

```bash
npm install
npm start
```


## Redux 编写原则

1. **单一数据源**： 整个应用只能有一个 `state`, 所有公共状态需存储到该 `state` 中，而且这个 `state` 只能存储到一个 `store` 中。
2. **`State` 是只读的**：不能通过类似 `store.getState().args = 1` 直接修改 `State` 的语句来更改 `State` 的值。唯一改变 state 的方式是通过 `action` 来改变。

    此外，由于`State`是只读不可更改的，因此，`reducer` 在 `switch` 语句块中，匹配到 `action.type` 经过处理后必须返回新的 `State`。

    在 `action.type` 匹配不到 `switch` 语句中的 `case`，即 `default` 情况下，返回传入的 `state`。
3. 使用作为纯函数的 `Reducer` 来执行修改
    
    永远不要在reducer里做这些操作：

   - 修改传入参数
   - 执行有副作用的操作，如API请求和路由跳转
   - 调用非纯函数，如 `Date.now()` 或 `Math.random()`

> 简单来说，一个函数的返回结果只依赖于它的参数，并且在执行过程里面没有副作用，我们就把这个函数叫做纯函数。
