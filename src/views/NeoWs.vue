<template>
	<div class="bg-nicolaudie-first">
		<DisplayNeoWs :asteroids="asteroids" />
	</div>
</template>

<script>
import DisplayNeoWs from '@/components/DisplayNeoWs.vue'
import axios from 'axios'

const urlNasa = 'https://api.nasa.gov/neo/rest/v1/feed'

export default {
	name: 'NeoWs',
	components: {
		DisplayNeoWs,
	},
	data() {
		return {
			asteroids: {},
		}
	},
	mounted() {
		const date = new Date()
		const years = date.getFullYear()
		const month = date.getMonth()
		const day = date.getDate()
		this.result = `${years}-${month}-${day}`

		axios
			.get(
				`${urlNasa}?start_date=${years}-${month}-${day}&end_date=${years}-${month}-${day}&api_key=YThtgVun9z7SlrTDGZIhdZ0i3LhJ5ZylKAdQTYif`
			)
			.then((response) => {
				this.asteroids = response.data.near_earth_objects
			})
	},
}
</script>
