import { atom } from 'recoil';

export const aiWineStateAtom = atom({
key: `aiWineStateAtom`,
default: {
    list: [],
    createModel: null,
    updateModel: null,
    disableModel: null,
    removeModel: null,
},
});
