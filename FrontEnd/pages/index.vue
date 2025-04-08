<template>
    <div class="q-pa-md">
      <q-btn color="negative" @click="changeState">click on me</q-btn>
      <q-dialog v-model="state">
        <q-card style="width: 300px">
          <q-card-section>
            <div class="text-h6">test</div>
          </q-card-section>
        </q-card>
      </q-dialog>
    </div>
  </template>
  
  <script setup lang="ts">
  
  const state = ref<boolean>(false)

  function changeState() {
     state.value = !state.value
  }
  </script>
  