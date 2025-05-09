<template>
  <nav class="sidebar" :class="{ collapsed: !isExpanded }" @click="handleSidebarClick">
    <div class="sidebar-container">
      <!-- Header -->
      <div class="header">
        <div class="top-bar">
          <div class="logo" :class="{ center: !isExpanded }">
            <img :src="isExpanded ? logoPath : logoMiniPath" alt="GeoDoc Logo" class="logo-image" />
          </div>
          <button class="toggle-btn" v-if="isExpanded" @click.stop="toggleSidebar">
            <i class="lni lni-chevron-left"></i>
          </button>
        </div>
        <button class="new-doc-btn" :class="{ compact: !isExpanded }">
          <i class="lni lni-pencil"></i>
          <span v-if="isExpanded">Novo Documento</span>
        </button>
        <div class="divider special"></div>
      </div>

<!-- Menu -->
<div class="menu">
  <div class="section">
    <h2 class="section-title" v-if="isExpanded">PRINCIPAL</h2>
    <ul>
      <li @click="navigate('caixa-entrada')">
        <img src="/assets/icons/inbox.svg" alt="Caixa de Entrada" class="icon" />
        <span v-if="isExpanded">Caixa de Entrada</span>
      </li>
      <li @click="navigate('pendentes')" class="highlight">
        <img src="/assets/icons/warning.svg" alt="Pendentes" class="icon icon-warning" />
        <span v-if="isExpanded">Pendentes</span>
        <div class="notification" v-if="isExpanded">2</div>
      </li>
      <li @click="navigate('processos')">
        <img src="/assets/icons/circle.svg" alt="Processos" class="icon" />
        <span v-if="isExpanded">Processos</span>
      </li>
      <li @click="navigate('documentos')">
        <img src="/assets/icons/document.svg" alt="Documentos" class="icon" />
        <span v-if="isExpanded">Documentos</span>
      </li>
      <li @click="navigate('pasta-digital')">
        <img src="/assets/icons/folder.svg" alt="Pasta Digital" class="icon" />
        <span v-if="isExpanded">Pasta Digital</span>
      </li>
    </ul>
  </div>


        <div class="divider"></div>

        <div class="section">
          <h2 class="section-title" v-if="isExpanded">ANÁLISE</h2>
          <ul>
           <li @click="navigate('relatorios')">
  <img src="/assets/icons/bar-chart.svg" alt="Relatórios" class="icon" />
  <span v-if="isExpanded">Relatórios</span>
</li>
<li @click="navigate('paineis-bi')">
  <img src="/assets/icons/dashboard.svg" alt="Painéis BI" class="icon" />
  <span v-if="isExpanded">Painéis BI</span>
</li>
          </ul>
        </div>
        
        <div class="divider"></div>

        <div class="section">
          <h2 class="section-title" v-if="isExpanded">ANÁLISE</h2>
          <ul>
            <li @click="navigate('relatorios')">
  <img src="/assets/icons/bar-chart.svg" alt="Relatórios" class="icon" />
  <span v-if="isExpanded">Relatórios</span>
</li>
<li @click="navigate('paineis-bi')">
  <img src="/assets/icons/dashboard.svg" alt="Painéis BI" class="icon" />
  <span v-if="isExpanded">Painéis BI</span>
</li>
          </ul>
        </div>

        <div class="divider"></div>

        <div class="section">
          <h2 class="section-title" v-if="isExpanded">CONFIGURAÇÕES</h2>
          <ul>
           <li @click="navigate('cadastrar')">
      <img src="/assets/icons/plus.svg" alt="Cadastrar" class="icon" />
      <span v-if="isExpanded">Cadastrar</span>
    </li>
    <li @click="navigate('impressora')">
      <img src="/assets/icons/printer.svg" alt="Impressora" class="icon" />
      <span v-if="isExpanded">Impressora</span>
    </li>
          </ul>
        </div>
      </div>

      <!-- Rodapé -->
      <div class="footer" v-if="isExpanded">
        <div class="footer-logo">
          <img :src="grupoImagetechPath" alt="Grupo Imagetech" class="grupo-image" />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'SidebarMenu',
  data() {
    return {
      logoPath: '/assets/logo.svg',
      logoMiniPath: '/assets/g.svg',
      grupoImagetechPath: '/assets/grupoimagetech.png',
      isExpanded: true
    }
  },
 methods: {
  toggleSidebar() {
    this.isExpanded = false
  },
  expandSidebar() {
    if (!this.isExpanded) {
      this.isExpanded = true
    }
  },
  handleSidebarClick(event) {
    // só expande se estiver colapsado e o clique foi dentro da sidebar
    if (!this.isExpanded) {
      this.expandSidebar()
    }
  },
  navigate(page) {
    this.$emit('navigate', page)
  }
}

}
</script>

<style scoped>
.sidebar {
  width: 280px;
  height: 100vh;
  background: linear-gradient(180deg, #004B9D 0%, #0078C8 100%);
  color: #D7DADD;
  font-family: 'Inter', sans-serif;
  padding: 20px 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  transition: width 0.3s ease;
  overflow: hidden;
}

.sidebar.collapsed {
  width: 60px;
}

.sidebar-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0 10px;
}

.header {
  margin-bottom: 10px;
  padding: 0 10px;
}

.top-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo.center {
  display: flex;
  justify-content: center;
  width: 100%;
}

.logo-image {
  height: 30px;
  width: auto;
}

.toggle-btn {
  background: transparent;
  border: none;
  color: #fff;
  font-size: 22px;
  cursor: pointer;
  padding: 0;
}


.divider.special {
  background: rgba(146, 218, 255, 0.2);
  margin-top: 24px;
}

.new-doc-btn {
  background: #0470AE;
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
  transition: all 0.2s ease;
  padding: 0 20px;
  height: 45px;
  margin: 24px 0 0;
  width: 100%;
}

.new-doc-btn.compact {
  width: 45px;
  height: 45px;
  padding: 0;
  margin: 24px auto 0;
}

.new-doc-btn.compact i {
  font-size: 16px;
  margin: 0;
}

.sidebar.collapsed ul {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px; 
}

.sidebar.collapsed li {
  justify-content: center;
  padding: 10px 0;
  width: 100%;
}

.sidebar.collapsed li i {
  margin: 0 auto;
  text-align: center;
}

.sidebar.collapsed li span,
.sidebar.collapsed li .arrow,
.sidebar.collapsed li .notification {
  display: none;
}

.menu {
  flex-grow: 1;
  overflow-x: hidden;
   overflow-y: auto;
  padding: 0 10px;
  scrollbar-width: none; 
}

.menu::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Edge */
}

.section {
  margin-bottom: 25px;
}

.section-title {
  font-size: 12px;
  font-weight: 700;
  line-height: 24px;
  text-transform: uppercase;
  color: #D7DADD;
  margin-bottom: 10px;
  padding-left: 10px;
  letter-spacing: 0.5px;
  font-family: 'Inter', sans-serif;
}

.divider {
  height: 1px;
  background: rgba(215, 218, 221, 0.2);
  margin: 15px 0;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.icon {
  width: 18px;
  height: 18px;
  margin-right: 12px;
  vertical-align: middle;
  display: inline-block;
  flex-shrink: 0;
}

.icon-warning {
  width: 18px;
  height: 18px;
  margin-left: -2px; /* pequeno ajuste de alinhamento lateral */
  margin-right: 12px;
  vertical-align: middle;
  flex-shrink: 0;
}

li {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px 12px;
  margin-bottom: 4px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 14px;
  line-height: 24px;
}

.sidebar.collapsed li {
  justify-content: center;
  padding-left: 0;
}

li:hover {
  background: rgba(255, 255, 255, 0.1);
}

li span {
  display: inline-block;
  line-height: 1;
  position: relative;
  top: 1px;
}
.arrow {
  margin-left: auto;
  font-size: 14px;
  color: rgba(215, 218, 221, 0.5);
}

.lni-chevron-left {
  font-size: 18px;
}

.highlight {
  color: #FFC107;
  font-weight: 700;
}

.highlight i {
  color: #FFC107;
}

.notification {
  background-color: #FFC107;
  color: #004B9D;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
  margin-left: auto;
}

.footer {
  margin-top: auto;
  text-align: center;
  font-size: 12px;
  color: rgba(215, 218, 221, 0.7);
  padding: 20px 10px 0;
}

.footer-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;
}

.sidebar.collapsed .footer {
  display: none;
}

.sidebar.collapsed li {
  justify-content: center;
  padding-left: 0;
}

.sidebar.collapsed li i {
  margin: 0;
}

.sidebar.collapsed li:hover::after {
  content: attr(title);
  position: absolute;
  left: 70px;
  background: rgba(0,0,0,0.6);
  color: #fff;
  padding: 4px 8px;
  border-radius: 4px;
  white-space: nowrap;
}

.sidebar.collapsed .header {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
}

.sidebar.collapsed .top-bar {
  justify-content: center;
}
</style>
