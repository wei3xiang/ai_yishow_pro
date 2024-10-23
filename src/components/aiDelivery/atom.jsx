import { atom } from 'recoil';

export const aiDeliveryStateAtom = atom({
key: `aiDeliveryStateAtom`,
default: {
    list: [],
    createModel: null,
    updateModel: null,
    disableModel: null,
    removeModel: null,
},
});
