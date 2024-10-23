import { atom } from 'recoil';

export const aiCommentStateAtom = atom({
key: `aiCommentStateAtom`,
default: {
    list: [],
    createModel: null,
    updateModel: null,
    disableModel: null,
    removeModel: null,
},
});
