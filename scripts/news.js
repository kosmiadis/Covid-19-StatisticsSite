let covidNews = {

    options: {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1b7197f7a5msh77b06ed09b7fe0cp156c3bjsn6470e99d7eda',
            'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
        }
    },

    fetchNews: function () {
        fetch('https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/news/get-coronavirus-news/0', this.options)
        .then(response => response.json())
        .then(response => this.displayNews(response))
    },

    displayNews: function (news) {
        console.log(news)
    }   
}

window.addEventListener('load', e => {
    //covidNews.fetchNews()
})
    