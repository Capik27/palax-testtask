declare module "*.module.sass" {
	const classes: { readonly [key: string]: string };
	export default classes;
}

declare module "*.module.scss" {
	const classes: { readonly [key: string]: string };
	export default classes;
}

declare module "*.svg" {
	const content: any;
	export default content;
}
declare module "*.png" {
	const content: any;
	export default content;
}
