const rules = {
  fullname: [
    {
      required: true,
      message: '请输入部门全名!',
    },
    {
      max: 60,
      message: '部门全名最大长度60',
    },
    {
      min: 3,
      message: '部门全名最小长度3',
    },
  ],
  code: [
    {
      required: true,
      message: '请输入编码!',
    },
    {
      max: 18,
      message: '编码最大长度18',
    },
    {
      min: 3,
      message: '编码最小长度3',
    },
  ],
  simplename: [
    {
      required: true,
      message: '请输入简称!',
    },
    {
      max: 18,
      message: '简称最大长度18',
    },
    {
      min: 3,
      message: '简称最小长度3',
    },
  ],
  description: [
    {
      max: 200,
      message: '描述最大长度200',
    },
  ]
};


const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
export { rules, layout };

const API = 'aiCustomer';
const NAME_SPACE = `${API}Management`;
const LOADING_NAME = `${NAME_SPACE}/list`;
const CREATE_LOADING_NAME = `${NAME_SPACE}/create`;
export {API, NAME_SPACE, LOADING_NAME , CREATE_LOADING_NAME};