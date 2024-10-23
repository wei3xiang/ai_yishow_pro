import { atom } from 'recoil';

export const aiRoleStateAtom = atom({
key: `aiRoleStateAtom`,
default: {
    list: [],
    createModel: null,
    updateModel: null,
    disableModel: null,
    removeModel: null,
},
});
