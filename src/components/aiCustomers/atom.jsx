import { atom } from 'recoil';

export const aiCustomersStateAtom = atom({
key: `aiCustomersStateAtom`,
default: {
    list: [],
    createModel: null,
    updateModel: null,
    disableModel: null,
    removeModel: null,
},
});
