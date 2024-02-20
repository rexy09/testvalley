import axios from "axios";
import Env from "../config/env";

/* 
API 1) https://api.testvalley.kr/main-banner/all
API 2) https://api.testvalley.kr/main-shortcut/all
API 3) https://api.testvalley.kr/collections?prearrangedDiscount
-> filter the data with type: "SINGLE" and viewType: "TILE"

*/

export function useHomeService() {
  async function getBanner() {
    return axios.get(Env.baseURL + "/main-banner/all", {
      params: {},

      headers: {},
    });
  }
  async function getShortcut() {
    return axios.get(Env.baseURL + "/main-shortcut/all", {
      params: {},

      headers: {},
    });
  }
  async function getCollections() {
    return axios.get(Env.baseURL + "/collections", {
      params: {},

      headers: {},
    });
  }

  return { getBanner, getShortcut, getCollections };
}
