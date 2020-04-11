import {
  useSelector as originalUseSelector,
  useDispatch as originalUseDispatch,
} from 'react-redux';
import { Dispatch } from 'redux';

import { ContactActionTypes,  Contact as ContactType, } from '../store/contact/types';
import { RootState } from '../store/contact/index';

export const useSelector = (state) => originalUseSelector((state: RootState) => state.contactReducer);
export const useDispatch = () =>
  originalUseDispatch<Dispatch<ContactActionTypes>>();
