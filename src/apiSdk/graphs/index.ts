import axios from 'axios';
import queryString from 'query-string';
import { GraphInterface, GraphGetQueryInterface } from 'interfaces/graph';
import { GetQueryInterface } from '../../interfaces';

export const getGraphs = async (query?: GraphGetQueryInterface) => {
  const response = await axios.get(`/api/graphs${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createGraph = async (graph: GraphInterface) => {
  const response = await axios.post('/api/graphs', graph);
  return response.data;
};

export const updateGraphById = async (id: string, graph: GraphInterface) => {
  const response = await axios.put(`/api/graphs/${id}`, graph);
  return response.data;
};

export const getGraphById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/graphs/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteGraphById = async (id: string) => {
  const response = await axios.delete(`/api/graphs/${id}`);
  return response.data;
};
