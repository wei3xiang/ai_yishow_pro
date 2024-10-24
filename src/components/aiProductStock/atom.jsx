import { atom } from 'recoil';

export const aiProductStockStateAtom = atom({
key: `aiProductStockStateAtom`,
default: {
    list: [],
    createModel: null,
    updateModel: null,
    disableModel: null,
    removeModel: null,
},
});
