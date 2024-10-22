import { atom } from 'recoil';

export const aiInventoryStateAtom = atom({
key: `aiInventoryStateAtom`,
default: {
    list: [],
    createModel: null,
    updateModel: null,
    disableModel: null,
    removeModel: null,
},
});
