import { client } from '$lib/sanity/client';
import type { PageServerLoad } from './$types';
import type { Project } from '$lib/types/ProjectType';
import imageUrlBuilder from '@sanity/image-url';

export const load: PageServerLoad = async () => {
	const query = `*[_type == "project" && category == 'ui']`;

	const projects: Project[] = await client.fetch(query);

	if (!projects) {
		throw new Error('Project not found');
	}

	if (projects) {
		projects.forEach((project) => {
			if (project.image?.asset) {
				const imageUrl = imageUrlBuilder(client).image(project.image.asset).url();
				project.image.asset = {
					_ref: imageUrl,
					_type: 'reference'
				};
			}
		});
	}

	return {
		projects: projects
	};
};
