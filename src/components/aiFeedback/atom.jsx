import { atom } from 'recoil';

export const aiFeedbackStateAtom = atom({
key: `aiFeedbackStateAtom`,
default: {
    list: [],
    createModel: null,
    updateModel: null,
    disableModel: null,
    removeModel: null,
},
});
