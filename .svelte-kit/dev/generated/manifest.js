const c = [
	() => import("../../../src/routes/__layout.svelte"),
	() => import("../components/error.svelte"),
	() => import("../../../src/routes/index.svelte"),
	() => import("../../../src/routes/get-started.svelte"),
	() => import("../../../src/routes/company.svelte"),
	() => import("../../../src/routes/pricing.svelte"),
	() => import("../../../src/routes/product.svelte"),
	() => import("../../../src/routes/index2.svelte"),
	() => import("../../../src/routes/admin/index.svelte"),
	() => import("../../../src/routes/admin/cms/faqs/new.svelte"),
	() => import("../../../src/routes/admin/cms/faqs/[id]/edit.svelte"),
	() => import("../../../src/routes/admin/cms/faqs.svelte"),
	() => import("../../../src/routes/admin/cms.svelte"),
	() => import("../../../src/routes/style.svelte"),
	() => import("../../../src/routes/faq.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/get-started.svelte
	[/^\/get-started\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/callback.js
	[/^\/callback\/?$/],

	// src/routes/company.svelte
	[/^\/company\/?$/, [c[0], c[4]], [c[1]]],

	// src/routes/pricing.svelte
	[/^\/pricing\/?$/, [c[0], c[5]], [c[1]]],

	// src/routes/product.svelte
	[/^\/product\/?$/, [c[0], c[6]], [c[1]]],

	// src/routes/index2.svelte
	[/^\/index2\/?$/, [c[0], c[7]], [c[1]]],

	// src/routes/logout.js
	[/^\/logout\/?$/],

	// src/routes/admin/index.svelte
	[/^\/admin\/?$/, [c[0], c[8]], [c[1]]],

	// src/routes/admin/faqs.json.js
	[/^\/admin\/faqs\.json$/],

	// src/routes/admin/cms/faqs/new.svelte
	[/^\/admin\/cms\/faqs\/new\/?$/, [c[0], c[9]], [c[1]]],

	// src/routes/admin/cms/faqs/[id]/edit.svelte
	[/^\/admin\/cms\/faqs\/([^/]+?)\/edit\/?$/, [c[0], c[10]], [c[1]], (m) => ({ id: d(m[1])})],

	// src/routes/admin/cms/faqs.svelte
	[/^\/admin\/cms\/faqs\/?$/, [c[0], c[11]], [c[1]]],

	// src/routes/admin/cms.svelte
	[/^\/admin\/cms\/?$/, [c[0], c[12]], [c[1]]],

	// src/routes/login.js
	[/^\/login\/?$/],

	// src/routes/style.svelte
	[/^\/style\/?$/, [c[0], c[13]], [c[1]]],

	// src/routes/api/faqs/[id].json.js
	[/^\/api\/faqs\/([^/]+?)\.json$/],

	// src/routes/faq.svelte
	[/^\/faq\/?$/, [c[0], c[14]], [c[1]]]
];

export const fallback = [c[0](), c[1]()];