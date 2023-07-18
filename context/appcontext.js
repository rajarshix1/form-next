import { createContext, useState } from 'react';

// Create the context
export const AppContext = createContext();

// Create the context provider component
export const AppContextProvider = ({ children }) => {
  // Define your context state and any necessary functions
  const [formData, setFormData] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Create an object with the values to be provided by the context
  const contextValues = {
    showModal,
    setShowModal,
    formData, setFormData  };

  return (
    <AppContext.Provider value={contextValues}>
      {children}
    </AppContext.Provider>
  );
};
