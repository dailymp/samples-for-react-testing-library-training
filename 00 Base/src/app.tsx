import * as React from 'react';
import { MyComponent } from './components/myComponent';
import './styles.less';

export const App: React.FunctionComponent = (props) => (
  <div>
    <MyComponent nameFromProps="Fruit User" />
  </div>
);
