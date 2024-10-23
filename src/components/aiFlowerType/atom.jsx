import { atom } from 'recoil';

export const aiFlowerTypeStateAtom = atom({
key: `aiFlowerTypeStateAtom`,
default: {
    list: [],
    createModel: null,
    updateModel: null,
    disableModel: null,
    removeModel: null,
},
});
