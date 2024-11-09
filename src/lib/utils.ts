import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { toast } from "svelte-sonner";


export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}


export async function copyToClipboard(htmlValue: string) {
	try {
		await navigator.clipboard.writeText(htmlValue);
		toast.success('Copied to clipboard');
	} catch (e) {
		console.error(e);
		toast.error('Failed to copy to clipboard');
	}
}