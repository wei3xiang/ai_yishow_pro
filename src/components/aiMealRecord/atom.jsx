import { atom } from 'recoil';

export const aiMealRecordStateAtom = atom({
key: `aiMealRecordStateAtom`,
default: {
    list: [],
    createModel: null,
    updateModel: null,
    disableModel: null,
    removeModel: null,
},
});
