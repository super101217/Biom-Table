import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  LoadingComponent,
  PagainationComponent,
  SelectboxComponent,
  TableComponent,
} from 'components';
import { Logo, TopBar } from './styled';

import { Rows } from 'types';
import { LINEAGELIST } from 'consts';
import { AppActions, RootState } from 'store';

import logo from 'assets/images/Idego-Group.svg';

export const HomeViewComponent: React.FC = () => {
  const dispatch = useDispatch();

  const [level, setLevel] = useState<number>(0);
  const [rows, setRows] = useState<Rows[]>([]);
  const [curPage, setCurPage] = useState<number>(0);

  const { dataList, isLoading } = useSelector((state: RootState) => state.home);

  useEffect(() => {
    dispatch(AppActions.home.getDataList());
  }, [dispatch]);

  useEffect(() => {
    if (Object.keys(dataList).length > 0) setRows(dataList.rows.slice(0, 10));
  }, [dataList]);

  const onLineageSelect = (value: number) => {
    setLevel(value);
  };

  const onSetPage = (page: number) => {
    setRows(dataList.rows.slice((page - 1) * 10, (page - 1) * 10 + 10));
    setCurPage(page - 1);
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
      {dataList.rows && dataList.rows.length > 0 && (
        <>
          {isLoading ? (
            <LoadingComponent />
          ) : (
            <>
              <TableComponent
                list={rows}
                level={level}
                data={dataList.data}
                curPage={curPage}
              />
              <PagainationComponent
                totalPage={dataList.rows.length}
                setPage={onSetPage}
              />
            </>
          )}
        </>
      )}
    </>
  );
};
