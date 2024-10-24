import { atom } from 'recoil';

export const aiVendorStateAtom = atom({
key: `aiVendorStateAtom`,
default: {
    list: [],
    createModel: null,
    updateModel: null,
    disableModel: null,
    removeModel: null,
},
});
