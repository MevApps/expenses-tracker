import 'react-native-get-random-values';
import Realm from 'realm';
import {extractPriceValue} from '../utils';
import {Expense, SCHEMA_NAME_EXPENSE} from '../model';
import {createRealmContext} from '@realm/react';

export const realm = new Realm({schema: [Expense]});

export function addExpense(name: string, price: string, date: Date) {
  const priceValue = extractPriceValue(price);
  realm.write(() => {
    realm.create(SCHEMA_NAME_EXPENSE, {
      _id: new Realm.BSON.ObjectId(),
      title: name,
      amount: priceValue,
      date: date,
    });
  });
}

export function updateExpense(
  expense: Expense,
  name: string,
  price: string,
  date: Date,
) {
  const priceValue = extractPriceValue(price);
  realm.write(() => {
    expense.title = name;
    expense.amount = priceValue;
    expense.date = date;
  });
}

export function deleteAllData() {
  realm.write(() => {
    realm.deleteAll();
  });
}

const realmConfig: Realm.Configuration = {
  schema: [Expense],
};
export const {RealmProvider, useQuery, useObject} =
  createRealmContext(realmConfig);
