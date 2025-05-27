<template>
  <div class="dashboard-container">
    <div class="main-content">
      <header class="header">
        <div class="header-left">
          <v-icon name="calendar" class="icon" />
          <span>Quarta-feira, 15 Abril 2025</span>
        </div>
        <div class="header-right">
          <div class="notification">
            <v-icon name="bell" class="icon" />
            <span class="badge">3</span>
          </div>
          <div class="user-profile">
            <img
              src="/placeholder.svg?height=32&width=32"
              alt="Ana Carolina"
              class="avatar"
            />
            <span>Ana Carolina</span>
            <v-icon name="chevron-down" class="icon" />
          </div>
        </div>
      </header>
      <div class="welcome-section">
        <div class="welcome-title">
          <span class="wave">👋</span>
          <h1>Bem-vindo, <strong>Melanie</strong></h1>
        </div>
        <p class="welcome-subtitle">
          Ao seu sistema de Gestão de Processos internos
        </p>
      </div>
      <div class="cards-grid">
        <div class="card card-yellow">
          <div class="card-header">
            <h3>Pendentes</h3>
            <v-icon name="sync" class="icon-white" />
          </div>
          <div class="card-number">2</div>
          <div class="card-content">
            <div class="card-item">Folha de Pagamento / Abril 2025</div>
            <div class="card-item">Contrato Prestador / Jurídico</div>
          </div>
        </div>
        <div class="card card-white">
          <div class="card-header">
            <h3>A Configurar</h3>
            <v-icon name="sync" class="icon-gray" />
          </div>
          <div class="card-number">2</div>
          <div class="card-content">
            <div class="card-item blue">Folha de Pagamento / Abril 2025</div>
            <div class="card-item blue">Contrato Prestador / Jurídico</div>
          </div>
        </div>
        <div class="card card-white">
          <div class="card-header">
            <h3>Aguardando Resposta</h3>
            <v-icon name="sync" class="icon-gray" />
          </div>
          <div class="card-number">5</div>
          <div class="card-content">
            <div class="card-item blue">Folha de Pagamento / Abril 2025</div>
            <div class="card-item blue">Contrato Prestador / Jurídico</div>
            <div class="card-item blue">
              Relatório de Indicadores / Financeiro
            </div>
          </div>
        </div>
        <div class="card card-white">
          <div class="card-header">
            <h3>Últimos Acessos</h3>
            <v-icon name="sync" class="icon-gray" />
          </div>
          <div class="card-content recent-access">
            <div class="card-item blue clickable">
              Folha de Pagamento / Abril 2025
            </div>
            <div class="card-item blue clickable">
              Contrato Prestador / Jurídico
            </div>
            <div class="card-item blue clickable">
              Relatório de Indicadores / Financeiro
            </div>
            <div class="card-item blue clickable">
              Folha de Pagamento / Abril 2025
            </div>
            <div class="card-item blue clickable">
              Contrato Prestador / Jurídico
            </div>
            <div class="card-item blue clickable">
              Relatório de Indicadores / Financeiro
            </div>
          </div>
        </div>
      </div>
      <div class="search-section">
        <div class="search-card">
          <h2>Busca Rápida de Documento</h2>
          <p class="search-description">
            Encontre rapidamente documentos pelo título, número, unidade ou
            etapa. Use os filtros para refinar sua busca.
          </p>
          <div class="search-input-container">
            <v-icon name="search" class="search-icon" />
            <input
              type="text"
              placeholder="Buscar documentos..."
              class="search-input"
              v-model="searchQuery"
            />
            <button
              v-if="searchQuery"
              @click="clearSearch"
              class="clear-button"
            >
              <v-icon name="times" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "vue-awesome/icons/calendar";
import "vue-awesome/icons/bell";
import "vue-awesome/icons/chevron-down";
import "vue-awesome/icons/sync";
import "vue-awesome/icons/search";
import "vue-awesome/icons/times";

export default {
  name: "Dashboard",
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    clearSearch() {
      this.searchQuery = "";
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.dashboard-container {
  min-height: 100vh;
  background-color: #f9fafb;
  display: flex;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

/* Sidebar */
.sidebar {
  width: 64px;
  background-color: #2563eb;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 0;
}

.logo {
  width: 40px;
  height: 40px;
  background-color: #06b6d4;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
}

.logo span {
  color: white;
  font-weight: bold;
  font-size: 20px;
}

/* Main Content */
.main-content {
  flex: 1;
}

/* Header */
.header {
  background-color: white;
  border-bottom: 1px solid #e5e7eb;
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-left {
  display: flex;
  align-items: center;
  color: #6b7280;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 16px;
}

.notification {
  position: relative;
}

.badge {
  position: absolute;
  top: -4px;
  right: -4px;
  width: 12px;
  height: 12px;
  background-color: #ef4444;
  border-radius: 50%;
  color: white;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.user-profile {
  display: flex;
  align-items: center;
  gap: 8px;
}

.avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
}

.icon {
  width: 20px;
  height: 20px;
  margin-right: 8px;
}

.icon-white {
  width: 20px;
  height: 20px;
  color: white;
}

.icon-gray {
  width: 20px;
  height: 20px;
  color: #6b7280;
}

/* Welcome Section */
.welcome-section {
  padding: 24px;
}

.welcome-title {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}

.wave {
  font-size: 32px;
  margin-right: 8px;
}

.welcome-title h1 {
  font-size: 32px;
  font-weight: 600;
  color: #1f2937;
  margin: 0;
}

.welcome-subtitle {
  color: #6b7280;
  margin: 0;
}

/* Cards Grid */
.cards-grid {
  padding: 0 24px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
}

.card {
  border-radius: 12px;
  padding: 24px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
}

.card-yellow {
  background-color: #fbbf24;
  color: white;
}

.card-white {
  background-color: white;
  border: 1px solid #e5e7eb;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;
}

.card-header h3 {
  font-size: 18px;
  font-weight: 500;
  margin: 0;
  color: inherit;
}

.card-white .card-header h3 {
  color: #1f2937;
}

.card-number {
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 16px;
  color: inherit;
}

.card-white .card-number {
  color: #1f2937;
}

.card-content {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.card-item {
  font-size: 14px;
  line-height: 1.4;
}

.card-item.blue {
  color: #2563eb;
}

.card-item.clickable {
  cursor: pointer;
  transition: color 0.2s ease;
}

.card-item.clickable:hover {
  color: #1d4ed8;
}

.recent-access {
  gap: 12px;
}

/* Search Section */
.search-section {
  padding: 0 24px 24px;
}

.search-card {
  background-color: white;
  border-radius: 12px;
  padding: 24px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
}

.search-card h2 {
  font-size: 24px;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 8px 0;
}

.search-description {
  color: #6b7280;
  margin: 0 0 16px 0;
}

.search-input-container {
  position: relative;
}

.search-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #9ca3af;
  width: 20px;
  height: 20px;
}

.search-input {
  width: 100%;
  padding: 12px 12px 12px 44px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  transition: all 0.2s ease;
}

.search-input:focus {
  border-color: #2563eb;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}

.clear-button {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #9ca3af;
  cursor: pointer;
  padding: 4px;
  transition: color 0.2s ease;
}

.clear-button:hover {
  color: #6b7280;
}

/* Responsive */
@media (max-width: 768px) {
  .cards-grid {
    grid-template-columns: 1fr;
  }

  .header {
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
  }

  .welcome-title h1 {
    font-size: 24px;
  }
}
</style>
