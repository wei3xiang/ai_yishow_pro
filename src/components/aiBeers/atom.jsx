import { atom } from 'recoil';

export const aiBeersStateAtom = atom({
key: `aiBeersStateAtom`,
default: {
    list: [],
    createModel: null,
    updateModel: null,
    disableModel: null,
    removeModel: null,
},
});
