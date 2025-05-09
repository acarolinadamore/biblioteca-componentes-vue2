<template>
  <div class="home-page">
    <h1 class="title">Bem-vindo ao GeoDoc</h1>
    <p class="subtitle">Sistema de documentação do Grupo Imagetech</p>
   
    <div class="cards-container">
      <div class="card">
        <div class="card-icon warning">
          <i class="lni lni-warning"></i>
        </div>
        <div class="card-content">
          <h3>Pendentes</h3>
          <p class="card-count">2</p>
          <p class="card-description">Documentos aguardando aprovação</p>
        </div>
      </div>
      
      <div class="card">
        <div class="card-icon">
          <i class="lni lni-files"></i>
        </div>
        <div class="card-content">
          <h3>Documentos</h3>
          <p class="card-count">15</p>
          <p class="card-description">Total de documentos no sistema</p>
        </div>
      </div>
      
      <div class="card">
        <div class="card-icon success">
          <i class="lni lni-folder"></i>
        </div>
        <div class="card-content">
          <h3>Processos</h3>
          <p class="card-count">8</p>
          <p class="card-description">Processos em andamento</p>
        </div>
      </div>
    </div>

        <div class="btn-group">
  <button class="btn-outline">
    <img src="/assets/icons/hand.svg" class="btn-icon" alt="Atribuir" />
    Atribuir a mim
  </button>
  <button class="btn-success">
    <img src="/assets/icons/check.svg" class="btn-icon" alt="Aprovar" />
    Aprovar
  </button>
  <button class="btn-primary">
    Agrupar
  </button>
</div>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style scoped>
.home-page {
  padding: 30px;
  max-width: 1200px;
}

.title {
  font-size: 28px;
  font-weight: 700;
  color: #333;
  margin-bottom: 8px;
}

.subtitle {
  font-size: 16px;
  color: #666;
  margin-bottom: 30px;
}

.action-section {
  margin-bottom: 40px;
}

.new-doc-btn {
  background: #0470AE;
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
  transition: all 0.2s ease;
  padding: 0 20px;
  height: 45px;
  width: 250px;
}

.new-doc-btn i {
  font-size: 16px;
}

.new-doc-btn:hover {
  background: #035c8d;
}


.new-doc-btn i {
  font-size: 18px;
}

.cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.card {
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  padding: 20px;
  display: flex;
  align-items: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.card-icon {
  background: rgba(0, 120, 200, 0.1);
  width: 60px;
  height: 60px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
}

.card-icon i {
  font-size: 28px;
  color: #0078C8;
}

.card-icon.warning {
  background: rgba(255, 193, 7, 0.1);
}

.card-icon.warning i {
  color: #FFC107;
}

.card-icon.success {
  background: rgba(26, 130, 9, 0.1);
}

.card-icon.success i {
  color: #1A8209;
}

.card-content {
  flex: 1;
}

.card-content h3 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #333;
}

.card-count {
  font-size: 28px;
  font-weight: 700;
  color: #0078C8;
  margin-bottom: 8px;
}

.card:nth-child(1) .card-count {
  color: #FFC107;
}

.card:nth-child(3) .card-count {
  color: #1A8209;
}

.card-description {
  font-size: 14px;
  color: #666;
}

/*botoes*/
.btn-group {
  display: flex;
  gap: 12px;
  margin: 200px 0;
}

button {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  height: 45px;
  width: 180px;
  border-radius: 8px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  position: relative;
  top: 1px; /* ajuste fino vertical */
}

/* botão outline */
.btn-outline {
  background: #fff;
  border: 1.5px solid #37C989;
  color: #37C989;
  fill: #37C989;
}

.btn-outline .btn-icon {
  filter: none;
}

/* botão verde */
.btn-success {
  background: #37C989;
  color: #fff;
  fill: #fff;
}

/* botão azul sólido */
.btn-primary {
  background: #1A82D9;
  color: #fff;
}



</style>