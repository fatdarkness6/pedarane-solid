<template>
    <div class="q-pa-md">
      <q-btn label="Click Me" color="primary" @click="showAlert" />
      <q-dialog v-model="dialog">
        <q-card>
          <q-card-section>
            <div class="text-h6">Hello Quasar!</div>
          </q-card-section>
          <q-card-actions align="right">
            <q-btn flat label="Close" color="primary" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const dialog = ref(false)
  const showAlert = () => {
    dialog.value = true
  }
  </script>
  