export async function load() {
	const imports = import.meta.glob('/src/content/images/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp}', {
		import: 'default',
		eager: true,
		query: {
			enhanced: true,
			w: '2000;1200;800'
		}
	});

	const entries = Object.entries(imports);
	entries.reverse();

	const images = entries.map(([path, module]) => module);

	return {
		images,
		meta: {
			title: 'pics',
			description: 'just some random photos.'
		}
	};
}
