import { atom } from 'recoil';

export const aiWineCategoryStateAtom = atom({
key: `aiWineCategoryStateAtom`,
default: {
    list: [],
    createModel: null,
    updateModel: null,
    disableModel: null,
    removeModel: null,
},
});
