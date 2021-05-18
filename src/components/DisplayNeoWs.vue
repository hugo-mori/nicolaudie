<template>
	<div class="flex flex-col container mx-auto px-4 py-8">
		<div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
			<div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
				<div
					class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
				>
					<table class="min-w-full divide-y divide-gray-200">
						<thead class="bg-gray-50">
							<tr>
								<th
									scope="col"
									class="
										px-6
										py-3
										text-left text-xs
										font-medium
										text-gray-500
										uppercase
										tracking-wider
									"
								>
									Id
								</th>
								<th
									scope="col"
									class="
										px-6
										py-3
										text-left text-xs
										font-medium
										text-gray-500
										uppercase
										tracking-wider
									"
								>
									Name
								</th>
								<th
									scope="col"
									class="
										px-6
										py-3
										text-left text-xs
										font-medium
										text-gray-500
										uppercase
										tracking-wider
									"
								>
									Diam min (M)
								</th>
								<th
									scope="col"
									class="
										px-6
										py-3
										text-left text-xs
										font-medium
										text-gray-500
										uppercase
										tracking-wider
									"
								>
									Diam max (M)
								</th>
								<th
									scope="col"
									class="
										px-6
										py-3
										text-left text-xs
										font-medium
										text-gray-500
										uppercase
										tracking-wider
									"
								>
									Distance
								</th>
								<th
									scope="col"
									class="
										px-6
										py-3
										text-left text-xs
										font-medium
										text-gray-500
										uppercase
										tracking-wider
									"
								>
									Km/s
								</th>
								<th
									scope="col"
									class="
										px-6
										py-3
										text-left text-xs
										font-medium
										text-gray-500
										uppercase
										tracking-wider
									"
								>
									Dangerous
								</th>
							</tr>
						</thead>
						<tbody class="bg-white divide-y divide-gray-200">
							<tr v-for="asteroid in asteroids[Object.keys(asteroids)[0]]">
								<td class="px-6 py-4 whitespace-nowrap">
									<div class="text-sm text-gray-900">
										{{ asteroid.neo_reference_id }}
									</div>
								</td>
								<td class="px-6 py-4 whitespace-nowrap">
									<div class="text-sm text-gray-900">{{ asteroid.name }}</div>
								</td>
								<td class="px-6 py-4 whitespace-nowrap">
									<div class="text-sm text-gray-900">
										{{
											aroundNumber(
												asteroid.estimated_diameter.meters
													.estimated_diameter_min
											)
										}}
									</div>
								</td>
								<td class="px-6 py-4 whitespace-nowrap">
									<div class="text-sm text-gray-900">
										{{
											aroundNumber(
												asteroid.estimated_diameter.meters
													.estimated_diameter_max
											)
										}}
									</div>
								</td>
								<td class="px-6 py-4 whitespace-nowrap">
									<div class="text-sm text-gray-900">
										{{
											aroundNumber(
												asteroid.close_approach_data[0].miss_distance.kilometers
											)
										}}
									</div>
								</td>
								<td class="px-6 py-4 whitespace-nowrap">
									<div class="text-sm text-gray-900">
										{{
											aroundNumber(
												asteroid.close_approach_data[0].relative_velocity
													.kilometers_per_second
											)
										}}
									</div>
								</td>
								<td class="px-6 py-4 whitespace-nowrap">
									<span
										class="
											px-2
											inline-flex
											text-xs
											leading-5
											font-semibold
											rounded-full
											bg-green-100
											text-green-800
										"
									>
										{{ asteroid.is_potentially_hazardous_asteroid }}
									</span>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'DisplayNeoWs',
	props: {
		asteroids: Object,
	},
	methods: {
		aroundNumber(item) {
			return Math.round(item * 100) / 100
		},
	},
}
</script>
