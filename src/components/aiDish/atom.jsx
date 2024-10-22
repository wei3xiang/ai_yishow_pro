import { atom } from 'recoil';

export const aiDishStateAtom = atom({
key: `aiDishStateAtom`,
default: {
    list: [],
    createModel: null,
    updateModel: null,
    disableModel: null,
    removeModel: null,
},
});
