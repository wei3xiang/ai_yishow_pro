import { atom } from 'recoil';

export const aiProductStateAtom = atom({
key: `aiProductStateAtom`,
default: {
    list: [],
    createModel: null,
    updateModel: null,
    disableModel: null,
    removeModel: null,
},
});
