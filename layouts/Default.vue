<template>
  <div class="flex flex-col min-h-screen">
    <!-- Основной контент -->
    <div class="flex-grow">
      <GradientBackground />
      <Topbar />
      <NuxtPage />
      <nav class="topbar w-full py-4 fixed top-0 z-50 flex items-center">
        <div class="flex items-center ml-4">
          <img src="/logo.svg" class="h-8 mobile-logo" />
        </div>
      </nav>
    </div>

    <!-- Нижняя часть страницы -->
    <div class="flex justify-between items-end p-4">
      <!-- Версия -->
      <div class="SecVersion bg-slate-800 rounded-xl">
        V. 2.0.0-β
      </div>

      <!-- Кнопка GitHub -->
      <div>
        <Button class="buttonGH font-medium" @click="github">
          <i class="mdi mdi-github"></i> Код на GitHub
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import GradientBackground from '~/components/GradientBackground.vue';
import Topbar from '~/components/Topbar.vue';

function github() {
  window.open('https://github.com/MATVEY-Git-Hub/auto.prikaz.2', '_blank');
}
</script>
