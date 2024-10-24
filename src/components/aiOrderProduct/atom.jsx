import { atom } from 'recoil';

export const aiOrderProductStateAtom = atom({
key: `aiOrderProductStateAtom`,
default: {
    list: [],
    createModel: null,
    updateModel: null,
    disableModel: null,
    removeModel: null,
},
});
