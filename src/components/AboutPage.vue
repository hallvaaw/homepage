<template>
    <h1 class="text-4xl text-gray-200 font-bold font-mono mt-16 ml-6">I am a bioinformatician and software developer</h1>
    <article>
        <h2 class="text-3xl text-gray-200 font-bold font-mono ml-12 mt-6">I make stuff with: {{ hoverTitle }}</h2>
        <table class="m-12 mt-20 xl:ml-56">
            <tr>
                <td @mouseover="onHover('Python')" class="border-8 border-darkGray"><img class="bg-gray-200 h-20 w-20 xl:h-36 xl:w-36 hover:bg-darkGray hover:duration-100" src="../assets/python-svgrepo-com.svg" title="Python" alt="Python"></td> 
                <td @mouseover="onHover('Vue')" class="border-8 border-darkGray"><img class="bg-gray-200 h-20 w-20 xl:h-36 xl:w-36 hover:bg-darkGray hover:duration-100" src="../assets/logo-vue-svgrepo-com.svg" title="Vue" alt="Vue"></td> 
                <td @mouseover="onHover('JavaScript')" class="border-8 border-darkGray"><img class="bg-gray-200 h-20 w-20 xl:h-36 xl:w-36 hover:bg-darkGray hover:duration-100" src="../assets/js-svgrepo-com.svg" title="JavaScript" alt="JavaScript"></td> 
                <td @mouseover="onHover('HTML')" class="border-8 border-darkGray"><img class="bg-gray-200 h-20 w-20 xl:h-36 xl:w-36 hover:bg-darkGray hover:duration-100" src="../assets/html5-svgrepo-com.svg" title="HTML" alt="HTML"></td> 
                <td @mouseover="onHover('CSS')" class="border-8 border-darkGray"><img class="bg-gray-200 h-20 w-20 xl:h-36 xl:w-36 hover:bg-darkGray hover:duration-100" src="../assets/css3-svgrepo-com.svg" title="CSS" alt="CSS"></td> 
            </tr>
            <tr>
                <td @mouseover="onHover('Tailwind')" class="border-8 border-darkGray"><img class="bg-gray-200 h-20 w-20 xl:h-36 xl:w-36 hover:bg-darkGray hover:duration-100" src="../assets/tailwind-svgrepo-com.svg" title="Tailwind" alt="Tailwind"></td> 
                <td @mouseover="onHover('Bash')" class="border-8 border-darkGray"><img class="bg-gray-200 h-20 w-20 xl:h-36 xl:w-36 hover:bg-darkGray hover:duration-100" src="../assets/terminal-bash-svgrepo-com.svg" title="Bash" alt="Bash"></td> 
                <td @mouseover="onHover('R')" class="border-8 border-darkGray"><img class="bg-gray-200 h-20 w-20 xl:h-36 xl:w-36 hover:bg-darkGray hover:duration-100" src="../assets/r-svgrepo-com.svg" title="R" alt="R"></td> 
                <td @mouseover="onHover('Inkscape')" class="border-8 border-darkGray"><img class="bg-gray-200 h-20 w-20 xl:h-36 xl:w-36 hover:bg-darkGray hover:duration-100" src="../assets/inkscape-svgrepo-com.svg" title="Inkscape" alt="Inkscape"></td> 
                <td @mouseover="onHover('Tauri')" class="border-8 border-darkGray"><img class="bg-gray-200 h-20 w-20 xl:h-36 xl:w-36 hover:bg-darkGray hover:duration-100" src="../assets/tauri.svg" title="Tauri" alt="Tauri"></td> 
            </tr>
        </table>  
    </article>
</template>

<script>
export default {
    name: 'AboutPage',
    data() {
        return {
            hoverTitle: ""
        }
    },
    methods: {
        onHover(e) {
            this.hoverTitle = e
        }
    }
}
</script>
