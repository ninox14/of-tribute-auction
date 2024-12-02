import type { BunPlugin } from "bun";
import postcss from "postcss";
import tailwindcss from "tailwindcss";

const styleFilter = /.\.(css)$/;

export const cssPlugin: BunPlugin = {
	name: "CSS Loader",
	setup(build) {
		build.onLoad({ filter: styleFilter }, async (args) => {
			const css = await Bun.file(args.path).text();
			const result = await postcss([tailwindcss]).process(css, {
				from: args.path,
			});

			return {
				contents: result.css,
				loader: "text",
			};
		});
	},
};
