import { atom } from 'recoil';

export const aiFlower束StateAtom = atom({
key: `aiFlower束StateAtom`,
default: {
    list: [],
    createModel: null,
    updateModel: null,
    disableModel: null,
    removeModel: null,
},
});
