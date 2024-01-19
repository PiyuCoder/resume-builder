import { createContext, useState, useContext, useEffect } from "react";
import { getUserData } from "../axios/axios";
import { initialState } from "../utils/initialStates";

const ResumeContext = createContext();

const ResumeContextProvider = ({ children }) => {
  const [state, setState] = useState(initialState);
  const [token, setToken] = useState();
  const [currentUser, setCurrentUser] = useState([]);

  const storedToken = sessionStorage.getItem("token");
  const storedUser = JSON.parse(sessionStorage.getItem("user"));

  const updateState = (key, value) => {
    setState((prevState) => ({ ...prevState, [key]: value }));
  };

  const updateNestedState = (section, index, key, value) => {
    // console.log("Updating state:", section, index, key, value);
    setState((prevState) => ({
      ...prevState,
      [section]: prevState[section].map((item, i) =>
        i === index ? { ...item, [key]: value } : item
      ),
    }));
  };
  // console.log(state);

  const addNewSectionState = (section, data) => {
    setState((prevState) => ({
      ...prevState,
      [section]: [...prevState[section], { ...data }],
    }));
  };

  const removeSectionState = (section, index) => {
    setState((prevState) => ({
      ...prevState,
      [section]: prevState[section].filter((_, i) => i !== index),
    }));
  };

  // console.log(currentUser);

  useEffect(() => {
    const fetchUserData = async () => {
      if (storedToken) {
        setToken(storedToken);
        const res = await getUserData(storedToken);
        setCurrentUser(res?.data?.user);
      }
    };

    fetchUserData();
  }, [token]);

  return (
    <ResumeContext.Provider
      value={{
        state,
        setState,
        updateState,
        updateNestedState,
        addNewSectionState,
        removeSectionState,
        token,
        setToken,
        currentUser,
        setCurrentUser,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
};

const useResumeContext = () => {
  return useContext(ResumeContext);
};

export { ResumeContextProvider, useResumeContext };
