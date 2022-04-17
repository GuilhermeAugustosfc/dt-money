import "./App.css";
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./context/TransactionsContext";

import { GlobalStyles } from "./styles/globals";
import { useState } from "react";

function App() {
  const [newTransacitonModalIsOpen, setNewTransacitonModalIsOpen] =
    useState(false);

  function onOpenTransactionModal() {
    setNewTransacitonModalIsOpen(true);
  }

  function onCloseTransactionModal() {
    setNewTransacitonModalIsOpen(false);
  }
  return (
    <TransactionsProvider>
      <Header onOpenTransactionModal={onOpenTransactionModal} />
      <Dashboard />

      <NewTransactionModal
        onCloseTransactionModal={onCloseTransactionModal}
        newTransacitonModalIsOpen={newTransacitonModalIsOpen}
      />

      <GlobalStyles />
    </TransactionsProvider>
  );
}

export default App;
