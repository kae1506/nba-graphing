<script setup lang="js">
let chartComponent = shallowRef(null); // create a ref to hold the component


onMounted(async () => {  // onMounted means basically when the window is loaded, and compnent is mounted
  const VueApexCharts = (await import('vue3-apexcharts')).default;
  chartComponent.value = VueApexCharts;
});

const playerIndex = [
    'Stephen Curry',
    'LeBron James',
    'Kevin Durant',
    'Kawhi Leonard',
    'Giannis Antetokounmpo',
    'James Harden',
    'Luka Dončić',
    'Nikola Jokić',
    'Joel Embiid',
    'Anthony Davis',
    'Damian Lillard',
    'Chris Paul',
    'Jayson Tatum',
    'Zion Williamson',
    'Jimmy Butler',
    'Paul George',
    'Kyrie Irving',
    'Russell Westbrook',
    'Anthony Edwards',
    'Trae Young',
    'Devin Booker'
]

let players = ref([

]);

let newPlayer = ref('') // to hold the player name

function addPlayer() {
  if (newPlayer.value !== '') {
    players.value.push(newPlayer.value);
    newPlayer.value = ''; // clear the input field
  }
}

// using refs, to create a reactive variable
const chartOptions = ref({
  chart: {
    id: "vuechart-example",
  },
  

  xaxis: {
    show: true,
    showAlways: true,
    axisBorder: {
      show: true,
      color: '#78909C',
    },
    title: {
      text: 'PPG',
      style: {
        color: 'white',
        fontSize: '18px',
        fontFamily: 'Helvetica, Arial, sans-serif',
        fontWeight: 600,
        cssClass: 'apexcharts-xaxis-title',
      },
    },
    tickPlacement: 'between',
    tickAmount: 10,


    labels: 
    {
      formatter: function(val) {
        return parseFloat(val).toFixed(2)
      }
    }
  },

  yaxis: {
    show: true,
    showAlways: true,
    axisBorder: {
      show: true,
      color: '#78909C',
    },
    title: {
      text: 'APG',
      style: {
        color: 'white',
        fontSize: '18px',
        fontFamily: 'Helvetica, Arial, sans-serif',
        fontWeight: 600,
        cssClass: 'apexcharts-xaxis-title',
      },
    }
  },

  theme: {
    palette: 'palette5', // default palette
    monochrome: {
      enabled: false,
      // color: '#255aee',
      shadeTo: 'light',
      shadeIntensity: 0.65
    }
  },

  grid:{
    show: false,
    padding: {
      left: 20,
      right: 100
    }
  },

  chart: {
    foreColor: 'white'
  }
})



// TODO: add options to choose the specific stat to show
// stats to add: PPG, APG, RPG, SPG, BPG, TPG, FG%, 3P%, FT%, eFG%
const mapper = {
  PPG: 'points',
  APG: 'assists',
  RPG: 'totalRb',
  SPG: 'steals',
  BPG: 'blocks',
  TPG: 'turnovers',
  FGp: 'fieldPercent',
  ThPp : 'threePercent',
  FTp: 'ftPercent',
  eFGp: 'effectFgPercent'
}

const percentages = ['fieldPercent', 'threePercent', 'ftPercent', 'effectFgPercent']

/*
sample object:
{
  age: 25
  assists: 583
  blocks: 11
  defensiveRb: 126
  effectFgPercent: 0.516
  fieldAttempts: 1008
  fieldGoals: 433
  fieldPercent: 0.43
  ft: 348
  ftAttempts: 407
  ftPercent: 0.855
  games: 54
  gamesStarted: 54
  id: 18710
  minutesPg: 1942
  offensiveRb: 23
  personalFouls: 109
  playerId: "youngtr01"
  playerName: "Trae Young"
  points: 1389
  position: "PG"
  season: 2024
  steals: 72
  team: "ATL"
  threeAttempts: 469
  threeFg: 175
  threePercent: 0.373
  totalRb: 149
  turnovers: 235
  twoAttempts: 539
  twoFg: 258
  twoPercent: 0.479
}


*/

// conditional rendering variables
let dataObtained = ref(false) // to hold the state
let submitClicked = ref(false) // to hold the state
let typeOfGraph = ref('') // to hold the type of graph

// data variables
let series = ref([]) // to hold the data

// stat vs stat variables
let xStatName = ref(null)
let yStatName = ref(null)
let season = ref(null)

// line graph variables
let lineStatName = ref(null)


async function getDataStatVsStat(player, xStat, yStat){
  let names = player.split(" ");

  let url = `http://rest.nbaapi.com/api/PlayerDataTotals/query?playerName=${names[0]}%20${names[1]}&season=${season.value}`;
  return fetch(url)
    .then(data => data.json())
    .then(data => {
      let answer = []
      
      if (percentages.includes(xStat)){
        answer.push(data[0][xStat]*100)
      } else {
        answer.push(data[0][xStat]/data[0].games)
      }

      if (percentages.includes(yStat)){
        answer.push((data[0][yStat]*100).toFixed(2))
      } else {
        answer.push((data[0][yStat]/data[0].games).toFixed(2))
      }
      return answer
    })
}

async function getStatNamesLine(player, stat){
    let names = player.split(" ");
    let url = `http://rest.nbaapi.com/api/PlayerDataTotals/query?playerName=${names[0]}%20${names[1]}&pageSize=30`;
    return fetch(url)
      .then(data => data.json())
      .then(data => {
        let answer = []

        // to sort data
        data.sort((a, b) => {
            if (a.season < b.season) {
                return -1;
            }
            if (a.season > b.season) {
                return 1;
            }
            return 0;
        });



        for (let yearlyData of data){
            if (percentages.includes(stat)){
                answer.push((yearlyData[stat]*100).toFixed(2))
            } else {
                answer.push((yearlyData[stat]/yearlyData.games).toFixed(2))
            }
        }
        
        return answer;
      })
      
}


async function doAllPromises(){
  //let tings = await getStatNames()
  if (typeOfGraph.value == 'statVsStat'){
    chartOptions.value.chart.type = 'scatter'
    chartOptions.value.dataLabels= {
        enabled: true,
        textAnchor: 'start',
        formatter: function(val, {seriesIndex, dataPointIndex, w }) {
            return players.value[dataPointIndex];
        },
        offsetX: -5,
        offsetY: -5
    }


    let xStat = mapper[xStatName.value]
    let yStat = mapper[yStatName.value]

    chartOptions.value.xaxis.title.text = xStatName.value
    chartOptions.value.yaxis.title.text = yStatName.value

    let ans = Promise.all(players.value.map(player => getDataStatVsStat(player, xStat, yStat)))
        .then(data => {
        dataObtained.value = true; // set the state to true
        series.value = [
        {
                name: "SAMPLE A",
                data: data
        }]
        return data;
        
        }
    )


  } else if (typeOfGraph.value == 'lineGraphSeason'){
    chartOptions.value.chart.type = 'line'
    chartOptions.value.legend= {
        position: 'bottom',
        horizontalAlign: 'right',
        floating: true,
        offsetY: 25,
        offsetX: -5
    }

    chartOptions.value.grid.show = true;
    chartOptions.value.grid.padding.right = 20;

    let stat = mapper[lineStatName.value]
    chartOptions.value.xaxis.title.text = 'Season'
    chartOptions.value.yaxis.title.text = lineStatName.value



    let ans = Promise.all(players.value.map(player => getStatNamesLine(player, stat)))
        .then(data => {
        dataObtained.value = true; // set the state to true
        series.value = players.value.map((player, index) => ({
            name: player,
            data: data[index]
        }))
        return data;
        
        }
    )




  }
  
}

function clicked() {
  doAllPromises() // call the function to get the data
  submitClicked.value = true; // set the state to true
}


</script>

<template>
    <div>
        <h1>Make any NBA graph, fully customisable and fast.</h1>
        <p>COMING SOON: yearly line graphs, advanced metrics, redesign</p>
        <div class="example-container">
            <nuxt-link to="/example">See an example</nuxt-link>

        </div>

        <div v-if="dataObtained && submitClicked" class="graph-container"  >
            <component :is="chartComponent"  :options="chartOptions" :series="series" class="chart"/>
        </div>

        
        <div v-else-if="!submitClicked">
            <div>
                <div class="form-container">
                    <label>Choose a graph type:</label>
                    <select v-model="typeOfGraph">
                        <option value="statVsStat">Stat vs Stat</option>
                        <option value="lineGraphSeason">Line Graph Season</option>
                    </select>
                </div>
            </div>

            <div class="form-container" v-if="typeOfGraph == 'statVsStat'">
                <div class="label-container">
                    <div class="labels">
                        <label>Choose a stat for X Axis:</label>
                    </div>
                    <div class="labels">
                        <label>Choose a stat for Y Axis:</label>
                    </div>

                </div>

                <div class="options-container">

                    <div class='x-options'>
                        <select v-model="xStatName">
                            <option value="PPG">PPG</option>
                            <option value="APG">APG</option>
                            <option value="RPG">RPG</option>
                            <option value="SPG">SPG</option>
                            <option value="BPG">BPG</option>
                            <option value="TPG">TPG</option>
                            <option value="FGp">FG%</option>
                            <option value="ThPp">3P%</option>
                            <option value="FTp">FT%</option>
                            <option value="eFGp">eFG%</option>

                        </select>
                    </div>

                    <div class="y-options">
                        <select v-model="yStatName">
                            <option value="PPG">PPG</option>
                            <option value="APG">APG</option>
                            <option value="RPG">RPG</option>
                            <option value="SPG">SPG</option>
                            <option value="BPG">BPG</option>
                            <option value="TPG">TPG</option>
                            <option value="FGp">FG%</option>
                            <option value="ThPp">3P%</option>
                            <option value="FTp">FT%</option>
                            <option value="eFGp">eFG%</option>

                        </select>
                    </div>
                </div>
            

                <div class="season-container">
                    <label>Choose Season:</label>

                    <div class="season-options">
                        <select v-model="season">
                            <option value=2025>2025</option>
                            <option value=2024>2024</option>
                            <option value=2023>2023</option>
                            <option value=2022>2022</option>
                            <option value=2021>2021</option>
                            <option value=2020>2020</option>
                            <option value=2019>2019</option>
                            <option value=2018>2018</option>   
                            <option value=2017>2017</option>
                            <option value=2016>2016</option>
                            <option value=2015>2015</option>
                            <option value=2014>2014</option>
                            <option value=2013>2013</option>
                            <option value=2012>2012</option>


                        </select>
                    </div>
                </div>
            </div>

            <div v-else-if="typeOfGraph == 'lineGraphSeason'">
                <div>
                    <p>Note: This graph can currently only support 5 players at a time.</p>
                    <label>Choose a stat: </label>
                    <select v-model="lineStatName">
                        <option value="PPG">PPG</option>
                        <option value="APG">APG</option>
                        <option value="RPG">RPG</option>
                        <option value="SPG">SPG</option>
                        <option value="BPG">BPG</option>
                        <option value="TPG">TPG</option>
                        <option value="FGp">FG%</option>
                        <option value="ThPp">3P%</option>
                        <option value="FTp">FT%</option>
                        <option value="eFGp">eFG%</option>
                    </select>
                </div>
            </div>

            <div class="player-container">
                <label>Add Players:</label>
                <div class="player-input-container">
                    <input type="text" v-model="newPlayer" placeholder="Enter player name" />
                    <button class="player-button" @click="addPlayer">Add Player</button>
                </div>

                <label>Or Control/Command-Click to choose from these: </label>
                <div class="player-list-options">
                    <select v-model="players" multiple>
                        <option class="list-item" v-for="(player, index) in playerIndex" :key="index" :value="player">
                            {{ player }}
                        </option>  
                    </select>
                </div>

                <div class="player-list">
                    <ul>
                        <li v-for="(player, index) in players" :key="index">
                            {{ player }}
                        </li>
                    </ul>
                </div>
            </div>

            <div class="submit-container">
                <button @click="clicked">Submit</button>
            </div>
         </div>
        <div v-else>
            <div class="loading-container">
                <p>Waiting for Data....</p>
            </div>
        </div>

        
    </div>
</template>

<style>
.home {
    margin-top: 20px;
    font-size: 20px;
}

.graph-container {
  margin-top: 20px;
}

.chart {
  overflow: visible;
}

.form-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  
}

.options-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.label-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.labels {
    text-align: center;
    width: 100%
}

.x-options, .y-options {
  width: 80%;
  padding: 10px;
  border-radius: 5px;

}

.submit-container {
    display: flex;
    justify-content: center;
    margin-top: 10px;
}

.player-input-container {
    display: flex;
    justify-content: center;
    margin-top: 10px;
}

.player-button {
    height: 62px;
    margin-left: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.list-item {
    padding-bottom: 15px;
}

.player-list-options {
    display: flex;
    justify-content: center;
    padding: 10px;
    height: 400px;
}

.season-container{
    margin-top: 10px;
}


.loading-container {
    display: flex;
    justify-content: center;
    margin-top: 10px;
}

.example-container {
    margin-top: 30px;
  text-align: center;
}
</style>
