import { atom } from 'recoil';

export const aiPromotionStateAtom = atom({
key: `aiPromotionStateAtom`,
default: {
    list: [],
    createModel: null,
    updateModel: null,
    disableModel: null,
    removeModel: null,
},
});
