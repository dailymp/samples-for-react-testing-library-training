import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import { Add } from '@material-ui/icons';
import './styles.less';

export interface Props {
  addPost: Function;
}

export const MyInputComponent: React.FunctionComponent<Props> = (props) => {
  const { addPost } = props;
  const [name, setName] = React.useState('');

  return (
    <div className="input-component">
      <TextField
        label="Add post"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {!!name ? (
        <Add
          onClick={() => {
            addPost(name);
            setName('');
          }}
        />
      ) : null}
    </div>
  );
};
