import { atom } from 'recoil';

export const aiFlowerOrderStateAtom = atom({
key: `aiFlowerOrderStateAtom`,
default: {
    list: [],
    createModel: null,
    updateModel: null,
    disableModel: null,
    removeModel: null,
},
});
