import { atom } from 'recoil';

export const aiProductInfoStateAtom = atom({
key: `aiProductInfoStateAtom`,
default: {
    list: [],
    createModel: null,
    updateModel: null,
    disableModel: null,
    removeModel: null,
},
});
