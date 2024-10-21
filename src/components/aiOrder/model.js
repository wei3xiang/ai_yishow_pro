
import {DEFAULT_PAGE_SIZE, DEFAULT_PAGE_TOTAL, FIST_PAGE_NUM, genOrderBy} from "@/utils/DataUtils";
import {AiOrderControllerApi} from 'dubhe-sdk-review';
import {selectSelfFn} from 'kosmos-dubhe-common-utils';
import _ from 'lodash';
import API from '@/api';

import {NAME_SPACE} from './const';
const selectSelf = selectSelfFn(NAME_SPACE);

const init = () => ({
  list: [],


  fuzzy: null,
  selected: [],
  
  sortField: null,
  sortOrder: null,

  pageNum: FIST_PAGE_NUM,
  pageSize: DEFAULT_PAGE_SIZE,
  total: DEFAULT_PAGE_TOTAL,

  createModel: null,
  updateModel: null,
  removeModel: null,
  disableModel: null,
  enableModel: null,
  sortModel: null,
});

export default {
  namespace: NAME_SPACE,

  state: { ...init() },

  effects: {
    * list({ payload }, { call, put, select }) {
      console.log('effects list payload ', payload);
      const {
        fuzzy,

        pageNum,
        pageSize,
 
        sortField,
        sortOrder
      } = _.defaults(payload, yield select(selectSelf));
      const opts = {
        fuzzy,

        pageNum,
        pageSize,
        orderBy: genOrderBy({sortField, sortOrder})
      };
      console.log('effects list opts ', opts);
      
      const service = AiOrderControllerApi.of(API);
      const { data: { list, pageNum: __pageNum, total } } = yield call(() => service.fetchAiOrderList(opts));
      yield put({
        type: 'updateList',
        payload: {
          list,

          fuzzy,

          total,
          
          pageNum: __pageNum,
          pageSize,
          sortField,
          sortOrder
        },
      });
      
    },
    
     * doSearch({payload: {fuzzy, displayDisable}}, {call, put, select}) {
      // console.debug('effects doSearch fuzzy ', fuzzy, 'displayDisable', displayDisable);
      const {pageSize} = yield select(selectSelf);
      yield put({
        type: 'list',
        payload: {
          fuzzy,
          displayDisable,
          pageNum: FIST_PAGE_NUM,
          pageSize,
          sortField: null,
          sortOrder: null,
        },
      });
    },

    * changePage({ payload: { toPage, pageSize , sortField, sortOrder}}, { call, put, select }) {
      console.log('effects changePage',  'toPage :', toPage, 'pageSize :',  pageSize,   'sortField :', sortField, 'sortOrder :',  sortOrder);
      yield put({
        type: 'list',
        payload: {  pageNum: toPage, pageSize,  sortField, sortOrder },
      });
    },


    * changeSelected({ payload: { uuids } }, { call, put, select }) {
      if (!_.isEmpty(uuids)) {
        yield put({
          type: 'updateSelect',
          payload: { selected: [...uuids] },
        });
      } else {
        yield put({
          type: 'updateSelect',
          payload: { selected: [] },
        });
      }
    },

    * create({ payload }, { call, put, select }) {
      const service = AiOrderControllerApi.of(API);
      
      yield call(() => service.saveAiOrder(payload));
      
      yield put({
        type: 'list',
        payload: { createModel: null },
      });
    },

    * update({ payload }, { call, put, select }) {
      const service = AiOrderControllerApi.of(API);
      yield call(() => service.updateAiOrder(payload));
      
      yield put({
        type: 'list',
        payload: { updateModel: null },
      });
    },
    * remove({ payload: { uuid } }, { call, put, select }) {
      const service = AiOrderControllerApi.of(API);
      
      yield call(() => service.removeAiOrder(uuid));

      yield put({
        type: 'list',
        payload: { removeModel: null },
      });
    },
    * toCreate({ payload }, { call, put, select }) {
      console.log('effects toCreate ', payload);
      yield put({
        type: 'refreshModel',
        payload: { createModel: payload },
      });
    },

    * toUpdate({ payload: { uuid } }, { call, put, select }) {
      const service = AiOrderControllerApi.of(API);
      const { data: updateModel } = yield call(() => service.fetchAiOrderDetail(uuid, {}));
      yield put({
        type: 'refreshModel',
        payload: { updateModel },
      });
    },

    * toRemove({ payload: { uuid } }, { call, put, select }) {
      const service = AiOrderControllerApi.of(API);
      const { data: removeModel } = yield call(() => service.fetchAiOrderDetail(uuid, {}));
      yield put({
        type: 'refreshModel',
        payload: { removeModel },
      });
    },
    
  },

  reducers: {
    updateList(state, {
      payload: {
        list,

        fuzzy,

        pageNum,
        pageSize,
        total,
        sortField,
        sortOrder,
      },
    }) {
      return {
        ...state,
        list,

        fuzzy,

        pageNum,
        pageSize,
        total,
				sortField,
        sortOrder,
        
        createModel: null,
        updateModel: null,
        removeModel: null,
        disableModel: null,
        enableModel: null,
        sortModel: null,
      };
    },

    updateSelect(state, { payload: { selected } }) {
      return {
        ...state, selected,
      };
    },

    refreshModel(state, { payload }) {
      return {
        ...state,
        ..._.pick(payload, ['createModel', 'updateModel', 'removeModel', 'disableModel', 'enableModel', 'sortModel']),
      };
    },

    unload() {
      return { ...init() };
    },
  },
};