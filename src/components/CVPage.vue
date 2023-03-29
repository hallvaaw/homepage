<template>
    <section class="m-6">
        <h1 class="text-6xl text-gray-200 font-bold font-mono mt-16">CV</h1>
        <article class="grid grid-cols-3">
            <article class="mt-32">
                <h2 class="text-3xl text-gray-200 font-bold font-mono ml-12">Education</h2>
                <div v-if="hoverEducation == true" class="space-y-2">
                    <p class="text-md xl:text-xl text-gray-200 font-mono ml-12">Title: {{ eduItem[0].Title }}</p>
                    <p class="text-md xl:text-xl text-gray-200 font-mono ml-12">Details: {{ eduItem[0].Details }}</p>
                    <p class="text-md xl:text-xl text-gray-200 font-mono ml-12">University of Oslo</p>
                </div>
                <div v-else class="h-[72px] xl:h-[99px]"></div>
            </article>
            <article>
                <div class="flex flex-col my-12 text-lg xl:text-2xl text-gray-200 items-center font-mono font-bold">
                    <div @mouseover="onHover([eduEntries[0], jobEntries[0], jobEntries[1]])" @mouseleave="mouseOff(eduEntries[0])" class="flex bg-gray-800 w-20 h-20 items-center justify-center xl:h-32 xl:w-32 hover:bg-blue-200 hover:text-gray-800 hover:cursor-default">2020+</div>
                    <div @mouseover="onHover([eduEntries[0], jobEntries[2], jobEntries[3]])" @mouseleave="mouseOff(eduEntries[0])" class="flex bg-gray-800 w-20 h-20 items-center justify-center xl:h-32 xl:w-32 hover:bg-blue-200 hover:text-gray-800 hover:cursor-default">2019</div>
                    <div @mouseover="onHover([eduEntries[1], jobEntries[4], jobEntries[5]])" @mouseleave="mouseOff(eduEntries[1])" class="flex bg-gray-800 w-20 h-20 items-center justify-center xl:h-32 xl:w-32 hover:bg-blue-200 hover:text-gray-800 hover:cursor-default">2018</div>
                    <div @mouseover="onHoverBachelor(eduEntries[1])" @mouseleave="mouseOff(eduEntries[1])" class="flex bg-gray-800 w-20 h-20 items-center justify-center xl:h-32 xl:w-32 hover:bg-blue-200 hover:text-gray-800 hover:cursor-default">2017</div>
                    <div @mouseover="onHoverBachelor(eduEntries[1])" @mouseleave="mouseOff(eduEntries[1])" class="flex bg-gray-800 w-20 h-20 items-center justify-center xl:h-32 xl:w-32 hover:bg-blue-200 hover:text-gray-800 hover:cursor-default">2016</div>
                    <div @mouseover="onHoverBachelor(eduEntries[1])" @mouseleave="mouseOff(eduEntries[1])" class="flex bg-gray-800 w-20 h-20 items-center justify-center xl:h-32 xl:w-32 hover:bg-blue-200 hover:text-gray-800 hover:cursor-default">2015</div>
                </div>
            </article>
            <article class="mt-32">
                <h2 class="text-3xl text-gray-200 font-bold font-mono ml-12">Work Experience</h2>
                <div v-if="hoverWork == true" class="space-y-2">
                    <p class="text-sm xl:text-xl text-gray-200 font-mono">Title: {{ jobItem[0].Title }}</p>
                    <p class="text-sm xl:text-xl text-gray-200 font-mono">Details: {{ jobItem[0].Details }}</p>
                    <p class="text-sm xl:text-xl text-gray-200 font-mono">University of Oslo</p>
                    <p class="text-sm xl:text-xl text-gray-200 font-mono pt-10">Title: {{ jobItem[1].Title }}</p>
                    <p class="text-sm xl:text-xl text-gray-200 font-mono">Details: {{ jobItem[1].Details }}</p>
                    <p class="text-sm xl:text-xl text-gray-200 font-mono">University of Oslo</p>
                </div>
            </article>
        </article>
    </section>
</template>

<script>
export default {
    name: 'CVPage',
    data() {
        return {
            eduEntries: [
                {Title: "Master's degree in molecular biology.", Details: "Automation of high throughput image analysis techniques in microscopy.", hover: false},
                {Title: "Bachelor's degree in biology", Details: "Molecular and computational biology.", hover: false}],
            jobEntries: [
                {Title: "Doctoral candidate in computational biology.", Details: "Computational analysis of gene regulation in development and disease.", hover: false},
                {Title: "Scientific assistant in Python programming.", Details: "Making curriculum and coding challenges in Python for a course in computational biology.", hover: false},
                {Title: "Scientific assistant in R programming.", Details: "Making curriculum, coding challenges and exercises for a course in statistics.", hover: false},
                {Title: "Summer intern in computational biology.", Details: "Data sorting, analysis and visualization.", hover: false},
                {Title: "Teaching assistant in Python programming.", Details: "Tutoring, reviewing code and live coding in Python.", hover: false},
                {Title: "Scientific assistant in R programming.", Details: "Making curriculum, coding challenges and exercises for a course in statistics.", hover: false}
            ],
            hoverEducation: false,
            hoverWork: false,
            eduItem: [],
            jobItem: []
        }
    },
    methods: {
        onHover(e) {
            this.hoverEducation = true
            this.hoverWork = true
            e.hover = true
            this.eduItem.push(e[0])
            this.jobItem.push(e[1])
            this.jobItem.push(e[2])
        },
        onHoverBachelor(e) {
            this.hoverEducation = true
            e.hover = true
            this.eduItem.push(e)
        },
        mouseOff(e) {
            e.hover = false
            this.hoverEducation = false
            this.hoverWork = false
            this.eduItem.pop()
            this.jobItem.pop()
            this.jobItem.pop()
        }
    }
}
</script>
