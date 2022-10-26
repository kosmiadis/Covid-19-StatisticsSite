let countryStats = {

    options: {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1b7197f7a5msh77b06ed09b7fe0cp156c3bjsn6470e99d7eda',
            'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
        }
    },
    
    fetchCountry: function (inputCountry) {
        let country
        let countryISO
        fetch('https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/countries-name-ordered', this.options)
	        .then(response => response.json())
	        .then(response => {
                
                for (const c of response) {
                    if (c.Country === inputCountry) {
                        country = c.Country
                        countryISO = c.ThreeLetterSymbol
                        break
                    }
                }
                this.fetchCountryStats(country, countryISO)
            })
        
       
	        
    },

    fetchCountryStats: function (country, countryISO) {
        
        fetch('https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/country-report-iso-based/' + country + '/' + countryISO, this.options)
        .then(response => response.json())
        .then(response => {
            this.displayCountryStats(response)
        } 
        )
    },

    displayCountryStats: function (countryStats) {
        let countryimgSrc
        fetch('https://restcountries.com/v3.1/name/' + countryStats[0].Country)
        .then(response => response.json())
        .then(country => {
            console.log('Country', country)
            countryimgSrc = country[0].flags.png
            

            console.log('Country Covid Stats',countryStats)
            console.log(countryimgSrc)

        })
    }

}

countryStats.fetchCountry('Russia')
