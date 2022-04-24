import React from 'react';

export async function getComponent(list) {
  // 动态引入 lodash
  const { default: _ } = await import('lodash');

  if (_.isEmpty(list)) {
    return <li>暂时没有数据</li>;
  }

  return list.map((item) => <li>{item.name}</li>);
}
