<template>
    <div>
      <GradientBackground />
      <Topbar />
        <NuxtPage />
        <nav class="topbar w-full py-4 fixed top-0 z-50 flex items-center">
            <div class="flex items-center ml-4">
                <img src="/public/logo.svg" class="h-8 mobile-logo" />
            </div>
        </nav>
      <!-- Кнопка GitHub -->
      <div class="absolute bottom-0 right-0 mb-4 mr-4">
        <Button class="buttonGH font-medium" @click="github">
          <i class="mdi mdi-github"></i> Код на GitHub
        </Button>
      </div>

      <!-- Версия -->
      <div class="absolute bottom-0 left-0 mb-4 ml-4">
        <section class="SecVersion bg-slate-800 rounded-xl">
          V. 2.0.0-β
        </section>
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
  