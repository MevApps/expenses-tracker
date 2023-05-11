import {getAmountFilter, getDateFilter, getTitleFilter} from '../../storage';

export const getTitle = async () => {
  return (await getTitleFilter()) ?? '';
};
export const getAmount = async () => {
  return (await getAmountFilter()) ?? '';
};
export const getDate = async () => {
  return await getDateFilter();
};
