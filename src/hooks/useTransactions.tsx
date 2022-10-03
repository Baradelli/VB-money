import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { api } from '../services/api';

interface ITransaction {
  id: number;
  title: string;
  type: string;
  category: string;
  amount: number;
  createdAt: string;
}

type TransactionInput = Omit<ITransaction, 'id' | 'createdAt'>;

// type TransactionInput = Pick<ITransaction, 'amount' | 'category' | 'title' | 'type'>

interface ITransactionProviderProps {
  children: ReactNode;
}

interface ITransactionContextData {
  transactions: ITransaction[];
  createTransaction: (transactionInput: TransactionInput) => Promise<void>;
}

const TransactionsContext = createContext<ITransactionContextData>(
  {} as ITransactionContextData,
);

export const TransactionProvider = ({
  children,
}: ITransactionProviderProps) => {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  useEffect(() => {
    api
      .get('transactions')
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  const createTransaction = async (transactionInput: TransactionInput) => {
    const response = await api.post('/transactions', {
      ...transactionInput,
      createdAt: new Date(),
    });

    const { transaction } = response.data;

    setTransactions([...transactions, transaction]);
  };

  const values = {
    transactions,
    createTransaction,
  };

  return (
    <TransactionsContext.Provider value={values}>
      {children}
    </TransactionsContext.Provider>
  );
};

export const useTransactions = () => {
  const context = useContext(TransactionsContext);

  return context;
};
