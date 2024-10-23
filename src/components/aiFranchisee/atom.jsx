import { atom } from 'recoil';

export const aiFranchiseeStateAtom = atom({
key: `aiFranchiseeStateAtom`,
default: {
    list: [],
    createModel: null,
    updateModel: null,
    disableModel: null,
    removeModel: null,
},
});
