/*
 * @LastEditors: Mark
 * @Description: TS 组建的两种方式
 * @Author: Mark
 * @Date: 2019-06-17 14:08:30
 * @LastEditTime: 2019-06-17 14:18:43
 */

// 无状态功能组件

import * as React from 'react';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

function Hello({ name, enthusiasmLevel = 1 }: Props) {
  if (enthusiasmLevel <= 0) {
    throw new Error('You could be a little more enthusiastic. :D');
  }

  return (
    <div className="hello">
      <div className="greeting">
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </div>
    </div>
  );
}

export default Hello;

// 类组件

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}
