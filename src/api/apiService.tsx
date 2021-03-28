
function handleFetch(url: string) {
    const defaultOptions = {
        method: 'GET',
    }
    return Promise.race([
        new Promise<T>((resolve, reject) => {
            fetch(url, defaultOptions).then((response) => {
                console.log('=== fetch res')
                if (response.status === 500) {
                    return response.text()
                }
                return response.json()
            }).then((responseJson) => {
                console.log('=== fetch responseJson', responseJson)
                resolve(responseJson)
            })
            .catch(reject)
        }),
        new Promise<T>((_, reject) => {
            setTimeout(() => reject(new Error('ErrorTimeOut')), 15000)
        }),
    ])
}

export default { handleFetch }