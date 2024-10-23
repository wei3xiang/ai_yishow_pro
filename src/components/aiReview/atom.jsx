import { atom } from 'recoil';

export const aiReviewStateAtom = atom({
key: `aiReviewStateAtom`,
default: {
    list: [],
    createModel: null,
    updateModel: null,
    disableModel: null,
    removeModel: null,
},
});
