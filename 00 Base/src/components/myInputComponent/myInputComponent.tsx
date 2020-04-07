import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import { Add } from '@material-ui/icons';
import './styles.scss';

export interface Props {
  addFruit: Function;
}

export const MyInputComponent: React.FunctionComponent<Props> = (props) => {
  const { addFruit } = props;
  const [name, setName] = React.useState('');

  return (
    <div className="input-component">
      <TextField
        label="Add fruit"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {!!name ? (
        <Add
          onClick={() => {
            addFruit(name);
            setName('');
          }}
        />
      ) : null}
    </div>
  );
};
