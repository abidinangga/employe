<template>
  <div>
    <h1 class="text-center text-gray-500 text-xs mt-3">Create Order</h1>
    <div class="max-w-2xl mx-auto bg-gray-300 p-16">
      <form>
        <h2>Detail</h2>
        <div class="mb-6">
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Name</label
          >
          <select
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            v-model="employee_name"
            @change="distribution()"
          >
            <option
              v-for="employee in dataEmploye"
              :key="employee.id"
              :value="employee.employee_name"
            >
              {{ employee.employee_name }}
            </option>
          </select>
        </div>
        <div class="gap-6 mb-6">
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Distribution Center</label
          >
          <select
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option v-for="data in listDistribution" :key="data.name" :value="data.name"></option>
          </select>
        </div>
        <div class="grid gap-6 mb-6 lg:grid-cols-2">
          <div>
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >Payment Type</label
            >
            <select
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="cash H+1">Cash H+1</option>
              <option value="cash H+3">Cash H+3</option>
              <option value="cash H+7">Cash H+7</option>
              <option value="transfer H+1">Transfer H+1</option>
              <option value="transfer H+3">Transfer H+3</option>
              <option value="transfer H+7">Transfer H+7</option>
            </select>
          </div>
          <div>
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >Expired Date</label
            >
            <input
              type="date"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </div>
        <div class="mb-6">
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Notes</label
          >
          <textarea
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
          </textarea>
        </div>
        <hr />
        <div class="max-w-6xl mx-auto w-full">
          <h1>Product</h1>
          <div class="grid gap-6 mb-6 lg:grid-cols-2">
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Product</label
              >
              <select
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                v-model="product_name"
                @change="getProduct()"
              >
                <option v-for="product in dataProduct" :key="product.id" :value="product.name">
                  {{ product.name }}
                </option>
              </select>
            </div>
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Unit</label
              >
              <select
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                v-model="unit"
              >
                <label value=""></label>
              </select>
            </div>
          </div>
          <div class="grid gap-6 mb-6 lg:grid-cols-2">
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Quantity</label
              >
              <input
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                v-model="quantity"
              />
            </div>
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Price</label
              >
              <input
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                v-model="price"
                :placeholder="listProduct.price"
              />
            </div>
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Total Price</label
              >
              <input
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Total Net Price RP.</label
              >
              <hr />
            </div>
          </div>
        </div>
        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          :disabled="!form.name"
        >
          Confrim
        </button>
        <p class="text-center text-gray-500 text-xs mt-3">Total RP.</p>
      </form>
      <button
        type="submit"
        class="text-white bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        NEW ITEM
      </button>
      <button
        type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Cancel
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "@/stores/counter.js";
export default {
  name: "formAdd",
  data() {},
  methods: {
    ...mapActions(useCounterStore, ["getAllProducts", "getAllEmpolyes", "getAllDistibution"]),
    distribution() {
      this.listDistribution = [];
      let data = this.dataDistribution;
      data.filter((el) => {
        console.log(el);
        if (this.employee.distributionTypeId == el.typeId) {
          this.listDistribution.push(el);
        }
      });
    },
    getProduct() {
      this.listProduct = [];
      let data = this.dataProduct;
      data.filter((el) => {
        if (this.product_name === el.name) {
          this.listProduct.push(el);
        }
      });
    },
  },
  computed: {
    ...mapState(useCounterStore, ["dataEmploye", "dataProduct", "dataDistribution"]),
  },
  created() {
    this.getAllProducts();
    this.getAllEmpolyes();
    this.getAllDistibution();
  },
};
</script>

<style></style>
