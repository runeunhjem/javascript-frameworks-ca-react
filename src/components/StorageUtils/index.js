// Save data to localStorage
export const save = (key, data) => {
  try {
    const serializedData = JSON.stringify(data);
    localStorage.setItem(key, serializedData);
  } catch (err) {
    console.error("Could not save to localStorage", err);
  }
};

// Load data from localStorage
export const load = (key) => {
  try {
    const serializedData = localStorage.getItem(key);
    return serializedData ? JSON.parse(serializedData) : null;
  } catch (err) {
    console.error("Could not load from localStorage", err);
    return null;
  }
};
