import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppActions, RootState } from 'store';

export const HomeViewComponent: React.FC = () => {
  const dispatch = useDispatch();

  const { dataList, isLoading } = useSelector((state: RootState) => state.home);

  useEffect(() => {
    dispatch(AppActions.home.getDataList());
  }, [dispatch]);

  return <></>;
};
