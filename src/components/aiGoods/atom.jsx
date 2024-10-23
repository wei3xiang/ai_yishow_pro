import { atom } from 'recoil';

export const aiGoodsStateAtom = atom({
key: `aiGoodsStateAtom`,
default: {
    list: [],
    createModel: null,
    updateModel: null,
    disableModel: null,
    removeModel: null,
},
});
