export type Project = {
	title: string;
	slug: {
		_type: 'slug';
		current: string;
	};
	publishedAt: string;
	image?: {
		_type: 'image';
		asset: {
			_ref: string;
			_type: 'reference';
		};
	};
	category: 'graphic-design' | 'ux' | 'ui';
	body?: Array<{
		_type: 'block' | 'image';
		// For blocks
		children?: Array<{
			_type: string;
			text?: string;
			marks?: string[];
		}>;
		// For images
		asset?: {
			_ref: string;
			_type: 'reference';
		};
	}>;
};
