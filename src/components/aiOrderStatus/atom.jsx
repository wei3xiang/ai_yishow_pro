import { atom } from 'recoil';

export const aiOrderStatusStateAtom = atom({
key: `aiOrderStatusStateAtom`,
default: {
    list: [],
    createModel: null,
    updateModel: null,
    disableModel: null,
    removeModel: null,
},
});
