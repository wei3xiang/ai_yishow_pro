import { atom } from 'recoil';

export const aiRestaurantStateAtom = atom({
key: `aiRestaurantStateAtom`,
default: {
    list: [],
    createModel: null,
    updateModel: null,
    disableModel: null,
    removeModel: null,
},
});
