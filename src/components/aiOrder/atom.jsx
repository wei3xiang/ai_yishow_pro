import { atom } from 'recoil';

export const aiOrderStateAtom = atom({
key: `aiOrderStateAtom`,
default: {
    list: [],
    createModel: null,
    updateModel: null,
    disableModel: null,
    removeModel: null,
},
});
