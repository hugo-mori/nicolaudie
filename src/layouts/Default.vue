<template>
  <Header />

  <slot />

  <Footer />
</template>

<script>
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'

export default {
  components: {
    Footer,
    Header,
  },
  mounted() {
    this.$store.dispatch('getInfo')
  },
}
</script>
