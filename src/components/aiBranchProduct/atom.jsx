import { atom } from 'recoil';

export const aiBranchProductStateAtom = atom({
key: `aiBranchProductStateAtom`,
default: {
    list: [],
    createModel: null,
    updateModel: null,
    disableModel: null,
    removeModel: null,
},
});
