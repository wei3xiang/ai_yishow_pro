import { atom } from 'recoil';

export const aiStoreStateAtom = atom({
key: `aiStoreStateAtom`,
default: {
    list: [],
    createModel: null,
    updateModel: null,
    disableModel: null,
    removeModel: null,
},
});
