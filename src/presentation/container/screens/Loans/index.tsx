import Button from "presentation/components/common/Button";
import HeaderPage from "presentation/components/layout/HeaderPage";
import AddLoan from "./AddLoan";
import LoanList from "./LoanList";

type Props = {};

const Loans = (props: Props) => {
  return (
    <main>
      <h1 className="title">Gestión de préstamos</h1>
      <br />
      <HeaderPage>
        <AddLoan />
        <Button>Filtros</Button>
      </HeaderPage>
      <LoanList />
    </main>
  );
};

export default Loans;
