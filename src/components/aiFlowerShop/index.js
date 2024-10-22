import React, { useEffect } from 'react';
import styleG from '@/global.less';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'dva';
import { Col, Row, Tabs, Space } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import CreateForm from './CreateForm';
import UpdateForm from './UpdateForm';
import RemoveForm from './RemoveForm';
import SearchForm from './SearchForm';
import DisableForm from './DisableForm';
import EnableForm from './EnableForm';
import List from './List';
import style from './aiFlowerShop.less';

import {API, NAME_SPACE, LOADING_NAME , CREATE_LOADING_NAME} from './const';

/** <花店表> **/
const AiFlowerShopManagement = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch && dispatch({
      type: `${NAME_SPACE}/list`,
      payload: {},
    });
    return () => dispatch && dispatch({ type: `${NAME_SPACE}/unload` });
  }, []);

  return <PageContainer header={{title: ''}} >
    <div className={styleG.layoutCont}>
      <SearchForm />
      <div className={classNames(styleG.bgCont, styleG.mT16)}>
        <List canCancelSelect />
      </div>
    </div>
    <CreateForm />
    <UpdateForm />
    <RemoveForm />
    <DisableForm />
    <EnableForm />
  </PageContainer>
};

export default AiFlowerShopManagement;

