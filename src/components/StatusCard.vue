<template>
  <div :class="['p-4 rounded shadow', corBg ? corBg : 'bg-white']">
    <h3 class="text-lg font-semibold mb-2">{{ titulo }}</h3>
    <p class="text-3xl font-bold mb-2">{{ total }}</p>
    <ul class="list-disc list-inside text-sm text-gray-700">
      <li v-for="(doc, index) in documentos" :key="index">{{ doc }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'StatusCard',
  props: {
    titulo: {
      type: String,
      required: true
    },
    total: {
      type: Number,
      required: true
    },
    documentos: {
      type: Array,
      required: true,
      default: () => []
    },
    corBg: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
/* Exemplo simples, pode personalizar mais com Tailwind CSS se usar */
</style>
