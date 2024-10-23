import { atom } from 'recoil';

export const aiOrderDetailsStateAtom = atom({
key: `aiOrderDetailsStateAtom`,
default: {
    list: [],
    createModel: null,
    updateModel: null,
    disableModel: null,
    removeModel: null,
},
});
