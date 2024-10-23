import { atom } from 'recoil';

export const aiUserAddressStateAtom = atom({
key: `aiUserAddressStateAtom`,
default: {
    list: [],
    createModel: null,
    updateModel: null,
    disableModel: null,
    removeModel: null,
},
});
