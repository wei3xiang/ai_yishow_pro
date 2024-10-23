import { atom } from 'recoil';

export const aiCollectionStateAtom = atom({
key: `aiCollectionStateAtom`,
default: {
    list: [],
    createModel: null,
    updateModel: null,
    disableModel: null,
    removeModel: null,
},
});
