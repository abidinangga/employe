import { defineStore } from 'pinia'
import axios from "@/api/axios";
export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    dataEmploye: [],
    dataProduct: [],
    dataDistributor: []
  }),
  getters: {
  
  },
  actions: {
    async getAllEmpolyes(){
      try {
        const data = await axios.get('/employee')
        this.dataEmploye=data.data
      } catch (error) {
        console.log("error: ", error);
      }
    },
    async getAllProducts(){
      try {
        const data = await axios.get('/product')
        this.dataProduct=data.data
      } catch (error) {
        console.log("error: ", error);
      }
    },
    async getAllDistibution(){
      try {
        const data = await axios.get('/distribution')
        this.dataDistributor=data.data
      } catch (error) {
        console.log("error: ", error);
      }
    }
  }
})
