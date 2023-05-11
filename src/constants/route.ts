export enum RouteName {
  Main = 'Main',
  Home = 'Home',
  CreateExpense = 'CreateExpense',
  Profile = 'Profile',
  EditExpense = 'EditExpense',
  FilterExpense = 'FilterExpense',
  Welcome = 'Welcome',
}

export type StackParamList = {
  CreateExpense: undefined;
  EditExpense: {expenseId: string};
  FilterExpense: undefined;
};
