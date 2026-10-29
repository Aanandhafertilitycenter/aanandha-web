import apiClient from "../apiService";
import querystring from "querystring";

const AppointmentService = {
  findAll: async (params) => {
    const url = params ? `appointment?${querystring.stringify(params)}` : "appointment";
    const res = await apiClient.get(url);
    return res.data.data;
  },

  findOne: async (id) => {
    const res = await apiClient.get(`appointment/${id}`);
    return res.data.data;
  },

  create: async (data) => {
    const res = await apiClient.post("appointment", data);
    return res.data;
  },

  update: async (data) => {
    const res = await apiClient.put(`appointment/${data.id}`, data);
    return res.data;
  },

  delete: async (id) => {
    const res = await apiClient.delete(`appointment/${id}`);
    return res.data;
  },
};

export default AppointmentService;
