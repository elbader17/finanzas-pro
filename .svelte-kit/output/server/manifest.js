export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["pwa-192x192.png","pwa-512x512.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.Bp27j-sL.js",app:"_app/immutable/entry/app.CtLCSvxz.js",imports:["_app/immutable/entry/start.Bp27j-sL.js","_app/immutable/chunks/CnemhF8w.js","_app/immutable/chunks/BTkWTcnU.js","_app/immutable/entry/app.CtLCSvxz.js","_app/immutable/chunks/BcFri5ME.js","_app/immutable/chunks/BTkWTcnU.js","_app/immutable/chunks/C_O5W_Rv.js","_app/immutable/chunks/CGPC6v-8.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
