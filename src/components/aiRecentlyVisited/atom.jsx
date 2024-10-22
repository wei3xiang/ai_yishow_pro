import { atom } from 'recoil';

export const aiRecentlyVisitedStateAtom = atom({
key: `aiRecentlyVisitedStateAtom`,
default: {
    list: [],
    createModel: null,
    updateModel: null,
    disableModel: null,
    removeModel: null,
},
});
