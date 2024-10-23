import { atom } from 'recoil';

export const aiOrdersStateAtom = atom({
key: `aiOrdersStateAtom`,
default: {
    list: [],
    createModel: null,
    updateModel: null,
    disableModel: null,
    removeModel: null,
},
});
