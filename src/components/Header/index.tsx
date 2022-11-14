import { FC } from 'react';
import logoImg from '../../assets/vb-money.svg';
import { Container, Content } from './styles';

interface IHeaderProps {
  onOpenNewTransactionModal: () => void;
}

export const Header: FC<IHeaderProps> = ({ onOpenNewTransactionModal }) => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt ,pney" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
};
