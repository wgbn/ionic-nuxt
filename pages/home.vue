<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Home</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="router.push('/about')">about</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <h1>Home</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima iure, in
        nemo repudiandae eligendi unde cum adipisci eius architecto praesentium
        natus, non totam reprehenderit odio, sit error id modi consequuntur.
      </p>
      <ion-button color="danger">a button</ion-button>
    </ion-content>
  </ion-page>
</template>

<style scoped></style>

<script lang="ts" setup>
definePageMeta({
  alias: ["/"],
});

const router = useRouter();
</script>
