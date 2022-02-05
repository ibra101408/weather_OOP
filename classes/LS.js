class LS {
    constructor() {
        this.defaultCity = 'Tallinn'
        this.city
    }

    getCity() {
        //if there is no city saved in LS
        if(localStorage.getItem('city') === null) {
            //then the default city will be displayed
            this.city = this.defaultCity
            //else get the city from LS
        } else {
            this.city = localStorage.getItem('city')
        }
        return this.city
    }

    setCity(city) {
        localStorage.setItem('city', city)
    }
}