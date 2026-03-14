import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Datarun Architecture Docs',
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
