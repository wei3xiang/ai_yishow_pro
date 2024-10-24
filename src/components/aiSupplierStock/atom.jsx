import { atom } from 'recoil';

export const aiSupplierStockStateAtom = atom({
key: `aiSupplierStockStateAtom`,
default: {
    list: [],
    createModel: null,
    updateModel: null,
    disableModel: null,
    removeModel: null,
},
});
