export type TransactionCategory = 'movie' | 'coffee' | 'shop';

export interface Transaction {
  id: string;
  category: TransactionCategory;
  date: string;
  description: string;
  amount: string;
}

export const accountBalance = '1,345.00€';

export const transactions: Transaction[] = [
  {
    id: 't1',
    category: 'movie',
    date: '02- Monday',
    description: 'Spend On Fun Mall Cinema',
    amount: '23.00€',
  },
  {
    id: 't2',
    category: 'coffee',
    date: '02- Monday',
    description: 'Spend On Starbucks',
    amount: '13.00€',
  },
  {
    id: 't3',
    category: 'shop',
    date: '01- Sunday',
    description: 'Spend On Super Market',
    amount: '43.00€',
  },
  {
    id: 't4',
    category: 'shop',
    date: '01- sunday',
    description: 'Spend On Super Market',
    amount: '25.00€',
  },
];
