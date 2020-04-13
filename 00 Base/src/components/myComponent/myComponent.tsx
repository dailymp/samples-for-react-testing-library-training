import * as React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {
  /*   fetchfruits,
  deleteFruit,
  addFruit, */
  fetchPosts,
  deletePost,
  addPost,
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
  const posts = useSelector((state) => state.posts.posts);

  return (
    <>
      <div className="container">
        <h1>Hello {nameFromProps}!</h1>
        <Button
          variant="contained"
          color="primary"
          onClick={() => dispatch(fetchPosts())}
        >
          Get post from API
        </Button>
        <div className="chip-container">
          {!!posts
            ? posts.map((el /* : Object */) => (
                <Chip
                  color="primary"
                  label={el.title}
                  key={el.id}
                  onDelete={() => dispatch(deletePost(el.id))}
                />
              ))
            : null}
        </div>
        <MyInputComponent addPost={(newPost) => dispatch(addPost(newPost))} />
      </div>
    </>
  );
};
