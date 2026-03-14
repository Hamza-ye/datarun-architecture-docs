import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mermaid from 'astro-mermaid';

// https://astro.build/config
export default defineConfig({
	site: 'https://hamza-ye.github.io',
	base: '/datarun-architecture-docs/',
	trailingSlash: 'always',
	prefetch: {
		prefetchAll: true,
		defaultStrategy: 'viewport',
	},
	integrations: [
		mermaid(),
		starlight({
			title: 'Datarun Architecture Docs',
			expressiveCode: {
				shikiConfig: {
					// Add mermaid to excluded languages to let astro-mermaid handle it
					langs: [],
				},
			},
			sidebar: [
				{
					label: 'Architecture',
					autogenerate: { directory: 'architecture' },
				},
				{
					label: 'Governance',
					autogenerate: { directory: 'governance' },
				},
				{
					label: 'ADRs',
					autogenerate: { directory: 'adrs' },
				},
				{
					label: 'RFCs',
					autogenerate: { directory: 'rfcs' },
				},
				{
					label: 'DatarunAPI',
					autogenerate: { directory: 'datarunapi' },
				},
				{
					label: 'Archive',
					collapsed: true,
					items: [
						{ label: 'Ideas', autogenerate: { directory: 'ideas' } },
						{ label: 'Deprecated', autogenerate: { directory: 'deprecated' } },
					],
				},
			],
		}),
	],
});
