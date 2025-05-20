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
    <div class="btn-container">
      <BaseButton
        label="Atribuir a mim"
        iconSrc="/assets/icons/hand.svg"
        variant="outlined"
        textColor="#28a745"
        borderColor="var(--color-primary-green)"
      />

      <BaseButton
        label="Aprovar"
        iconSrc="/assets/icons/check.svg"
        variant="filled"
        bgColor="#43c48e"
        textColor="#fff"
      />

      <BaseButton
        label="Agrupar"
        variant="filled"
        bgColor="var(--color-primary-blue)"
        textColor="#fff"
      />

      <BaseButton
        label="Salvar"
        variant="filled"
        bgColor="var(--color-primary-green)"
        textColor="#fff"
      />

      <BaseButton
        label="Cancelar"
        variant="outlined"
        textColor="var(--color-primary-blue)"
        borderColor="var(--color-primary-blue)"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style scoped>
.home-page {
  padding: 30px;
  max-width: 1200px;
}

.btn-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  gap: 10px;
  margin-top: 24px;
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
  background: #0470ae;
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
  color: #0078c8;
}

.card-icon.warning {
  background: rgba(255, 193, 7, 0.1);
}

.card-icon.warning i {
  color: #ffc107;
}

.card-icon.success {
  background: rgba(26, 130, 9, 0.1);
}

.card-icon.success i {
  color: #1a8209;
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
  color: #0078c8;
  margin-bottom: 8px;
}

.card:nth-child(1) .card-count {
  color: #ffc107;
}

.card:nth-child(3) .card-count {
  color: #1a8209;
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
  font-family: "Inter", sans-serif;
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
  border: 1.5px solid #37c989;
  color: #37c989;
  fill: #37c989;
}

.btn-outline .btn-icon {
  filter: none;
}

/* botão verde */
.btn-success {
  background: #37c989;
  color: #fff;
  fill: #fff;
}

/* botão azul sólido */
.btn-primary {
  background: #1a82d9;
  color: #fff;
}
</style>
