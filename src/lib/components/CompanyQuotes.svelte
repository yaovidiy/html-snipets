<script lang="ts">
	import { Label } from '$lib/components/ui/label';
	import { Input } from '$lib/components/ui/input';
	import { Textarea } from '$lib/components/ui/textarea';
	import { Button } from '$lib/components/ui/button';
	import { Separator } from '$lib/components/ui/separator';
	import { copyToClipboard } from '$lib/utils';

	let quoteCompanyLogo = $state(
		'https://nx-website-assets.nexrender.com/Videohebel_2_184dc2c21e.png'
	);
	let quoteCompanyLogoHeight = $state('2rem');
	let quoteCompanyLogoWidth = $state('auto');
	let quote = $state(
		'"Nexrender enables us to deliver highly personalized guest experiences effortlessly. Automating video production at scale has never been this efficient. I just love it!"'
	);
	let quoteAuthorImage = $state('https://nx-website-assets.nexrender.com/tk1_cc96af809e.jpg');
	let quoteAuthor = $state('Torben Karg');
	let quoteAuthorTitle = $state('Founder, Videohebel');
	let quoteTextSize = $state('');
	let quoteLineHeight = $state('');

	const htmlValue = $derived(`
  <section
	class="relative not-prose isolate overflow-hidden bg-gray-100 px-6 py-10 lg:px-8 rounded-3xl shadow mt-32"
>
	<div
		class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
	>
		<div
			class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
			style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
		></div>
	</div>
	<div
		class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
	>
		<div
			class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
			style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
		></div>
	</div>

	<div class="mx-auto max-w-2xl lg:max-w-4xl">
		<div class="flex justify-center items-center">
			<img src="${quoteCompanyLogo}" alt="Company Logo" style="height: ${quoteCompanyLogoHeight}; width: ${quoteCompanyLogoWidth}" class="mx-auto flex-none" />
		</div>

		<figure style="margin:0; margin-top: 1.75rem">
			<blockquote
        style="border: none; padding: 0; font-style: normal; ${quoteTextSize ? `font-size: ${quoteTextSize};` : ''} ${quoteLineHeight ? `line-height: ${quoteLineHeight};` : ''}"
				class="text-center text-xl font-semibold leading-8 text-gray-900 sm:leading-9"
			>
				<p>
					${quote}
				</p>
			</blockquote>
			<figcaption style="margin-top: 1.75rem" class="flex gap-3 items-center justify-center">
				<picture>
					<source srcset="${quoteAuthorImage} 64w, ${quoteAuthorImage} 128w" />
					<img
						src="${quoteAuthorImage}"
						srcset="${quoteAuthorImage} 64w, ${quoteAuthorImage} 128w"
						alt="${quoteAuthor}, ${quoteAuthorTitle}"
						class="mx-auto h-10 w-10 rounded-full"
						width="560"
						height="560"
						loading="lazy"
						decoding="async"
					/>
				</picture>

				<div class="text-base">
					<div class="font-semibold text-gray-900">${quoteAuthor}</div>
					<div class="text-gray-900">${quoteAuthorTitle}</div>
				</div>
			</figcaption>
		</figure>
	</div>
</section>`);
</script>

<div class="flex w-full flex-col gap-4 mb-5">
	<h2 class="text-2xl font-semibold text-center text-gray-900">Modify data for this Quate</h2>
	<div class="flex flex-wrap gap-3 items-center justify-between">
		<Label for="image">Logo Image URL</Label>
		<Input
			class="max-w-3xl w-full"
			id="image"
			bind:value={quoteCompanyLogo}
			placeholder="Enter image url"
		/>
	</div>
  <div class="flex flex-wrap gap-3 items-center justify-between">
		<Label for="image">Logo Image Height</Label>
		<Input
			class="max-w-3xl w-full"
			id="image"
			bind:value={quoteCompanyLogoHeight}
			placeholder="Enter image height, e.g. 2rem, 50px, etc."
		/>
	</div>
  <div class="flex flex-wrap gap-3 items-center justify-between">
		<Label for="image">Logo Image Width</Label>
		<Input
			class="max-w-3xl w-full"
			id="image"
			bind:value={quoteCompanyLogoWidth}
			placeholder="Enter image width, e.g. auto, 100px, etc."
		/>
	</div>
	<div class="flex flex-wrap gap-3 items-center justify-between">
		<Label for="image">Author Image URL</Label>
		<Input
			class="max-w-3xl w-full"
			id="image"
			bind:value={quoteAuthorImage}
			placeholder="Enter image url"
		/>
	</div>
	<div class="flex flex-wrap gap-3 items-center justify-between">
		<Label for="author">Quate author</Label>
		<Input
			class="max-w-3xl w-full"
			id="author"
			bind:value={quoteAuthor}
			placeholder="Enter quate author"
		/>
	</div>
	<div class="flex flex-wrap gap-3 items-center justify-between">
		<Label for="job">Quate author title</Label>
		<Input
			class="max-w-3xl w-full"
			id="job"
			bind:value={quoteAuthorTitle}
			placeholder="Enter quate author title"
		/>
	</div>
	<div class="flex flex-wrap gap-3 items-center justify-between">
		<Label for="text">Quate text</Label>
		<Textarea
			class="max-w-3xl w-full"
			id="text"
			bind:value={quote}
			placeholder="Enter Quate text"
		/>
	</div>
	<div class="flex flex-wrap gap-3 items-center justify-between">
		<Label for="job">Quate Text Size</Label>
		<Input
			class="max-w-3xl w-full"
			id="job"
			bind:value={quoteTextSize}
			placeholder="Enter quate text size, e.g. 1.25rem, 20px, etc."
		/>
	</div>
	<div class="flex flex-wrap gap-3 items-center justify-between">
		<Label for="job">Quate Line Height</Label>
		<Input
			class="max-w-3xl w-full"
			id="job"
			bind:value={quoteLineHeight}
			placeholder="Enter quate line height, e.g. 1.5, 2, etc."
		/>
	</div>

	<Button onclick={() => copyToClipboard(htmlValue)} class="mx-auto" type="submit"
		>Copy to clipboard</Button
	>
</div>

<Separator class="w-full mb-5" />

<h2 class="text-lg text-center font-bold">How it will look like</h2>

<div class="prose w-full max-w-3xl mx-auto">
	{@html htmlValue}
</div>
