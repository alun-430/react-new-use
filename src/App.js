import React from 'react';
import { getComponent } from './getComponent';
// 不是动态引入
// import { isEmpty } from 'lodash';

const App = ({ data }) => {
  let content = null;

  if (typeof data === 'undefined') {
    getComponent().then((res) => {
      console.log('res: ', res);
    });
  }

  return <div>显示的主要内容 {content}</div>;
};

export default App;
