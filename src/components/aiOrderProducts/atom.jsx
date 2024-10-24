import { atom } from 'recoil';

export const aiOrderProductsStateAtom = atom({
key: `aiOrderProductsStateAtom`,
default: {
    list: [],
    createModel: null,
    updateModel: null,
    disableModel: null,
    removeModel: null,
},
});
