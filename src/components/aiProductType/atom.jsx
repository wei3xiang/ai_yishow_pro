import { atom } from 'recoil';

export const aiProductTypeStateAtom = atom({
key: `aiProductTypeStateAtom`,
default: {
    list: [],
    createModel: null,
    updateModel: null,
    disableModel: null,
    removeModel: null,
},
});
