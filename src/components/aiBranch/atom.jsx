import { atom } from 'recoil';

export const aiBranchStateAtom = atom({
key: `aiBranchStateAtom`,
default: {
    list: [],
    createModel: null,
    updateModel: null,
    disableModel: null,
    removeModel: null,
},
});
