import * as React from 'react';

import {useSelector, useDispatch} from 'react-redux'
import {fetchfruits} from './../redux/actions/fruitsActions'

export interface Props {
  nameFromProps: string;
}

export const MyComponent: React.FunctionComponent<Props> = props => {
  const { nameFromProps } = props;
  const dispatch = useDispatch()
  
  return (
    <>
      <h1>Hello {nameFromProps}!</h1>
      <button onClick={()=>dispatch(fetchfruits())}>Get some fruits!</button>
    </>
  );
};