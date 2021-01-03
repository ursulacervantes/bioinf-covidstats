import response from './data.json'

export default () => {
    const total = response.data.reduce((total, data)=>(total + data.value),0)

    return response.data.map((data) => (
            {
                id: data.name,
                name: data.name,
                value: (data.value * 100 / total).toFixed(1)
    }))
}