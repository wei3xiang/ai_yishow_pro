import { atom } from 'recoil';

export const aiSaleStateAtom = atom({
key: `aiSaleStateAtom`,
default: {
    list: [],
    createModel: null,
    updateModel: null,
    disableModel: null,
    removeModel: null,
},
});
