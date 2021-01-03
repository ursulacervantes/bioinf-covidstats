import response from './data.json'

export default () => {
    // Max value is the maximun error value
    let maxValue = 0

    const ages = Object.entries(response.data).reduce((res, data) => {
        const ages = data[1].reduce((r, d) => {
            const error = {}
            maxValue = Math.max(...[...d.error, maxValue])

            // data[0] could be 'varones' or 'mujeres'
            error[data[0]] = d.error
            r[d.name] = {
                error
            }

            // data[0] could be 'varones' or 'mujeres'
            r[d.name][data[0]] = d.value

            return r
        }, {})

        if (res === {}) {
            return ages
        } else {
            // If res is not empty, map values based on the same age range
            // and merge error in the same array
            Object.entries(ages).forEach(([age, val]) => {
                if (res[age]) {
                    res[age] = {
                        // copy values from both objects
                        ...res[age],
                        ...val,
                        // and merge error from 'varones' and 'mujeres'
                        error: {
                            ...res[age].error,
                            ...val.error
                        }
                    }
                } else {
                    res[age] = val
                }
            })
        }

        return res
    }, {})

    const data =  Object.entries(ages).reduce((res, data) => {
        res.push({
            ages: data[0],
            ...data[1]
        })
        return res
    }, [])

    return {
        data,
        maxValue: Math.round(maxValue + 5),
    }
}
