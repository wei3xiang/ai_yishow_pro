import { atom } from 'recoil';

export const aiUserStateAtom = atom({
key: `aiUserStateAtom`,
default: {
    list: [],
    createModel: null,
    updateModel: null,
    disableModel: null,
    removeModel: null,
},
});
