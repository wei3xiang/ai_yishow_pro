import { atom } from 'recoil';

export const aiUserMenuStateAtom = atom({
key: `aiUserMenuStateAtom`,
default: {
    list: [],
    createModel: null,
    updateModel: null,
    disableModel: null,
    removeModel: null,
},
});
