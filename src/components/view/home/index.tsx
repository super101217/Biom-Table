import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SelectboxComponent } from 'components';
import { Logo, TopBar } from './styled';

import { LINEAGELIST } from 'consts';
import { AppActions, RootState } from 'store';

import logo from 'assets/images/Idego-Group.svg';

export const HomeViewComponent: React.FC = () => {
  const dispatch = useDispatch();

  const [level, setLevel] = useState<number>(0);

  const { dataList, isLoading } = useSelector((state: RootState) => state.home);

  useEffect(() => {
    dispatch(AppActions.home.getDataList());
  }, [dispatch]);

  const onLineageSelect = (value: number) => {
    setLevel(value);
  };

  return (
    <>
      <TopBar>
        <Logo>
          <img src={logo} alt="idego" width="100px" />
        </Logo>
        <SelectboxComponent
          list={LINEAGELIST}
          level={level}
          label="Lineage"
          onChangeFn={onLineageSelect}
        />
      </TopBar>
    </>
  );
};
