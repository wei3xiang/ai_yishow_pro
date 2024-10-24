import { atom } from 'recoil';

export const aiCategoryStateAtom = atom({
key: `aiCategoryStateAtom`,
default: {
    list: [],
    createModel: null,
    updateModel: null,
    disableModel: null,
    removeModel: null,
},
});
