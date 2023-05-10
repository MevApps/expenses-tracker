import Realm from 'realm';

export const SCHEMA_NAME_EXPENSE = 'Expense';

export class Expense extends Realm.Object<Expense> {
  _id!: Realm.BSON.ObjectId;
  amount!: number;
  title!: string;
  date!: Date;

  static schema = {
    name: SCHEMA_NAME_EXPENSE,
    primaryKey: '_id',
    properties: {
      _id: 'objectId',
      amount: 'float',
      title: 'string',
      date: 'date',
    },
  };

  getFormattedAmount(): number {
    return Math.round(this.amount * 100) / 100;
  }
}
