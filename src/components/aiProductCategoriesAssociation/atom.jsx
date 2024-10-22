import { atom } from 'recoil';

export const aiProductCategoriesAssociationStateAtom = atom({
key: `aiProductCategoriesAssociationStateAtom`,
default: {
    list: [],
    createModel: null,
    updateModel: null,
    disableModel: null,
    removeModel: null,
},
});
