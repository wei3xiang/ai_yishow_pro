import { atom } from 'recoil';

export const aiProduct评论StateAtom = atom({
key: `aiProduct评论StateAtom`,
default: {
    list: [],
    createModel: null,
    updateModel: null,
    disableModel: null,
    removeModel: null,
},
});
