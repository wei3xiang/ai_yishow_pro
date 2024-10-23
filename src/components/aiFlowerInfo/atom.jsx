import { atom } from 'recoil';

export const aiFlowerInfoStateAtom = atom({
key: `aiFlowerInfoStateAtom`,
default: {
    list: [],
    createModel: null,
    updateModel: null,
    disableModel: null,
    removeModel: null,
},
});
