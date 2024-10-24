import { atom } from 'recoil';

export const aiShopStateAtom = atom({
key: `aiShopStateAtom`,
default: {
    list: [],
    createModel: null,
    updateModel: null,
    disableModel: null,
    removeModel: null,
},
});
