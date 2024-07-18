<script setup lang="ts">
import { ref } from "vue";
import { Button } from "@/components/ui/button";
import { inject } from "vue";
import { onMounted } from "vue";

defineProps<{ msg: string }>();

const axios = inject("axios");
const count = ref(0);
const axiosFetchData = ref([]);
const onMountedData = ref([]);
const fetchDataData = ref([]);

const showAlert = () => {
  console.log(count.value);
};

async function axiosFetch() {
  await axios
    .get("https://api.coindesk.com/v1/bpi/currentprice.json")
    .then((response) => {
      axiosFetchData.value = response.data;
    })
    .catch((e) => {
      console.error("There was an error: ", e);
    });
}

async function fetchData() {
  try {
    const response = await fetch(
      "https://api.coindesk.com/v1/bpi/currentprice.json"
    );
    const actualData = await response.json();
    fetchDataData.value = actualData;
  } catch (e) {
    console.error("There was an error: ", e);
  }
}

onMounted(async () => {
  await axios
    .get("https://api.coindesk.com/v1/bpi/currentprice.json")
    .then((response) => {
      onMountedData.value = response.data;
    });
});
</script>

<template>
  <div class="flex flex-col space-y-10 max-w-[1000px] p-10">
    <p :style="{ color: 'white' }">ON MOUNTED: {{ onMountedData }}</p>
    <p class="text-red-200">Axios Fetch {{ axiosFetchData }}</p>
    <p class="text-green-300">Fetch Data: {{ fetchDataData }}</p>
    <Button @click="axiosFetch">Fetch Axios</Button>
    <Button @click="fetchData">Fetch</Button>
  </div>
</template>
