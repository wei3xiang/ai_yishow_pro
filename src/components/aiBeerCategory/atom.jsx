import { atom } from 'recoil';

export const aiBeerCategoryStateAtom = atom({
key: `aiBeerCategoryStateAtom`,
default: {
    list: [],
    createModel: null,
    updateModel: null,
    disableModel: null,
    removeModel: null,
},
});
