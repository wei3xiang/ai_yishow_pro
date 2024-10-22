import { atom } from 'recoil';

export const aiInstockStateAtom = atom({
key: `aiInstockStateAtom`,
default: {
    list: [],
    createModel: null,
    updateModel: null,
    disableModel: null,
    removeModel: null,
},
});
