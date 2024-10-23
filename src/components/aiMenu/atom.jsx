import { atom } from 'recoil';

export const aiMenuStateAtom = atom({
key: `aiMenuStateAtom`,
default: {
    list: [],
    createModel: null,
    updateModel: null,
    disableModel: null,
    removeModel: null,
},
});
