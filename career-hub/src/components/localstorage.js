const getStoredCart = () => {
  const storedJobApplication = localStorage.getItem("jobs");
  if (storedJobApplication) {
    return JSON.parse(storedJobApplication);
  }
  return [];
};

const saveJobApplication = (id) => {
  const storedJobApplications = getStoredCart();
  const exists = storedJobApplications.find(jobId => jobId === id);
  if(!exists) {
    storedJobApplications.push(id);
    localStorage.setItem("jobs", JSON.stringify(storedJobApplications));
  }
  else{
    return alert('ase kintu')
  }
};

export { saveJobApplication, getStoredCart };
