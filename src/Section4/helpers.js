const choice = (array) => array[Math.floor(Math.random() * array.length)];

const remove = (array, item) => array.filter((a) => a !== item);

export { choice, remove };
