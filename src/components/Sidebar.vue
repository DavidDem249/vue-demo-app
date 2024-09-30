<template>
    <div class="relative flex min-h-screen">
        <!-- Sidebar -->

        <div class="
            bg-cyan-600 text-cyan-100 w-64 space-y-6 px-2 py-4 absolute 
            inset-y-0 left-0 transform -translate-x-full transition duration-200 
            ease-in-out md:relative md:-translate-x-0"
            :class="{ 'relative -translate-x-0': showSidebar }"
        >

            <a href="#" class="flex items-center space-x-2 px-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-10 w-10">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
                </svg>
                <span class="text-2xl font-extrabold text-white">Admini Dash</span>
            </a>

            <nav>
                <a href="/" class="group flex items-center space-x-2 py-3 px-4 hover:bg-cyan-700 rounded hover:text-cyan-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                    <span class="text-white group-hover:text-cyan-300">Dashboard</span>
                </a>

                <a href="#" class="group flex items-center space-x-2 py-3 px-4 hover:bg-cyan-700 rounded hover:text-cyan-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                    <span class="text-white group-hover:text-cyan-300">Team</span>
                </a>

                <a href="#" class="group flex items-center space-x-2 py-3 px-4 hover:bg-cyan-700 rounded hover:text-cyan-300 transition duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                    </svg>
                    <span class="text-white group-hover:text-cyan-300">Projects</span>
                </a>

                <a href="#" class="group flex items-center space-x-2 py-3 px-4 hover:bg-cyan-700 rounded hover:text-cyan-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                    </svg>
                    <span class="text-white group-hover:text-cyan-300">Calendar</span>
                </a>
                <a href=""></a>
            </nav>
        </div>

        <!-- Main content -->

        <div class="flex-1">
            <!-- Header -->
            <div class="bg-white shadow px-6 py-4 flex items-center justify-between">
                <button @click="showSidebar = !showSidebar" class="text-cyan-500 font-extrabold md:hidden">
                    <svg v-if="!showSidebar" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-8 w-8">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>

                    <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>

                </button>

                <button class="bg-gray-950 rounded-lg px-5 py-2 text-white">
                    Paramètre
                </button>

                <div class="flex items-end justify-end">
                    <ul>
                        <li><a href="http://">Déconnexion</a></li>
                    </ul>
                </div>
            </div>

            <!-- Content -->

            <div class="p-8 text-cyan-700 font-semibold">
                
                <div class="grid grid-rows-1 grid-flow-col gap-2">

                    <div class="max-w-xs flex flex-col bg-white border border-t-4 border-t-blue-600 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:border-t-blue-500 dark:shadow-neutral-700/70">
                        <div class="p-4 md:p-5">
                            <h3 class="text-lg font-bold text-gray-800 dark:text-white">
                            Card title
                            </h3>
                            <p class="mt-2 text-gray-500 dark:text-neutral-400">
                            With supporting text below as a natural lead-in to additional content.
                            </p>
                            <a class="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 decoration-2 hover:text-blue-700 hover:underline focus:underline focus:outline-none focus:text-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-600 dark:focus:text-blue-600" href="#">
                            Card link
                            <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="m9 18 6-6-6-6"></path>
                            </svg>
                            </a>
                        </div>
                    </div>
                    
                    <div class="max-w-xs flex flex-col bg-white border border-t-4 border-t-blue-600 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:border-t-blue-500 dark:shadow-neutral-700/70">
                        <div class="p-4 md:p-5">
                            <h3 class="text-lg font-bold text-gray-800 dark:text-white">
                            Card title
                            </h3>
                            <p class="mt-2 text-gray-500 dark:text-neutral-400">
                            With supporting text below as a natural lead-in to additional content.
                            </p>
                            <a class="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 decoration-2 hover:text-blue-700 hover:underline focus:underline focus:outline-none focus:text-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-600 dark:focus:text-blue-600" href="#">
                            Card link
                            <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="m9 18 6-6-6-6"></path>
                            </svg>
                            </a>
                        </div>
                    </div>

                    <div class="max-w-xs flex flex-col bg-white border border-t-4 border-t-blue-600 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:border-t-blue-500 dark:shadow-neutral-700/70">
                        <div class="p-4 md:p-5">
                            <h3 class="text-lg font-bold text-gray-800 dark:text-white">
                            Card title
                            </h3>
                            <p class="mt-2 text-gray-500 dark:text-neutral-400">
                            With supporting text below as a natural lead-in to additional content.
                            </p>
                            <a class="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 decoration-2 hover:text-blue-700 hover:underline focus:underline focus:outline-none focus:text-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-600 dark:focus:text-blue-600" href="#">
                            Card link
                            <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="m9 18 6-6-6-6"></path>
                            </svg>
                            </a>
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import { ref } from 'vue';
    export default {
        setup() {
            const showSidebar = ref(false);

            return {
                showSidebar,
            };
        }
    }

</script>

<style scoped>

</style>