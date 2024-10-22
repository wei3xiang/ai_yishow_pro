import { atom } from 'recoil';

export const aiSupplierStateAtom = atom({
key: `aiSupplierStateAtom`,
default: {
    list: [],
    createModel: null,
    updateModel: null,
    disableModel: null,
    removeModel: null,
},
});
