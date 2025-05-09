import Vue from 'vue'
import SidebarMenu from './components/SidebarMenu.vue'
import BaseButton from './components/BaseButton.vue'
import HomePage from './components/HomePage.vue'

Vue.component('BaseButton', BaseButton)

// Estado simples para gerenciar a navegação
const state = Vue.observable({
  currentPage: 'home'
})

// Método para mudar de página
Vue.prototype.$navigateTo = function(page) {
  state.currentPage = page
  console.log('Navegando para:', page)
}

new Vue({
  el: '#app',
  components: { 
    SidebarMenu,
    HomePage
  },
  data() {
    return {
      state
    }
  },
  template: `
    <div class="app-container">
      <SidebarMenu @navigate="$navigateTo" />
      <main class="main-content">
        <HomePage v-if="state.currentPage === 'home'" />
        <div v-else class="page-container">
          <h1>Página {{ state.currentPage }}</h1>
          <p>Esta página está em desenvolvimento.</p>
          <BaseButton 
            label="Voltar para Home" 
            icon="lni-home" 
            variant="primary" 
            @click="$navigateTo('home')" 
          />
        </div>
      </main>
    </div>
  `,
  mounted() {
    console.log('Aplicação Vue 2 iniciada com sucesso')
  }
})