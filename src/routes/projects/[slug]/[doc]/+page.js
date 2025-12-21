import { error } from '@sveltejs/kit';

export async function load({ params }) {
	const { slug, doc } = params;

	try {
		const modules = import.meta.glob('/src/content/projects/*/*.md');
		let match = null;

		for (const [path, resolver] of Object.entries(modules)) {
			if (path.includes(`/${slug}/${doc}.md`)) {
				match = resolver;
				break;
			}
		}

		if (!match) {
			throw error(404, 'Document not found');
		}

		const document = await match();

		return {
			document,
			slug,
			docType: doc,
			meta: {
				title: `${slug} - ${doc.replace('-', ' ')}`,
				description: `${doc.replace('-', ' ')} for ${slug}`
			}
		};
	} catch (e) {
		throw error(404, 'Document not found');
	}
}
