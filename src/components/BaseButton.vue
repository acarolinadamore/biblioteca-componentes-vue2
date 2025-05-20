<template>
  <button class="base-button" @click="$emit('click')" :style="buttonStyle">
    <span class="button-content">
      <i v-if="icon" :class="['lni', icon, 'btn-icon']"></i>
      <img v-else-if="iconSrc" :src="iconSrc" class="btn-icon-img" alt="icon" />
      <span class="label">{{ label }}</span>
    </span>
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    label: { type: String, required: true },
    icon: { type: String, default: "" },
    iconSrc: { type: String, default: "" },
    bgColor: { type: String, default: "" },
    textColor: { type: String, default: "" },
    borderColor: { type: String, default: "" },
    height: { type: String, default: "42px" },
    variant: {
      type: String,
      default: "filled",
      validator: (val) => ["filled", "outlined"].includes(val),
    },
  },
  computed: {
    buttonStyle() {
      return {
        minWidth: "180px",
        height: this.height,
        backgroundColor:
          this.variant === "outlined" ? "transparent" : this.bgColor,
        color: this.textColor,
        border:
          this.variant === "outlined"
            ? `1px solid ${this.borderColor || this.textColor}`
            : "none",
      };
    },
  },
};
</script>

<style scoped>
.base-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-weight: 400;
  font-size: 14px;
  cursor: pointer;
  font-family: "Inter", sans-serif;
  padding: 0 20px;
  min-width: 180px;
  height: 42px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: transform 0.1s ease, background-color 0.2s ease,
    box-shadow 0.2s ease;
}

.button-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
}

.btn-icon {
  font-size: 18px;
}

.btn-icon-img {
  width: 18px;
  height: 18px;
}

.label {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.base-button:active {
  transform: scale(0.97);
  transition: transform 0.1s ease;
}

.base-button:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
}

.base-button:active {
  transform: scale(0.97);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}
</style>
