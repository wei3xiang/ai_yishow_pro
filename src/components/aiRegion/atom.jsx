import { atom } from 'recoil';

export const aiRegionStateAtom = atom({
key: `aiRegionStateAtom`,
default: {
    list: [],
    createModel: null,
    updateModel: null,
    disableModel: null,
    removeModel: null,
},
});
