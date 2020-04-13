import * as BEApi from './myBackEndApiEndpoint';
import axios from 'axios';

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
export const getPosts = (): any => {
  return axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then(resolvePosts);
};
const resolvePosts = (posts: any) => {
  return posts;
};
