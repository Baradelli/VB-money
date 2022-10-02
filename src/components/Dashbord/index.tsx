import { FC } from 'react';
import { Container } from './styles';
import { SUmmary } from '../Summary';
import { TransactionsTable } from '../TransactionsTable';

interface IProps {}

export const DashBord: FC<IProps> = ({}) => {
  return (
    <Container>
      <SUmmary />
      <TransactionsTable />
    </Container>
  );
};
