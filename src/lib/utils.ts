import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { toast } from "svelte-sonner";


export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}


export function copyToClipboard(htmlValue: string) {
	try {
		const el = document.createElement('textarea');
		el.value = htmlValue;
		document.body.appendChild(el);
		el.select();
		document.execCommand('copy');
		document.body.removeChild(el);

		toast.success('Copied to clipboard');
	} catch (e) {
		console.error(e);
		toast.error('Failed to copy to clipboard');
	}
}