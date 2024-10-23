import { atom } from 'recoil';

export const aiInventoryLogStateAtom = atom({
key: `aiInventoryLogStateAtom`,
default: {
    list: [],
    createModel: null,
    updateModel: null,
    disableModel: null,
    removeModel: null,
},
});
