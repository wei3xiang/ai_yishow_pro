import { atom } from 'recoil';

export const aiOrderDetailStateAtom = atom({
key: `aiOrderDetailStateAtom`,
default: {
    list: [],
    createModel: null,
    updateModel: null,
    disableModel: null,
    removeModel: null,
},
});
