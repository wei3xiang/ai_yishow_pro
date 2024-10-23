import { atom } from 'recoil';

export const aiStockPickingStateAtom = atom({
key: `aiStockPickingStateAtom`,
default: {
    list: [],
    createModel: null,
    updateModel: null,
    disableModel: null,
    removeModel: null,
},
});
