<template>
  <header class="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
    <div class="flex items-center justify-end">
      <div class="flex items-center space-x-4">               
        </div>        
        <div class="flex items-center space-x-3">
          <div class="profile-image">
            <img 
              src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face" 
              alt="Ana Carolina" 
              class="w-8 h-8 rounded-full object-cover"
            >
          </div>
          <span class="text-gray-700 font-medium">Ana Carolina</span>
          <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
          </svg>
        </div>
      </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent'
}
</script>

<style scoped>
.bg-white { 
  background-color: white; 
}

.shadow-sm { 
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); 
}

.border-b { 
  border-bottom-width: 1px; 
}

.border-gray-200 { 
  border-color: #e5e7eb; 
}

.px-6 { 
  padding-left: 1.5rem; 
  padding-right: 1.5rem; 
}

.py-4 { 
  padding-top: 1rem; 
  padding-bottom: 1rem; 
}

.flex { 
  display: flex; 
}

.items-center { 
  align-items: center; 
}

.justify-end { 
  justify-content: flex-end; 
}

.space-x-3 > * + * { 
  margin-left: 0.75rem; 
}

.space-x-4 > * + * { 
  margin-left: 1rem; 
}

.p-2 { 
  padding: 0.5rem; 
}

.text-gray-600 { 
  color: #4b5563; 
}

.text-gray-700 { 
  color: #374151; 
}

.text-gray-500 { 
  color: #6b7280; 
}

.hover\:text-gray-800:hover { 
  color: #1f2937; 
}

.font-medium { 
  font-weight: 500; 
}

.w-4 { 
  width: 1rem; 
}

.h-4 { 
  height: 1rem; 
}

.w-6 { 
  width: 1.5rem; 
}

.h-6 { 
  height: 1.5rem; 
}

.w-8 { 
  width: 2rem; 
}

.h-8 { 
  height: 2rem; 
}

.rounded-full { 
  border-radius: 9999px; 
}

.object-cover { 
  object-fit: cover; 
}

.relative { 
  position: relative; 
}

.notification-badge {
  position: absolute;
  top: -2px;
  right: -2px;
  background-color: #ef4444;
  color: white;
  font-size: 0.75rem;
  font-weight: 500;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.profile-image {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>