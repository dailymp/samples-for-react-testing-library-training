import * as BEApi from './myBackEndApiEndpoint';
import axios from 'axios';
import { Posts } from '../components/myComponent/index';

export const getListOfFruit = (): Promise<string[]> => {
  return BEApi.getFruits('http://fruityfruit.com')
    .then(resolveFruits)
    .catch(handleError);
};

const resolveFruits = (fruits: string[]) => {
  return fruits;
};

const handleError = () => {
  throw new Error('Where is my fruit???');
};
export const getPosts = (): Promise<Posts[]> => {
  return axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then(resolvePosts)
    .catch(handlePostError);
};
const resolvePosts = (posts: any) => {
  console.log('resolvePosts -> posts', posts);
  return posts.data;
};
const handlePostError = () => {
  throw new Error('Error fetching');
};
