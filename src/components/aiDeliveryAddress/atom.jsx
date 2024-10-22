import { atom } from 'recoil';

export const aiDeliveryAddressStateAtom = atom({
key: `aiDeliveryAddressStateAtom`,
default: {
    list: [],
    createModel: null,
    updateModel: null,
    disableModel: null,
    removeModel: null,
},
});
