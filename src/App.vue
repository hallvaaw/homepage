<template>
    <main class="flex flex-row min-h-screen">
        <aside class="bg-verydarkGray w-96 min-h-screen">
            <h1 class="text-gray-200 font-mono font-bold text-3xl m-6">Hallvard A. Wæhler</h1>
            <ul class="space-y-3">
                <li @click="openAboutComp()" class="text-2xl font-bold p-6 hover:text-darkPurple hover:cursor-pointer hover:duration-150" :class="AboutComp == true ? 'text-darkPurple bg-darkGray': 'text-blue-900'">About</li>
                <li @click="openCVComp()" class="text-2xl font-bold p-6 hover:text-darkPurple hover:cursor-pointer hover:duration-150" :class="CVComp == true ? 'text-darkPurple bg-darkGray': 'text-blue-900'">CV</li>
            </ul>
            <div class="space-y-2 space-x-6 m-6 mt-20">
                <a class="text-darkPurple text-lg hover:text-blue-900 hover:duration-150" href="https://github.com/hallvaaw" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a class="text-darkPurple text-lg hover:text-blue-900 hover:duration-150" href="https://www.linkedin.com/in/hallvard-austin-wæhler/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
        </aside>
        <section class="bg-darkGray w-screen" v-if="AboutComp == true">
            <AboutPage />
        </section>
        <section class="bg-darkGray w-screen" v-else>
            <CVPage />
        </section>
    </main>
</template>

<script>
import CVPage from './components/CVPage.vue'
import AboutPage from './components/AboutPage.vue'

console.log("WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW\nWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW\nWWWWWWWWWWWWKxxxxxxxxxxxxxxxxxxxxxxxxxxNWWWWWWWWWWWW\nWWWWWWWWWWWWk''''''''''''''''''''''''''XWWWWWWWWWWWW\nWWWWWWWWWWWWk''''''''''''''''''''''''''XWWWWWWWWWWWW\nWWWWWWWWWWWWk''''''''''''''''''''''''''XWWWWWWWWWWWW\nWWWN00000000d''''''''''''''''''''''''''k0000000KWWWW\nWWWK''''''''''''''''''''''''''''''''''''''''''':WWWW\nWWWK''''''''''''''''''''''''''''''''''''''''''':WWWW\nWWWK''''''''''''''''''''''''''''''''''''''''''':WWWW\nWWWK'''''''',;;;;;;;;;;;;;;;;;;;;;;;;;;'''''''':WWWW\nWWWK''''''''oWWWWWWWWWWWWWWWWWWWWWWWWWW;''''''':WWWW\nWWWK''''''''oWWWWWWWWWWWWWWWWWWWWWWWWWW;''''''':WWWW\nWWWK''''''''oWWWWWWWWWWWWWWWWWWWWWWWWWW;''''''':WWWW\nWWWK''''''''oWWWWWWWWWWWWWWWWWWWWWWWWWW;''''''':WWWW\nWWWK'''''''',;;;;;;;;;;;;;;;;;;;;;;;;;;'''''''':WWWW\nWWWK''''''''''''''''''''''''''''''''''''''''''':WWWW\nWWWK''''''''''''''''''''''''''''''''''''''''''':WWWW\nWWWK''''''''''''''''''''''''''''''''''''''''''':WWWW\nWWWK''''''''c00000000l''''''''x00000000;''''''':WWWW\nWWWK''''''''oWWWWWWWWd''''''''0WWWWWWWW;''''''':WWWW\nWWWK''''''''oWWWWWWWWd''''''''0WWWWWWWW;''''''':WWWW\nWWWK''''''''oWWWWWWWWd''''''''0WWWWWWWW;''''''':WWWW\nWWWNxxxxxxxx0WWWWWWWW0xxxxxxxxXWWWWWWWWkxxxxxxxkWWWW\nWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW\nWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW\ngithub.com/hallvaaw")

export default {
    name: 'App',
    components: {
        CVPage,
        AboutPage
    },
    data() {
        return {
            CVComp: false,
            AboutComp: true
        }
    },
    methods: {
        onClick(e) {
            this.selectedItem = ""
        },
        openCVComp() {
            this.CVComp = true
            this.AboutComp = false
        },
        openAboutComp() {
            this.AboutComp = true
            this.CVComp = false
        }
    }
}
</script>
