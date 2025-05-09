import { client } from '$lib/sanity/client';
import type { PageServerLoad } from './$types';
import type { Project } from '$lib/types/ProjectType';
import imageUrlBuilder from '@sanity/image-url';

export const load: PageServerLoad = async ({ params }) => {
	const slug = params;

	const query = `*[_type == "project" && slug.current == $slug][0]`;

	const project: Project = await client.fetch(query, { slug: slug.slug });

	if (!project) {
		throw new Error('Project not found');
	}

	if (project) {
		if (project.image?.asset) {
			const imageUrl = imageUrlBuilder(client).image(project.image.asset).url();
			project.image.asset = {
				_ref: imageUrl,
				_type: 'reference'
			};
		}
	}

	console.log('Project:', project);

	return {
		project: project
	};
};
