<template>
	<div class="relative bg-nicolaudie-first overflow-hidden">
		<div class="max-w-7xl mx-auto">
			<div
				class="
					relative
					pb-8
					bg-nicolaudie-first
					sm:pb-16
					md:pb-20
					lg:max-w-2xl
					lg:w-full
					lg:pb-28
					xl:pb-32
				"
			>
				<main
					class="
						mt-10
						mx-auto
						max-w-7xl
						px-4
						sm:mt-12
						sm:px-6
						md:mt-16
						lg:mt-20
						lg:px-8
						xl:mt-28
					"
				>
					<div class="sm:text-center lg:text-left">
						<h1
							class="
								text-4xl
								tracking-tight
								font-black
								text-white
								sm:text-5xl
								md:text-6xl
							"
						>
							<span
								class="
									block
									xl:inline
									bg-gradient-to-r
									text-transparent
									bg-clip-text
									from-nicolaudie-second
									to-blue-500
								"
								>Nouvelle génération</span
							>
							{{ ' ' }}
							<span
								class="
									block
									xl:inline
									bg-gradient-to-r
									text-transparent
									bg-clip-text
									from-blue-500
									to-nicolaudie-second
								"
								>d'interface SLESA</span
							>
						</h1>
						<p
							class="
								mt-3
								text-base text-white
								sm:mt-5
								sm:text-lg
								sm:max-w-xl
								sm:mx-auto
								md:mt-5
								md:text-xl
								lg:mx-0
							"
						>
							{{ chucknorris }}
						</p>
						<div
							class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
						>
							<div class="rounded-md shadow">
								<a
									href="#"
									class="
										w-full
										flex
										items-center
										justify-center
										px-8
										py-3
										border border-transparent
										text-base
										font-medium
										rounded-md
										text-white
										bg-nicolaudie-second
										md:py-4
										md:text-lg
										md:px-10
									"
								>
									Commencer
								</a>
							</div>
							<div class="mt-3 sm:mt-0 sm:ml-3">
								<a
									href="#"
									class="
										w-full
										flex
										items-center
										justify-center
										px-8
										py-3
										border border-transparent
										text-base
										font-medium
										rounded-md
										text-nicolaudie-second
										bg-white
										md:py-4
										md:text-lg
										md:px-10
									"
								>
									Live demo
								</a>
							</div>
						</div>
					</div>
				</main>
			</div>
		</div>
		<div
			class="
				flex
				items-center
				justify-center
				lg:absolute
				lg:inset-y-28 lg:inset-x-2/3
				lg:right-0
			"
		>
			<RolexWatch />
		</div>
	</div>
</template>

<script>
import RolexWatch from '@/components/RolexWatch.vue'
import axios from 'axios'

const urlChuckNorris = 'https://api.icndb.com/jokes/random'

export default {
	name: 'Home',
	components: {
		RolexWatch,
	},
	data() {
		return {
			chucknorris: null,
		}
	},
	mounted() {
		this.getChuckNorris()

		window.setInterval(() => {
			this.getChuckNorris()
		}, 2000)
	},
	methods: {
		getChuckNorris() {
			this.$nextTick(() => {
				axios.get(urlChuckNorris).then((response) => {
					this.chucknorris = response.data.value.joke
				})
			})
		},
	},
}
</script>
