import { atom } from 'recoil';

export const aiManagerStateAtom = atom({
key: `aiManagerStateAtom`,
default: {
    list: [],
    createModel: null,
    updateModel: null,
    disableModel: null,
    removeModel: null,
},
});
