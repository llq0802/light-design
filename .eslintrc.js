module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  rules: {
    'no-console': 0,
    'react-hooks/rules-of-hooks': 2, // Checks rules of Hooks 函数组件名必须大写
    'no-var': 2, // 禁用var，用let和const代替
    'no-plusplus': 0, // 可以使用++，--
    'spaced-comment': [2, 'never'], // 允许注释//没有空格
    'no-nested-ternary': 0, // 允许多元表达式
    'no-else-return': 2, // 如果if语句里面有return,后面不能跟else语句
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': 0,
    eqeqeq: [2, 'allow-null'], // 使用 === 替代 == allow-null允许null和undefined==
    semi: [2, 'always'], // 语句强制分号结尾
    'consistent-return': 0, // 禁止函数必须有return,禁止要求return语句始终或从不指定值。
    'react/no-array-index-key': 0, // 可以使用index作为key, 但是只能是展示列表的时候使用
    '@typescript-eslint/consistent-type-imports': 2, // type类型引入
    // indent: ['error', 2, { ignoredNodes: ['ConditionalExpression'] }], // 缩进风格
  },
};
