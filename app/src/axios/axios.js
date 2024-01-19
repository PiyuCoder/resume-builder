import axios from "axios";

const url = process.env.REACT_APP_API_URL || "http://localhost:8000";

export const register = async (formData) => {
  try {
    const res = await axios.post(`${url}/api/register`, { formData });
    return res;
  } catch (error) {
    return error.response;
  }
};

export const login = async (formData) => {
  try {
    const res = await axios.post(`${url}/api/login`, { formData });
    return res;
  } catch (error) {
    return error.response;
  }
};

export const uploadResume = async (token, state) => {
  try {
    const res = await axios.post(
      `${url}/api/upload`,
      { state },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return res;
  } catch (error) {
    return error.response;
  }
};

export const updateResume = async (token, state) => {
  try {
    const res = await axios.put(
      `${url}/api/update`,
      { state },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return res;
  } catch (error) {
    return error.response;
  }
};

export const deleteResume = async (token, id) => {
  try {
    const res = await axios.delete(`${url}/api/delete/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res;
  } catch (error) {
    return error.response;
  }
};

export const getUserData = async (token) => {
  try {
    const res = await axios.get(`${url}/api/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res;
  } catch (error) {
    return error.response;
  }
};
