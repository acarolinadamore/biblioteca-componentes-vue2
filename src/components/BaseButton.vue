<template>
  <button
    :class="['base-button', variantClass]"
    @click="$emit('click')"
    :style="{ width: width, height: height }"
  >
    <span class="button-content">
      <i v-if="icon" :class="['lni', icon]"></i>
      <span class="label">{{ label }}</span>
    </span>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    label: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      default: ''
    },
    variant: {
      type: String,
      default: 'filled',
      validator: value => ['filled', 'outlined', 'primary', 'success'].includes(value)
    },
    width: {
      type: String,
      default: '180px'
    },
    height: {
      type: String,
      default: '45px'
    }
  },
  computed: {
    variantClass() {
      return {
        filled: 'btn-filled',
        outlined: 'btn-outlined',
        primary: 'btn-primary',
        success: 'btn-success'
      }[this.variant]
    }
  }
}
</script>

<style scoped>
.base-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-family: 'Inter', sans-serif;
  padding: 0 20px;
}

.button-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
}

.lni {
  font-size: 18px;
}

.label {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.btn-filled {
  background-color: #1A8209;
  color: white;
}

.btn-filled:hover {
  background-color: #156d07;
}

.btn-outlined {
  background-color: transparent;
  color: #1A8209;
  border: 2px solid #1A8209;
}

.btn-outlined:hover {
  background-color: rgba(26, 130, 9, 0.1);
}

.btn-primary {
  background-color: #0078C8;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.btn-primary:hover {
  background-color: rgba(0, 120, 200, 0.8);
}

.btn-success {
  background-color: #1A8209;
  color: white;
}

.btn-success:hover {
  background-color: #156d07;
}
</style>