import { atom } from 'recoil';

export const aiSaleRecordStateAtom = atom({
key: `aiSaleRecordStateAtom`,
default: {
    list: [],
    createModel: null,
    updateModel: null,
    disableModel: null,
    removeModel: null,
},
});
