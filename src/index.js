// 这里还是要引入 react
import React from 'react';
// react 18 之后 react-dom 分成了 client 和 server 两个包，csr 阶段的 render 使用  createRoot
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
// createRoot(container!) if you use TypeScript
const root = createRoot(container);

root.render(<App tab="home" />);
