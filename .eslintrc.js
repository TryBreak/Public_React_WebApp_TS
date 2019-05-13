/*
 * @LastEditors: Mark
 * @Description: none
 * @Author: Mark
 * @Date: 2019-05-13 23:00:50
 * @LastEditTime: 2019-05-13 23:43:22
 */

module.exports = {
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
