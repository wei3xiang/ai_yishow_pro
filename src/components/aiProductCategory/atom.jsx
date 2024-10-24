import { atom } from 'recoil';

export const aiProductCategoryStateAtom = atom({
key: `aiProductCategoryStateAtom`,
default: {
    list: [],
    createModel: null,
    updateModel: null,
    disableModel: null,
    removeModel: null,
},
});
