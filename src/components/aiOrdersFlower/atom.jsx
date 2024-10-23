import { atom } from 'recoil';

export const aiOrdersFlowerStateAtom = atom({
key: `aiOrdersFlowerStateAtom`,
default: {
    list: [],
    createModel: null,
    updateModel: null,
    disableModel: null,
    removeModel: null,
},
});
