import { Company } from '@prisma/client';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCompaniesStore = defineStore('counter', () => {
  const companies = ref<Company[]>()
  async function execute() {
    const req = await fetch('http://172.18.19.199:9100/api/company')
    companies.value = await req.json()
  }
  return {
    companies,
    execute
  }
});
