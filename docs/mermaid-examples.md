---
sidebar_position: 4
title: Mermaid 图表示例
description: 展示 Mermaid 支持的各种图表类型及用法
mermaidTheme: default
---

# Mermaid 图表示例

[Mermaid](https://mermaid.js.org/) 是一个基于文本的图表工具，用简短的脚本即可生成流程图、时序图、类图等。

---

## 流程图 (Flowchart)

```mermaid
graph TD
    Start(开始) --> Input[输入参数]
    Input --> Cond{是否有效？}
    Cond -->|是| Process[执行逻辑]
    Cond -->|否| Error[返回错误]
    Process --> End(结束)
    Error --> End
```

## 时序图 (Sequence Diagram)

```mermaid
sequenceDiagram
    actor U as 用户
    participant F as 前端
    participant B as 后端
    participant D as 数据库

    U->>F: 点击保存
    F->>B: POST /api/save
    B->>D: INSERT INTO ...
    D-->>B: 成功
    B-->>F: 200 OK
    F-->>U: 保存成功提示
```

## 类图 (Class Diagram)

```mermaid
classDiagram
    class User {
        +String name
        +String email
        +login() bool
        +logout() void
    }
    class Admin {
        +manageUsers() void
        +viewLogs() void
    }
    class Guest {
        +browse() void
    }
    User <|-- Admin
    User <|-- Guest
```

## 状态图 (State Diagram)

```mermaid
stateDiagram-v2
    [*] --> Idle
    Idle --> Processing: 提交任务
    Processing --> Completed: 成功
    Processing --> Failed: 出错
    Completed --> [*]
    Failed --> Idle: 重试
```

## 饼图 (Pie Chart)

```mermaid
pie showData
    title 技术栈占比
    "JavaScript" : 35
    "TypeScript" : 25
    "Python" : 20
    "Go" : 10
    "Rust" : 10
```

## 甘特图 (Gantt Chart)

```mermaid
gantt
    title 项目时间线
    dateFormat  YYYY-MM-DD
    section 规划
        需求分析      :a1, 2025-01-01, 7d
        技术方案      :a2, after a1, 5d
    section 开发
        编码实现      :b1, after a2, 14d
        单元测试      :b2, after b1, 5d
    section 发布
        集成测试      :c1, after b2, 5d
        部署上线      :c2, after c1, 3d
```

## 实体关系图 (ER Diagram)

```mermaid
erDiagram
    User ||--o{ Order : places
    User {
        int id PK
        string name
        string email
    }
    Order ||--|{ OrderItem : contains
    Order {
        int id PK
        int user_id FK
        datetime created_at
    }
    OrderItem {
        int id PK
        int order_id FK
        int product_id FK
        int quantity
    }
```

## Git 分支图

```mermaid
gitGraph
    commit
    branch feature
    checkout feature
    commit
    commit
    checkout main
    merge feature
    commit
```

## 思维导图 (Mindmap)

```mermaid
mindmap
  root((Doc))
    功能
      全文搜索
      暗色模式
      源码查看
    内容
      Markdown
      MDX
      Mermaid
    部署
      静态站点
      任意托管
```

---

## 用法说明

在任意 `.md` 或 `.mdx` 文件中用围栏代码块包裹 Mermaid 脚本即可：

````markdown
```mermaid
graph TD
    A --> B
```
````

> 更多语法参考 [Mermaid 官方文档](https://mermaid.js.org/syntax/)
