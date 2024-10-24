import { atom } from 'recoil';

export const aiProductsStateAtom = atom({
key: `aiProductsStateAtom`,
default: {
    list: [],
    createModel: null,
    updateModel: null,
    disableModel: null,
    removeModel: null,
},
});
