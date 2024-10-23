import { atom } from 'recoil';

export const aiPaymentsStateAtom = atom({
key: `aiPaymentsStateAtom`,
default: {
    list: [],
    createModel: null,
    updateModel: null,
    disableModel: null,
    removeModel: null,
},
});
