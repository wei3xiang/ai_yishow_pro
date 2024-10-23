import { atom } from 'recoil';

export const aiBrewingLogStateAtom = atom({
key: `aiBrewingLogStateAtom`,
default: {
    list: [],
    createModel: null,
    updateModel: null,
    disableModel: null,
    removeModel: null,
},
});
