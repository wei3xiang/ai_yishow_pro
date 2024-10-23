import { atom } from 'recoil';

export const aiBreweryStateAtom = atom({
key: `aiBreweryStateAtom`,
default: {
    list: [],
    createModel: null,
    updateModel: null,
    disableModel: null,
    removeModel: null,
},
});
