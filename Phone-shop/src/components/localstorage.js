const getStoredCart = () => {
  const storedFavPhn = localStorage.getItem("favPhn");
  if (storedFavPhn) {
    return JSON.parse(storedFavPhn);
  }
  return [];
};

const saveFavPhn = (id) => {
  const storedFavPhones = getStoredCart();
  const exists = storedFavPhones.find((phnId) => phnId === id);
  if (!exists) {
    storedFavPhones.push(id);
    localStorage.setItem("favPhn", JSON.stringify(storedFavPhones));
  } else {
    return alert("already exists");
  }
};

export { saveFavPhn, getStoredCart };
