import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'dva';
import { Modal, Form, Input, InputNumber } from 'antd';
import { SortSeqColumn, StandardSelect } from '@/standard/StandardReactUtils';
import SystemStandard from '@/standard/SystemStandard';
import PlatformStandard from '@/standard/PlatformStandard';
import { layout, rules } from './const';
import api from '@/api';
import {API, LOADING_NAME, NAME_SPACE} from './const';
import style from './aiFlower.less';
import { DragSortTable } from '@ant-design/pro-table';
import { useAsyncMemo } from 'use-async-memo';
import useAsyncEffect from 'use-async-effect';
import {AiFlowerControllerApi} from 'dubhe-sdk-review';
import { MAX_PAGE_SIZE_OPTS } from '@/utils/DataUtils';
import { StandardColumnTextRender } from '@/standard/StandardReactUtils';

const SortList = () => <></>
export default SortList;
