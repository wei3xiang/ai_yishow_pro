import { atom } from 'recoil';

export const aiUserRoleStateAtom = atom({
key: `aiUserRoleStateAtom`,
default: {
    list: [],
    createModel: null,
    updateModel: null,
    disableModel: null,
    removeModel: null,
},
});
