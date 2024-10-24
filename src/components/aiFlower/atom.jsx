import { atom } from 'recoil';

export const aiFlowerStateAtom = atom({
key: `aiFlowerStateAtom`,
default: {
    list: [],
    createModel: null,
    updateModel: null,
    disableModel: null,
    removeModel: null,
},
});
