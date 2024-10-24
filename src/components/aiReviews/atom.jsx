import { atom } from 'recoil';

export const aiReviewsStateAtom = atom({
key: `aiReviewsStateAtom`,
default: {
    list: [],
    createModel: null,
    updateModel: null,
    disableModel: null,
    removeModel: null,
},
});
