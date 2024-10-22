import { atom } from 'recoil';

export const aiOrderItemStateAtom = atom({
key: `aiOrderItemStateAtom`,
default: {
    list: [],
    createModel: null,
    updateModel: null,
    disableModel: null,
    removeModel: null,
},
});
