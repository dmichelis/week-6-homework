const getData = async (year, round_no) => {
    let response = await axios.get(`https://ergast.com/api/f1/${year}/${round_no}/driverStandings.json`)
  
    return response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings
}

const getSmallData = async (year, round_no) => {
    let response = await axios.get(`https://ergast.com/api/f1/${year}/${round_no}/driverStandings.json`)

    return response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings
}

sample_data = getData(2020, 1)

const DOM_ELEMENTS = {
    ranger_api: '.ranger-api'
}

const load_data = async () => {
    clear_table()
    let query_season = document.getElementById('season').value
    let query_round = document.getElementById('yearround').value

    const new_standings = await getData(query_season, query_round)

    new_standings.forEach( element => create_table(element.position, element.Driver.givenName, element.Driver.familyName, element.Driver.nationality, element.Constructors[0].name, element.wins, element.points, element.Driver.url))

}

const load_small_data = async () => {
    clear_table()
    let query_season = document.getElementById('season').value
    let query_round = document.getElementById('yearround').value
    const new_standings = await getData(query_season, query_round)
    let counter_run = 0

    for(element of new_standings){
        create_small_table(element.position, element.Driver.givenName, element.Driver.familyName, element.Driver.nationality, element.Constructors[0].name, element.wins, element.points, element.Driver.url)
        counter_run++
        if(counter_run>6){
            break
        }
    }
}

const load_custom_data = async () => {
    clear_table()
    let query_season = document.getElementById('season').value
    let query_round = document.getElementById('yearround').value

    let query_range = document.getElementById('customfor').value
    const new_standings = await getData(query_season, query_round)
    let counter_run = 0

    let loop_runs = query_range-1

    for(element of new_standings){
        create_small_table(element.position, element.Driver.givenName, element.Driver.familyName, element.Driver.nationality, element.Constructors[0].name, element.wins, element.points, element.Driver.url)
        counter_run++
        if(counter_run>loop_runs){
            break
        }
    }
}



const create_table = (position, first_name, last_name, nationality, sponsor_name, wins, points, wiki) =>{
    const html = `<tr><td>${position}</td><td>${first_name} ${last_name}</td><td>${nationality}</td><td>${sponsor_name}</td><td>${wins}</td><td>${points}</td><td><a href="${wiki}">More Info</a></td></tr>`
    document.querySelector(DOM_ELEMENTS.ranger_api).insertAdjacentHTML('beforeend', html)
}

const create_small_table = (position, first_name, last_name, nationality, sponsor_name, wins, points, wiki) =>{
    const html = `<tr><td>${position}</td><td>${first_name} ${last_name}</td><td>${nationality}</td><td>${sponsor_name}</td><td>${wins}</td><td>${points}</td><td><a href="${wiki}">More Info</a></td></tr>`
    document.querySelector(DOM_ELEMENTS.ranger_api).insertAdjacentHTML('beforeend', html)
}



const clear_table = () => {
    document.querySelector(DOM_ELEMENTS.ranger_api).innerHTML = ''
}