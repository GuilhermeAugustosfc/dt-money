import { Container, TransactionTypeContaiber, RadioBox } from "./styles";
import closeSvg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import Modal from "react-modal";
import { FormEvent, useContext, useState } from "react";
import { api } from "../../services/api";
import {
  TransactionItem,
  useTransaction,
} from "../../context/TransactionsContext";
Modal.setAppElement("#root");

interface NewTransactionModalPorps {
  newTransacitonModalIsOpen: boolean;
  onCloseTransactionModal(): void;
}
export function NewTransactionModal({
  newTransacitonModalIsOpen,
  onCloseTransactionModal,
}: NewTransactionModalPorps) {
  const [type, setType] = useState<"deposit" | "withdraw">("deposit");
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [categorie, setCategorie] = useState<string>("");
  const { addNewTransaction } = useTransaction();

  function handleNewTransaction(event: FormEvent) {
    event.preventDefault();

    const data: TransactionItem = {
      id: Date.now(),
      categorie: type,
      amond: price,
      title: name,
      date: new Date(),
      categorieTitle: categorie,
    };

    addNewTransaction(data);
    onCloseTransactionModal();
  }

  return (
    <Modal
      isOpen={newTransacitonModalIsOpen}
      onRequestClose={onCloseTransactionModal}
      contentLabel="Example Modal"
      id="myModal"
      overlayClassName={"react-modal-overlay"}
      className={"react-modal-content"}
    >
      <button className="react-modal-close" onClick={onCloseTransactionModal}>
        <img src={closeSvg} alt="Close button" />
      </button>
      <Container onSubmit={handleNewTransaction}>
        <h2>Cadastrar transacoes</h2>
        <input
          placeholder="Nome"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Preco"
          type="text"
          onChange={(e) => setPrice(Number(e.target.value))}
        />
        <TransactionTypeContaiber>
          <RadioBox
            type="button"
            onClick={() => {
              setType("deposit");
            }}
            isActive={type === "deposit"}
            typeColor={"deposit"}
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => {
              setType("withdraw");
            }}
            typeColor={"withdraw"}
            isActive={type === "withdraw"}
          >
            <img src={outcomeImg} alt="Saida" />
            <span>Entrada</span>
          </RadioBox>
        </TransactionTypeContaiber>
        <div></div>
        <input
          placeholder="Categoria"
          type="text"
          onChange={(e) => setCategorie(e.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
