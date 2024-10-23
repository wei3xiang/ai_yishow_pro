import { atom } from 'recoil';

export const aiCustomerStateAtom = atom({
key: `aiCustomerStateAtom`,
default: {
    list: [],
    createModel: null,
    updateModel: null,
    disableModel: null,
    removeModel: null,
},
});
