import { atom } from 'recoil';

export const aiUserPaymentRecordsStateAtom = atom({
key: `aiUserPaymentRecordsStateAtom`,
default: {
    list: [],
    createModel: null,
    updateModel: null,
    disableModel: null,
    removeModel: null,
},
});
