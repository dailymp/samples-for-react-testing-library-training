import * as React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {
  fetchfruits,
  deleteFruit,
  addFruit,
} from './../../redux/actions/index';
import './styles.less';

import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';

import { MyInputComponent } from '../myInputComponent/myInputComponent';
export interface Props {
  nameFromProps: string;
}

export const MyComponent: React.FunctionComponent<Props> = (props) => {
  const { nameFromProps } = props;
  const dispatch = useDispatch();
  const fruitList = useSelector((state) => state.fruits.fruitList);

  return (
    <>
      <div className="container">
        <h1>Hello {nameFromProps}!</h1>
        <Button
          variant="contained"
          color="primary"
          onClick={() => dispatch(fetchfruits())}
        >
          Get some fruits!
        </Button>
        <div className="chip-container">
          {!!fruitList
            ? fruitList.map((el: string) => (
                <Chip
                  color="primary"
                  label={el}
                  key={el}
                  onDelete={() => dispatch(deleteFruit(el))}
                />
              ))
            : null}
        </div>
        <MyInputComponent
          addFruit={(newFruit) => dispatch(addFruit(newFruit))}
        />
      </div>
    </>
  );
};
