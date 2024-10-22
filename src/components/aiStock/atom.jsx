import { atom } from 'recoil';

export const aiStockStateAtom = atom({
key: `aiStockStateAtom`,
default: {
    list: [],
    createModel: null,
    updateModel: null,
    disableModel: null,
    removeModel: null,
},
});
