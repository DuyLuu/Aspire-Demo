
function handleFetch (url: string) {
    const defaultOptions = {
        method: 'GET'
    }
    return Promise.race([
        new Promise<T>((resolve, reject) => {
            fetch(url, defaultOptions).then((response) => {
                if (response.status === 500) {
                    return response.text()
                }
                return response.json()
            }).then((responseJson) => {
                resolve(responseJson)
            })
                .catch(reject)
        }),
        new Promise<T>((resolve, reject) => {
            setTimeout(() => reject(new Error('ErrorTimeOut')), 15000)
        })
    ])
}

export default { handleFetch }
