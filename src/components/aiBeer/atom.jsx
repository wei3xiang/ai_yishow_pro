import { atom } from 'recoil';

export const aiBeerStateAtom = atom({
key: `aiBeerStateAtom`,
default: {
    list: [],
    createModel: null,
    updateModel: null,
    disableModel: null,
    removeModel: null,
},
});
