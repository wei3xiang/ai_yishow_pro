import { atom } from 'recoil';

export const aiRoomStateAtom = atom({
key: `aiRoomStateAtom`,
default: {
    list: [],
    createModel: null,
    updateModel: null,
    disableModel: null,
    removeModel: null,
},
});
