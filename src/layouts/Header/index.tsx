import React from 'react';
import { PATH } from 'consts';
import { Header, LogoLink } from './styled';

export const HeaderSection: React.FC = () => {
  return (
    <Header>
      <LogoLink to={PATH.HOME}>Idego</LogoLink>
    </Header>
  );
};
