import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'dva';
import { Modal, Form, Drawer, InputNumber, Space } from 'antd';
import {Button, Input, Switch} from '@/components/Wrapper';
import { StandardSelect } from '@/standard/StandardReactUtils';
import SystemStandard from '@/standard/SystemStandard';
import PlatformStandard from '@/standard/PlatformStandard';
import { layout, rules } from './const';
import {API, LOADING_NAME, NAME_SPACE} from './const';
import style from './aiCustomer.less';

const EnableForm = () => {
  const dispatch = useDispatch();
  const { enableModel } = useSelector(({ aiCustomerManagement }) => (aiCustomerManagement));

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

        title='启用客户表'
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
          label='客户名'
          name='name'
        >
          <Input disabled />
        </Form.Item>
        <Form.Item
          label='电话'
          name='phone'
        >
          <Input disabled />
        </Form.Item>
        <Form.Item
          label='地址'
          name='address'
        >
          <Input disabled />
        </Form.Item>
      </Form>
    </Drawer>
  );
};

export default EnableForm;
