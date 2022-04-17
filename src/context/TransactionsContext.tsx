import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../services/api";

interface TransactionsProviderProps {
  children: ReactNode;
}

export interface TransactionItem {
  id: number;
  categorie: "deposit" | "withdraw";
  amond: number;
  title: string;
  date: Date;
  categorieTitle: string;
}

interface TransactionContextProps {
  transactions: TransactionItem[];
  addNewTransaction(newTransactions: TransactionItem): void;
}

const TransactionsContext = createContext<TransactionContextProps>(
  {} as TransactionContextProps
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionItem[]>(
    [] as TransactionItem[]
  );

  const getTransaction = () => {
    api.get("transactions").then((response) => {
      setTransactions(response.data.transactions);
    });
  };

  const addNewTransaction = (newTransaction: TransactionItem) => {
    if (!newTransaction) return;
    setTransactions((state: TransactionItem[]) => [...state, newTransaction]);
  };

  useEffect(() => {
    getTransaction();
  }, []);

  return (
    <TransactionsContext.Provider value={{ transactions, addNewTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}

export const useTransaction = () => {
  const context = useContext(TransactionsContext);

  return context;
};
