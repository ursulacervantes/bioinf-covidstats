import response from './data.json'

export default () => {

    const max = response.data.reduce((res, data) => Math.max(...[...data.error, res]), 0)

    return {
        data: response.data,
        maxValue: Math.round(max + 5)
    }
}
