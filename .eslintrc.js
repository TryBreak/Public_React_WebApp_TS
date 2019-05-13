/*
 * @LastEditors: Mark
 * @Description: none
 * @Author: Mark
 * @Date: 2019-05-13 23:00:50
 * @LastEditTime: 2019-05-13 23:06:30
 */

module.exports = {
	'env': {
		'browser': true,
		'es6': true
	},
	'extends': ["react"],
	'globals': {
		'Atomics': 'readonly',
		'SharedArrayBuffer': 'readonly'
	},
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true
		},
		'ecmaVersion': 2018,
		'sourceType': 'module'
	},
	'plugins': [
		'react'
	],
	'rules': {
		//必须使用\n换行
		'linebreak-style': ['error', 'unix'],
		//使用单引号
		quotes: ['error', 'single'],
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
	}
};

// 详细规则说明请查看 http://eslint.cn/docs/rules/
