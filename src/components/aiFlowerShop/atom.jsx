import { atom } from 'recoil';

export const aiFlowerShopStateAtom = atom({
key: `aiFlowerShopStateAtom`,
default: {
    list: [],
    createModel: null,
    updateModel: null,
    disableModel: null,
    removeModel: null,
},
});
