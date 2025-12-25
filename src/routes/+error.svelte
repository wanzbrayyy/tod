<script>
	import { page } from '$app/stores';
</script>

<div class="flex h-screen w-full flex-col items-center justify-center bg-slate-50 text-center px-4">
	<h1 class="text-9xl font-bold text-sky-200">{$page.status}</h1>
	<h2 class="mt-4 text-3xl font-bold text-slate-800">Halaman Tidak Ditemukan</h2>
	<p class="mt-2 text-slate-500">Maaf, halaman yang Anda cari tidak tersedia.</p>
	<a 
		href="/" 
		class="mt-8 rounded-full bg-slate-900 px-8 py-3 text-sm font-medium text-white transition hover:bg-slate-700"
	>
		Kembali ke Beranda
	</a>
</div>