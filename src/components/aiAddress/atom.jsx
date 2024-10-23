import { atom } from 'recoil';

export const aiAddressStateAtom = atom({
key: `aiAddressStateAtom`,
default: {
    list: [],
    createModel: null,
    updateModel: null,
    disableModel: null,
    removeModel: null,
},
});
