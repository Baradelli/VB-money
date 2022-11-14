import { Container } from './styles';
import { SUmmary } from '../Summary';
import { TransactionsTable } from '../TransactionsTable';

export const DashBord = () => {
  return (
    <Container>
      <SUmmary />
      <TransactionsTable />
    </Container>
  );
};
