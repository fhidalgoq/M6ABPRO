<template>
  <Navbar />
  <WelcomeModal v-if="!userName" />
  <router-view />
  <!-- Aquí se renderizarán los componentes de las vistas (HomePage, CatalogPage, AdminPage) -->
  <Footer />
</template>

<script setup>
import { ref, onMounted } from "vue";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import WelcomeModal from "./components/WelcomeModal.vue";

const userName = ref("");

const checkUserName = () => {
  const nombre = localStorage.getItem("nombre");
  const apellido = localStorage.getItem("apellido");
  if (nombre && apellido) {
    userName.value = `${nombre} ${apellido}`;
  } else {
    userName.value = "";
  }
};

onMounted(() => {
  checkUserName();
  window.addEventListener("storage", checkUserName);
});
</script>

<style scoped>
/* Estilos globales de la aplicación si son necesarios */
</style>
