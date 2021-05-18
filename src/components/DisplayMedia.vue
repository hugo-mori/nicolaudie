<template>
	<div class="py-12 bg-nicolaudie-first">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="lg:text-center">
				<h2
					class="
						text-base text-nicolaudie-second
						font-semibold
						tracking-wide
						uppercase
					"
				>
					Medias
				</h2>
				<p
					class="
						mt-2
						text-3xl
						leading-8
						font-extrabold
						tracking-tight
						text-white
						sm:text-4xl
					"
				>
					Actualités en continu et info en direct
				</p>
				<p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
					Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
					voluptatum cupiditate veritatis in accusamus quisquam.
				</p>
			</div>

			<div class="mt-10">
				<dl
					class="
						space-y-10
						md:space-y-0
						md:grid md:grid-cols-2
						md:gap-x-8 md:gap-y-10
					"
				>
					<div v-for="media in medias" :key="media.title" class="relative">
						<a :href="media.url">
							<dt>
								<p
									class="
										ml-16
										text-lg
										leading-6
										font-medium
										text-nicolaudie-second
									"
								>
									{{ media.title }}
								</p>
							</dt>
							<dd class="mt-2 ml-16 text-base text-gray-400">
								{{ media.description }}
							</dd>
						</a>
					</div>
				</dl>
			</div>
		</div>
	</div>
</template>

<script>
import {
	AnnotationIcon,
	GlobeAltIcon,
	LightningBoltIcon,
	ScaleIcon,
} from '@heroicons/vue/outline'

export default {
	name: 'DisplayMedia',
	props: {
		medias: Array,
	},
}
</script>
