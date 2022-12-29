class localStorageService {
   

    setItem(key, value) {
        value = JSON.stringify(value)
        localStorage.setItem(key, value)
        return true
    }

    getItem(key) {
        let value = localStorage.getItem(key)
        try {
            console.log("key value",JSON.parse(value))
            return JSON.parse(value)
        } catch (e) {
            console.log(e)
            return null

        }
    }
    removeItem(key) {
        localStorage.removeItem(key)
    }
}

export default new localStorageService()