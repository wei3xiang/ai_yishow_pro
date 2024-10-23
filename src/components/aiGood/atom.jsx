import { atom } from 'recoil';

export const aiGoodStateAtom = atom({
key: `aiGoodStateAtom`,
default: {
    list: [],
    createModel: null,
    updateModel: null,
    disableModel: null,
    removeModel: null,
},
});
