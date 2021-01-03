import response from './data.json'

export default () => {

    const max = response.data.reduce((res, data) => Math.max(...[...data.error, res]), 0)
    const data = response.data.map((data)=>{
        return {
            ...data,
            value: data.value.toFixed(1)
        }
    })

    return {
        data,
        maxValue: Math.round(max + 5)
    }
}
