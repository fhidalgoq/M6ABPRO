<template>
  <nav class="navbar navbar-expand-lg bg-dark">
    <div class="container px-5">
      <a class="navbar-brand text-white" href="/">Tecno Chile</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active text-white" aria-current="page" href="/"
              >Inicio</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="/#destacados"
              >Productos Destacados</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="/catalogo">Tienda</a>
          </li>
          <li class="nav-item">
            <p class="nav-link text-white" id="mensajeBienvenida"></p>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="/admin">Administración</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
// Lógica para el mensaje de bienvenida se moverá a un store de Pinia o a un componente de WelcomeModal
</script>

<style scoped>
/* Puedes añadir estilos específicos si es necesario, o usar los de Bootstrap */
</style>
