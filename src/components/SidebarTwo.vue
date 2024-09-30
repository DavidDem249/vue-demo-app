<template>
    <main>
        <div class="bg-dark-purple h-screen p-5 pt-8 duration-300 relative" :class="open ? 'w-72' : 'w-20'" @mouseleave="handleMouseLeave">
            <UnArrowCircleLeft  
                class="bg-white text-dark-purple text-3xl rounded-full absolute -right-3 top-9 border border-dark-purple cursor-pointer"
                :class="!open && 'rotate-180'"
                @click="toggleSidebar"
            />
            <!-- open = !open -->

            <div class="inline-flex">
                <AnFilledEnvironment class="bg-amber text-4xl rounded cursor-pointer block float-left mr-2 duration-500" :class="open && 'rotate-[360deg]'"/>
                <h1 class="text-white origin-left font-medium text-2xl duration-300" :class="!open && 'scale-0'">
                    File Manager
                </h1>
            </div>

            <div class="flex items-center rounded-md bg-light-white mt-6 py-2" :class="!open ? 'px-4' : 'px-2.5'">
                <BySearch class="text-white text-lg block float-left cursor-pointer" :class="open && 'mr-2'"/>
                <input class="text-base bg-transparent w-full text-white focus:outline-none" type="text" :class="!open && 'hidden'">
            </div>
            
            <ul class="pt-2">
                <li 
                    v-for="(menu, index) in Menus" :key="index"
                    class="text-gray-300 text-sm flex flex-col gap-y-2 cursor-pointer p-2 hover:bg-light-white rounded-md"
                    :class="[menu.spacing ? 'mt-9' : 'mt-2']"
                    v-on:click="menu.submenu ? toggleSubmenu(index) : null"
                    @mouseover="handleMouseOver"
                >
                <!-- open = true -->
                    <div class="flex items-center gap-x-4">
                        <span class="text-2xl block">
                            <!-- <ChApps/> -->
                            <component :is="menu.icon" />
                        </span>
                        
                        <span class="text-base font-medium flex-1 duration-200" :class="!open && 'hidden'">
                            {{ menu.title }}
                        </span>

                        <!-- @click="toggleSubmenu(index)" -->
                        <ChChevronDown 
                            v-if="menu.submenu && open" 
                            class="cursor-pointer"
                            :class="isSubmenuVisible(index) && 'rotate-180'"
                        />
                    </div>

                    <!-- Sous-menu -->
                    <transition name="slide-fade">
                        <!-- :class="!open && 'hidden'" -->
                        <ul
                            v-if="isSubmenuVisible(index) && open"
                            class="bg-light-white mt-2 p-2 w-full rounded-md shadow-md"
                            
                        >
                            <li 
                                v-for="(submenuItem, subIndex) in menu.submenuItems" :key="subIndex"
                                class="text-gray-300 text-sm p-2 hover:bg-gray-700 rounded-md"
                            >
                                {{ submenuItem.title }}
                            </li>
                        </ul>
                    </transition>
                </li>
            </ul>
        </div>
    </main>
</template>

<script setup>
import { UnArrowCircleLeft } from '@kalimahapps/vue-icons';
import { AnFilledEnvironment } from '@kalimahapps/vue-icons';
import { BySearch, ChApps, ChChevronDown, ChCopy, ChFolder, AkAlignBottom, ChBriefcase, AkChatRemove, GlExport, GlApi, GlAssignee } from '@kalimahapps/vue-icons';

import { ref } from 'vue';


const open = ref(false);  // État de la barre latérale
const sidebarLocked = ref(false);  // État pour savoir si le sidebar est verrouillé (ouvert via clic)
// const isOpenMenu = ref(true)
const activeSubmenu = ref(null);

// Fonction pour basculer l'ouverture de la barre latérale avec clic sur le bouton
const toggleSidebar = () => {
    open.value = !open.value;
    sidebarLocked.value = open.value;  // Verrouille le menu si ouvert par clic
};

const toggleSubmenu = (index) => {
    activeSubmenu.value = activeSubmenu.value === index ? null : index;
};

// Fonction pour savoir si le sous-menu doit être visible
const isSubmenuVisible = (index) => {
    return activeSubmenu.value === index;
};

// Gérer l'événement mouseover pour ouvrir temporairement la barre latérale si elle n'est pas verrouillée
const handleMouseOver = () => {
    if (!sidebarLocked.value) {
        open.value = true;
    }
};

// Gérer l'événement mouseleave pour fermer la barre latérale si elle n'est pas verrouillée
const handleMouseLeave = () => {
    if (!sidebarLocked.value) {
        open.value = false;
    }
};

// const Menus = ref([
//     { title: "Dashboard", icon: <ChApps/> },
//     { title: "Pages", icon: <ChCopy/> },
//     { title: "Media", spacing: true, icon: "<ChFolder/>" },
//     {
//         title: "Projects",
//         icon: <ChBriefcase/>,
//         submenu: true,
//         submenuItems: [
//             { title: "Submenu 1" },
//             { title: "Submenu 2" },
//             { title: "Submenu 3" },
//         ],
//     },
//     { title: "Analytics", icon: <AkAlignBottom/> },
//     { title: "Inbox", icon: <AkChatRemove/> },
//     { title: "Profile", spacing: true, icon: <GlAssignee/> },
//     { title: "Setting", icon: <GlApi/> },
//     { title: "Logout", icon: <GlExport/> },
// ]);
const Menus = ref([
    { title: "Dashboard", icon: ChApps },
    { title: "Pages", icon: ChCopy },
    { title: "Media", spacing: true, icon: ChFolder },
    {
        title: "Projects",
        icon: ChBriefcase,
        submenu: true,
        submenuItems: [
            { title: "Submenu 1" },
            { title: "Submenu 2" },
            { title: "Submenu 3" },
        ],
    },
    { title: "Analytics", icon: AkAlignBottom },
    { title: "Inbox", icon: AkChatRemove },
    { title: "Profile", spacing: true, icon: GlAssignee },
    { title: "Setting", icon: GlApi },
    { title: "Logout", icon: GlExport },
]);
</script>

<style scoped>
/* Animation pour la transition du sous-menu */
.slide-fade-enter-active, .slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter-from, .slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
