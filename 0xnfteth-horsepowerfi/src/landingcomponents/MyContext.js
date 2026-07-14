// import React, { useState, useContext, createContext } from "react";

// // Create a context
// const MyContext = createContext();
// export const useData = () => useContext(MyContext);
// // Create a provider component

// export const MyProvider = ({ children }) => {
//   const [alertFlag, setAlertFlag] = useState(false);
//   const setAlert = () => {
//     setAlertFlag(true);
//   };

//   return (
//     <MyContext.Provider setAlert={setAlert} alertFlag={alertFlag}>
//       {children}
//     </MyContext.Provider>
//   );
// };

import { createContext } from "react";

export const MyContext = createContext({
  alert: false,
});
