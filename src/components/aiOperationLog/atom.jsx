import { atom } from 'recoil';

export const aiOperationLogStateAtom = atom({
key: `aiOperationLogStateAtom`,
default: {
    list: [],
    createModel: null,
    updateModel: null,
    disableModel: null,
    removeModel: null,
},
});
