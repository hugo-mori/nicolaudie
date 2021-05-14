<template>
  <div class="home bg-nicolaudie-first">
    <DisplayMedia :medias="$store.state.mediasInfo" />
  </div>
</template>

<script>
import DisplayMedia from '@/components/DisplayMedia.vue'

export default {
  name: 'Medias',
  components: {
    DisplayMedia
  },
}
</script>
