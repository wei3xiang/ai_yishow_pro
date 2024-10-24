import { atom } from 'recoil';

export const aiCategoryProductStateAtom = atom({
key: `aiCategoryProductStateAtom`,
default: {
    list: [],
    createModel: null,
    updateModel: null,
    disableModel: null,
    removeModel: null,
},
});
