<script lang="ts">
import { defineComponent } from 'vue'
import { useStarshipsForRootQuery } from './graphql/generated'

export default defineComponent({
  setup() {
    const { result, loading } = useStarshipsForRootQuery()
    return { result, loading }
  },
  computed: {
    starships() {
      return this.result?.allStarships?.edges?.map((e) => e?.node) ?? []
    }
  }
})
</script>

<template>
  <main class="container">
    <div v-if="loading">loading...</div>
    <h1 v-if="!loading">Star Wars Starships</h1>
    <p class="starship" v-for="starship in starships" :key="starship?.id">
      {{ starship?.name }}
    </p>
  </main>
</template>

<style scoped>
.container {
  display: flex;
  padding: 60px 0;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  text-align: center;
  font-family: Inter, sans-serif;
}

.starship {
  margin: 6px 0;
}
</style>
