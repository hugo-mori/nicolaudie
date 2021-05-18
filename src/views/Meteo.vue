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
								>Retrouvez les</span
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
								>prévision Météo</span
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
							Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
							lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
							fugiat aliqua.
						</p>
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
			<DisplayMeteo :meteo="$store.state.meteoInfo" />
		</div>
	</div>
</template>

<script>
import DisplayMeteo from '@/components/DisplayMeteo.vue'

export default {
	name: 'Meteo',
	components: {
		DisplayMeteo,
	},
}
</script>
