/*
 * @LastEditors: Mark
 * @Description: none
 * @Author: Mark
 * @Date: 2019-05-13 22:13:39
 * @LastEditTime: 2019-05-13 22:19:55
 */
module.exports = {
	"env": {
		"browser": true,
		"es6": true
	},
	extends: ['react-app', 'plugin:prettier/recommended'],
	"globals": {
		"Atomics": "readonly",
		"SharedArrayBuffer": "readonly"
	},
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		},
		"ecmaVersion": 2018,
		"sourceType": "module"
	},
	"plugins": [
		"react", 'prettier'
	],
	"rules": {
		'react/jsx-filename-extension': [
			1,
			{ extensions: ['.js', '.jsx', '.tsx'] },
		],
		'prettier/prettier': 'error',
		//必须使用\n换行
		'linebreak-style': ['error', 'unix'],
		//使用单引号
		quotes: ['error', 'single'],
		//必须使用括号包裹箭头函数的参数
		// 'arrow-parens': ['error', 'always'],
		//强制 generator 函数
		'generator-star-spacing': ['error', { before: false, after: true }],
		'no-debugger': 'error',
		//函数空格的问题
		// 'space-before-function-paren': 'error',
		//分号
		semi: ['error', 'always'],
		// 'semi-spacing': ['error', { before: true, after: true }],
		'semi-style': ['error', 'last'],
		//console
		'no-console': [
			'warn',
			{
				allow: [
					'warn',
					'error',
					'info',
					'group',
					'groupCollapsed',
					'groupEnd',
					'table',
				],
			},
		],
		//禁用常量表达式
		'no-constant-condition': 'error',
		//禁止出现重复的键
		'no-dupe-keys': 'error',
		//禁止导入重复模块
		'no-duplicate-imports': 'error',
		//jsx中使用单引号
		'jsx-quotes': ['error', 'prefer-double'],
		//构造函数首字母大写
		// 'new-cap': ['error', { newIsCap: true }],
		//括号内空格
		// 'space-in-parens': ['error', 'always'],
		//对象属性排序
		// 'sort-keys': 'error',
		//禁止使用嵌套的三元表达式
		'no-nested-ternary': 'error',
		//禁止混合缩进
		'no-mixed-spaces-and-tabs': 'error',
		//调用构造函数必须带括号
		'new-parens': 'error',
		//多行注释风格
		// 'multiline-comment-style': ['error', 'starred-block'],
		//this别名
		'consistent-this': ['error', '_this'],
		//大括号风格
		'brace-style': 'error',
		//拖尾逗号
		'comma-dangle': ['error', 'always-multiline'],
		//正则表达式必须被括起来
		'wrap-regex': 'error',
		//不要省地方
		'arrow-spacing': 'error',
		//标记无效或缺失的 super() 调用
		'constructor-super': 'error',
		//操作符和箭头函数混用
		'no-confusing-arrow': 'error',
		//九年制调用 super() 之前使用 this 或 super
		'no-this-before-super': 'error',
		//不要玩花
		'no-useless-computed-key': 'error',
		//避免新手问题
		'no-new-symbol': 'error',
		//不要使用var
		'no-var': 'error',
		//简写
		'object-shorthand': 'error',
		//必须要有 yield
		'require-yield': 'error',
		//不要省地方
		'rest-spread-spacing': ['error', 'never'],
		//不要省括号
		curly: 'error',
		//switch
		'default-case': 'error',
		//点点和操作符
		'dot-location': ['error', 'property'],
		//属性调用
		// 'dot-notation': ['error', { allowKeywords: false }],
		//恒等号
		eqeqeq: ['error', 'always'],
		//for-in 中必须判断
		'guard-for-in': 'error',
		//alert
		// 'no-alert': 'error',
		'no-caller': 'error',
		//switch 词法声明
		'no-case-declarations': 'error',
		//消除正则则表达式歧义
		'no-div-regex': 'error',
		//结构不能为空
		'no-empty-pattern': 'error',
		//禁止 null 比较
		'no-eq-null': 'error',
		//禁止 eval
		'no-eval': 'error',
		//禁止扩展原生类型
		'no-extend-native': 'error',
		//禁止不必要的标签
		'no-extra-label': 'error',
		//switch
		'no-fallthrough': 'error',
		//金庸浮点小数
		'no-floating-decimal': 'error',
		//禁止改变原生对象的值
		'no-global-assign': 'error',
		//禁止使用短符号进行类型转换
		'no-implicit-coercion': 'error',
		//禁止在全局范围使用变量和函数声明
		'no-implicit-globals': 'error',
		//禁止 this 关键字在类或类对象之外出现
		// 'no-invalid-this': 'error',
		//禁用迭代器
		'no-iterator': 'error',
		'no-labels': 'error',
		'no-lone-blocks': 'error',
		'no-loop-func': 'error',
		//魔术数字
		// 'no-magic-numbers': 'error',
		//多空格问题
		'no-multi-spaces': 'error',
		//多行字符串
		'no-multi-str': 'error',
		'no-new': 'error',
		//禁用Function构造函数
		'no-new-func': 'error',
		//禁止原始包装实例
		'no-new-wrappers': 'error',
		//禁用八进制字面量
		'no-octal': 'error',
		//禁止对函数参数再赋值
		'no-param-reassign': 'error',
		//禁用__proto__
		'no-proto': 'error',
		//禁止多次声明同一个变量
		'no-redeclare': 'error',
		//return禁止赋值
		'no-return-assign': ['error', 'always'],
		//禁止return await
		'no-return-await': 'error',
		'no-script-url': 'error',
		'no-self-assign': 'error',
		'no-self-compare': 'error',
		'no-sequences': 'error',
		//禁止未使用过的表达式
		'no-unused-expressions': 'error',
		'no-useless-concat': 'error',
		//void
		'no-void': 'error',
		//禁用 with 语句
		'no-with': 'error',
		//要求使用 Error 对象作为 Promise 拒绝的原因
		'prefer-promise-reject-errors': 'error',
		//要求必须有基数 parseInt
		radix: 'error',
		//禁止使用不带 await 表达式的 async 函数
		'require-await': 'error',
		//var 必须在作用域顶部
		'vars-on-top': 'error',
		//需要把立即执行的函数包裹起来
		'wrap-iife': ['error', 'outside'],
		// if Yoda 条件
		yoda: 'error',
		//禁止删除变量
		'no-delete-var': 'error',
		'no-shadow-restricted-names': 'error',
		'no-undef': 'error',
		'no-undefined': 'error',
		'no-unused-vars': 'warn',
		'no-use-before-define': 'error',
	}
};

// 详细规则说明请查看 http://eslint.cn/docs/rules/
