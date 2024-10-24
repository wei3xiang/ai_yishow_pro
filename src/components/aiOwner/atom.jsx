import { atom } from 'recoil';

export const aiOwnerStateAtom = atom({
key: `aiOwnerStateAtom`,
default: {
    list: [],
    createModel: null,
    updateModel: null,
    disableModel: null,
    removeModel: null,
},
});
