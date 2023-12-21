import React from 'react';
import { WithLayout } from 'layouts';

import { HomeViewComponent } from 'components';

const Home: React.FC = () => {
  return <HomeViewComponent />;
};

export const HomePage = WithLayout(Home);
