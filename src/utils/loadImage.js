// src/utils/loadImage.js

const importAll = (r) => {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
};

const images = importAll(require.context('../Images/Recipes', false, /\.(jpg|jpeg|png)$/));

export default images;
