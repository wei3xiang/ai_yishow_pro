import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'dva';
import { Modal, Form, Drawer, InputNumber, Space } from 'antd';
import {Button, Input, Switch} from '@/components/Wrapper';
import { StandardSelect } from '@/standard/StandardReactUtils';
import SystemStandard from '@/standard/SystemStandard';
import PlatformStandard from '@/standard/PlatformStandard';
import { layout, rules } from './const';
import {API, LOADING_NAME, NAME_SPACE} from './const';
import style from './aiOrder.less';

const EnableForm = () => {
  const dispatch = useDispatch();
  const { enableModel } = useSelector(({ aiOrderManagement }) => (aiOrderManagement));

  const doCancel = useCallback(() => dispatch && dispatch({
    type: `${NAME_SPACE}/refreshModel`,
    payload: { enableModel: null },
  }), []);
  const [form] = Form.useForm();
  const doEnable = async () => {
    const { uuid } = enableModel;
    await form.validateFields();
    dispatch && dispatch({
      type: `${NAME_SPACE}/enable`,
      payload: { uuid },

    });
  };

  useEffect(() => {
    form.setFieldsValue(enableModel);
  }, [enableModel]);

  return (
   <Drawer
        destroyOnClose
        extra={
            <Space>
              <Button onClick={doEnable} type={'primary'}>确定</Button>
              <Button onClick={doCancel}>取消</Button>
            </Space>
          }
        size={'large'}

        title='启用订单表'
        getContainer={false}
        visible={enableModel}
        onClose={doCancel}
      >
    >
      <Form
        {...layout}
        form={form}
        name='basic'
      >
        <Form.Item
          label='客户'
          name='customer'
        >
          <Input disabled />
        </Form.Item>
        <Form.Item
          label='花名'
          name='flower'
        >
          <Input disabled />
        </Form.Item>
        <Form.Item
          label='数量'
          name='quantity'
        >
          <Input disabled />
        </Form.Item>
      </Form>
    </Drawer>
  );
};

export default EnableForm;
