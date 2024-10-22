import { atom } from 'recoil';

export const aiProductCategoriesStateAtom = atom({
key: `aiProductCategoriesStateAtom`,
default: {
    list: [],
    createModel: null,
    updateModel: null,
    disableModel: null,
    removeModel: null,
},
});
