---
title: The TC39 Process
date: 2019-12-23
---

https://tc39.es/process-document/

https://www.jianshu.com/p/b0877d1fc2a4

## TC39

TC39（Technical Committee 39）是一个推动JavaScript发展的委员会。它的成员由各个主流浏览器厂商的代表构成。会议的每一项决议必须大部分人赞同，并且没有人强烈反对才可以通过。因为，对成员来说，同意就意味着有责任去实现它。

## Stage

每一项新特性，要最终纳入ECMAScript规范中，TC39拟定了一个处理过程，称为TC39 process。
其中共包含5个阶段，Stage 0 ~ Stage 4。

### Stage 0: Strawperson

一种推进ECMAScript发展的自由形式，任何TC39成员，或者注册为TC39贡献者的会员，都可以提交。

### Stage 1: Proposal

该阶段产生一个正式的提案。

1. 确定一个带头人来负责该提案，带头人或者联合带头人必须是TC39的成员。
2. 描述清楚要解决的问题，解决方案中必须包含例子，API以及关于相关的语义和算法。
3. 潜在问题也应该指出来，例如与其他特性的关系，实现它所面临的挑战。
4. polyfill和demo也是必要的。

### Stage 2: Draft

草案是规范的第一个版本，与最终标准中包含的特性不会有太大差别。

草案之后，原则上只接受增量修改。

1. 草案中包含新增特性语法和语义的，尽可能的完善的形式说明，允许包含一些待办事项或者占位符。
2. 必须包含2个实验性的具体实现，其中一个可以是用转译器实现的，例如Babel。

### Stage 3: Candidate

候选阶段，获得具体实现和用户的反馈。

此后，只有在实现和使用过程中出现了重大问题才会修改。

1. 规范文档必须是完整的，评审人和ECMAScript的编辑要在规范上签字。
2. 至少要有两个符合规范的具体实现。

### Stage 4: Finished

已经准备就绪，该特性会出现在年度发布的规范之中。

1. 通过Test 262的验收测试。
2. 有2个通过测试的实现，以获取使用过程中的重要实践经验。
3. ECMAScript的编辑必须规范上的签字。
