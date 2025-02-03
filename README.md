## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Changing to Client Component

如果父亲是 Client Component (CC)，其子都是 CC（表面上看是 SC）
best:在一个树结构中，只有叶子是 CC

所以不能将 CC 中引入 SC
但是 SC 可以作为 children prop 给到 CC
