import { atom } from 'recoil';

export const aiEmployeesStateAtom = atom({
key: `aiEmployeesStateAtom`,
default: {
    list: [],
    createModel: null,
    updateModel: null,
    disableModel: null,
    removeModel: null,
},
});
