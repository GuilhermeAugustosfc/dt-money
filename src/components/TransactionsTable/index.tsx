import { useTransaction } from "../../context/TransactionsContext";
import { Container } from "./styles";

export function TransactionsTable() {
  const { transactions } = useTransaction();
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Preco</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.length &&
            transactions.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td className={item.categorie}>
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(item.amond)}
                </td>
                <td>{item.categorieTitle}</td>
                <td>{new Intl.DateTimeFormat("pt-BR").format(item.date)}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </Container>
  );
}
