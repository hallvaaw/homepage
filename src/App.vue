<template>
    <main class="container">
        <h1>Hallvard Wæhler</h1>
        <h4>API test: </h4>
    <div class="col-4">
        <table>
            <tr v-for="(key, value) in myDictionary" :key="key">
                <td>{{ value }}</td>
                <td><div :style="{ backgroundColor: key.color_code}" class="key-text">{{ key.available_bikes }}</div></td>
            </tr>
        </table>
    </div>
    <footer class="container">
        <h6 style="margin-bottom: 6px;"><a href="https://github.com/hallvaaw" target="_blank" rel="noopener noreferrer">GitHub</a></h6>
    </footer>
</main>
</template>
<style>
    body.dark {
      --bg-color: #000;
      --bg-secondary-color: #131316;
      --font-color: #f5f5f5;
      --color-grey: #ccc;
      --color-darkGrey: #777;
    }
    .key-text {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        height: 30px;
        width: 30px;
    }
</style>

<script>
console.log("WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW\nWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW\nWWWWWWWWWWWWKxxxxxxxxxxxxxxxxxxxxxxxxxxNWWWWWWWWWWWW\nWWWWWWWWWWWWk''''''''''''''''''''''''''XWWWWWWWWWWWW\nWWWWWWWWWWWWk''''''''''''''''''''''''''XWWWWWWWWWWWW\nWWWWWWWWWWWWk''''''''''''''''''''''''''XWWWWWWWWWWWW\nWWWN00000000d''''''''''''''''''''''''''k0000000KWWWW\nWWWK''''''''''''''''''''''''''''''''''''''''''':WWWW\nWWWK''''''''''''''''''''''''''''''''''''''''''':WWWW\nWWWK''''''''''''''''''''''''''''''''''''''''''':WWWW\nWWWK'''''''',;;;;;;;;;;;;;;;;;;;;;;;;;;'''''''':WWWW\nWWWK''''''''oWWWWWWWWWWWWWWWWWWWWWWWWWW;''''''':WWWW\nWWWK''''''''oWWWWWWWWWWWWWWWWWWWWWWWWWW;''''''':WWWW\nWWWK''''''''oWWWWWWWWWWWWWWWWWWWWWWWWWW;''''''':WWWW\nWWWK''''''''oWWWWWWWWWWWWWWWWWWWWWWWWWW;''''''':WWWW\nWWWK'''''''',;;;;;;;;;;;;;;;;;;;;;;;;;;'''''''':WWWW\nWWWK''''''''''''''''''''''''''''''''''''''''''':WWWW\nWWWK''''''''''''''''''''''''''''''''''''''''''':WWWW\nWWWK''''''''''''''''''''''''''''''''''''''''''':WWWW\nWWWK''''''''c00000000l''''''''x00000000;''''''':WWWW\nWWWK''''''''oWWWWWWWWd''''''''0WWWWWWWW;''''''':WWWW\nWWWK''''''''oWWWWWWWWd''''''''0WWWWWWWW;''''''':WWWW\nWWWK''''''''oWWWWWWWWd''''''''0WWWWWWWW;''''''':WWWW\nWWWNxxxxxxxx0WWWWWWWW0xxxxxxxxXWWWWWWWWkxxxxxxxkWWWW\nWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW\nWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW\ngithub.com/hallvaaw")


export default {
    name: 'App',
    data() {
    return {
        myDictionary: {},
        }
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
            const stasjoner = {
                "Bjølsen studentby": {
                    available_bikes: data.data.stations[175].num_bikes_available, color_code: this.setColor(data.data.stations[175].num_bikes_available)
                },
                "Badebakken": {
                    available_bikes: data.data.stations[66].num_bikes_available, color_code: this.setColor(data.data.stations[66].num_bikes_available)
                },
                "Stavangergata": {
                    available_bikes: data.data.stations[84].num_bikes_available, color_code: this.setColor(data.data.stations[84].num_bikes_available)
                },
                "Tåsenløkka": {
                    available_bikes: data.data.stations[118].num_bikes_available, color_code: this.setColor(data.data.stations[118].num_bikes_available)
                },
                "Bentsebrugata": {
                    available_bikes: data.data.stations[147].num_bikes_available, color_code: this.setColor(data.data.stations[147].num_bikes_available)
                },
                "Bjølsendumpa": {
                    available_bikes: data.data.stations[195].num_bikes_available, color_code: this.setColor(data.data.stations[195].num_bikes_available)
                },
                "Myraløkka Øst": {
                    available_bikes: data.data.stations[117].num_bikes_available, color_code: this.setColor(data.data.stations[117].num_bikes_available)
                },
                "Sagene bussholdeplass": {
                    available_bikes: data.data.stations[141].num_bikes_available, color_code: this.setColor(data.data.stations[141].num_bikes_available)
                },
                "Arendalsgata": {
                    available_bikes: data.data.stations[156].num_bikes_available, color_code: this.setColor(data.data.stations[156].num_bikes_available)
                }
            } 
            this.myDictionary = stasjoner
        },
        setColor(num_bikes) {
            if (num_bikes >= 10) {
                return "#28a745";
            } else if (num_bikes > 5 && num_bikes < 10) {
                return "#d4d700";
            } else if (num_bikes > 0 && num_bikes < 6) {
                return "#ffc107";
            } else {
                return "#dc3545";
            }
        }
    }
}
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark');
}
</script>
