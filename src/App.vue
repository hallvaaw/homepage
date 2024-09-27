<template>
    <main class="container">
        <h1>Hallvard Wæhler</h1>
    </main>
    <footer class="container">
        <h6 style="margin-bottom: 6px;"><a href="https://github.com/hallvaaw" target="_blank" rel="noopener noreferrer">GitHub</a></h6>
    </footer>
</template>

<script>
console.log("WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW\nWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW\nWWWWWWWWWWWWKxxxxxxxxxxxxxxxxxxxxxxxxxxNWWWWWWWWWWWW\nWWWWWWWWWWWWk''''''''''''''''''''''''''XWWWWWWWWWWWW\nWWWWWWWWWWWWk''''''''''''''''''''''''''XWWWWWWWWWWWW\nWWWWWWWWWWWWk''''''''''''''''''''''''''XWWWWWWWWWWWW\nWWWN00000000d''''''''''''''''''''''''''k0000000KWWWW\nWWWK''''''''''''''''''''''''''''''''''''''''''':WWWW\nWWWK''''''''''''''''''''''''''''''''''''''''''':WWWW\nWWWK''''''''''''''''''''''''''''''''''''''''''':WWWW\nWWWK'''''''',;;;;;;;;;;;;;;;;;;;;;;;;;;'''''''':WWWW\nWWWK''''''''oWWWWWWWWWWWWWWWWWWWWWWWWWW;''''''':WWWW\nWWWK''''''''oWWWWWWWWWWWWWWWWWWWWWWWWWW;''''''':WWWW\nWWWK''''''''oWWWWWWWWWWWWWWWWWWWWWWWWWW;''''''':WWWW\nWWWK''''''''oWWWWWWWWWWWWWWWWWWWWWWWWWW;''''''':WWWW\nWWWK'''''''',;;;;;;;;;;;;;;;;;;;;;;;;;;'''''''':WWWW\nWWWK''''''''''''''''''''''''''''''''''''''''''':WWWW\nWWWK''''''''''''''''''''''''''''''''''''''''''':WWWW\nWWWK''''''''''''''''''''''''''''''''''''''''''':WWWW\nWWWK''''''''c00000000l''''''''x00000000;''''''':WWWW\nWWWK''''''''oWWWWWWWWd''''''''0WWWWWWWW;''''''':WWWW\nWWWK''''''''oWWWWWWWWd''''''''0WWWWWWWW;''''''':WWWW\nWWWK''''''''oWWWWWWWWd''''''''0WWWWWWWW;''''''':WWWW\nWWWNxxxxxxxx0WWWWWWWW0xxxxxxxxXWWWWWWWWkxxxxxxxkWWWW\nWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW\nWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW\ngithub.com/hallvaaw")


export default {
    name: 'App',
    data() {
    return {}
    },
    mounted() {
        this.getWeather(),
        this.getBike()
    },
    methods: {
        async getWeather() {
               const res = await fetch('https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=59.9369&lon=10.7600')
               const data = await res.json()
               console.log(data.properties.timeseries[0].data.next_6_hours.summary)
        },
        async getBike() {
               const res = await fetch('https://gbfs.urbansharing.com/oslobysykkel.no/station_status.json')
               const data = await res.json()
               console.log("Bjølsen studentby:", data.data.stations[175].num_bikes_available)
               console.log("Badebakken:", data.data.stations[66].num_bikes_available)
               console.log("Stavangergata:", data.data.stations[84].num_bikes_available)
               console.log("Tåsenløkka:", data.data.stations[118].num_bikes_available)
               console.log("Bentsebrugata:", data.data.stations[147].num_bikes_available)
               console.log("Bjølsendumpa:", data.data.stations[195].num_bikes_available)
               console.log("Myraløkka Øst: ", data.data.stations[117].num_bikes_available)
        }
    }
}
</script>
