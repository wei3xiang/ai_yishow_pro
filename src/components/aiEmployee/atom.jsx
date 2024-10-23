import { atom } from 'recoil';

export const aiEmployeeStateAtom = atom({
key: `aiEmployeeStateAtom`,
default: {
    list: [],
    createModel: null,
    updateModel: null,
    disableModel: null,
    removeModel: null,
},
});
