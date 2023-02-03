<template>
    <section class="m-6">
        <h1 class="text-6xl text-gray-200 font-bold font-mono mt-16">CV</h1>
        <article>
            <h2 class="text-3xl text-gray-200 font-bold font-mono ml-12">Education</h2>
            <div v-if="hoverEducation == true">
                <p class="text-md xl:text-xl text-gray-200 font-mono ml-12">Title: {{ eduItem[0].Title }}</p>
                <p class="text-md xl:text-xl text-gray-200 font-mono ml-12">Details: {{ eduItem[0].Details }}</p>
                <p class="text-md xl:text-xl text-gray-200 font-mono ml-12">University of Oslo</p>
            </div>
            <div v-else class="h-[120px] xl:h-[84px]"></div>
            <table class="grid place-items-center my-12">
                <tr class="bg-gray-800 text-lg xl:text-2xl text-gray-200 text-center font-mono font-bold">
                    <td @mouseover="onHoverBachelor(eduEntries[1])" @mouseleave="mouseOff(eduEntries[1])" class="w-20 h-20 xl:h-52 xl:w-52 m-6 hover:bg-blue-200 hover:text-gray-800 hover:cursor-default">2015</td>
                    <td @mouseover="onHoverBachelor(eduEntries[1])" @mouseleave="mouseOff(eduEntries[1])" class="w-20 h-20 xl:h-52 xl:w-52 m-6 hover:bg-blue-200 hover:text-gray-800 hover:cursor-default">2016</td>
                    <td @mouseover="onHoverBachelor(eduEntries[1])" @mouseleave="mouseOff(eduEntries[1])" class="w-20 h-20 xl:h-52 xl:w-52 m-6 hover:bg-blue-200 hover:text-gray-800 hover:cursor-default">2017</td>
                    <td @mouseover="onHover([eduEntries[1], jobEntries[4], jobEntries[5]])" @mouseleave="mouseOff(eduEntries[1])" class="w-20 h-20 xl:h-52 xl:w-52 m-6 hover:bg-blue-200 hover:text-gray-800 hover:cursor-default">2018</td>
                    <td @mouseover="onHover([eduEntries[0], jobEntries[2], jobEntries[3]])" @mouseleave="mouseOff(eduEntries[1])" class="w-20 h-20 xl:h-52 xl:w-52 m-6 hover:bg-blue-200 hover:text-gray-800 hover:cursor-default">2019</td>
                    <td @mouseover="onHover([eduEntries[0], jobEntries[0], jobEntries[1]])" @mouseleave="mouseOff(eduEntries[1])" class="w-20 h-20 xl:h-52 xl:w-52 m-6 hover:bg-blue-200 hover:text-gray-800 hover:cursor-default">2020-t.d.</td>
                </tr>
            </table>
            <h2 class="text-3xl text-gray-200 font-bold font-mono ml-12">Work Experience</h2>
            <div v-if="hoverWork == true">
                <p class="text-md xl:text-xl text-gray-200 font-mono ml-12">Title: {{ jobItem[0].Title }}</p>
                <p class="text-md xl:text-xl text-gray-200 font-mono ml-12">Details: {{ jobItem[0].Details }}</p>
                <p class="text-md xl:text-xl text-gray-200 font-mono ml-12">University of Oslo</p>
                <p class="text-md xl:text-xl text-gray-200 font-mono ml-12 mt-10">Title: {{ jobItem[1].Title }}</p>
                <p class="text-md xl:text-xl text-gray-200 font-mono ml-12">Details: {{ jobItem[1].Details }}</p>
                <p class="text-md xl:text-xl text-gray-200 font-mono ml-12">University of Oslo</p>
            </div>
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
            eduItem: [],
            jobItem: []
        }
    },
    methods: {
        onHover(e) {
            this.hoverEducation = true
            this.hoverWork = true
            e[0].hover = true
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
