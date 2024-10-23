import { atom } from 'recoil';

export const aiFlowerStoreStateAtom = atom({
key: `aiFlowerStoreStateAtom`,
default: {
    list: [],
    createModel: null,
    updateModel: null,
    disableModel: null,
    removeModel: null,
},
});
