<template>
	<Default>
		<router-view />
	</Default>
</template>

<script>
import Default from '@/layouts/Default.vue'

export default {
	name: 'Home',
	components: {
		Default,
	},
}
</script>
