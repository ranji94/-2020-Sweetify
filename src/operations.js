import STRINGS from './resources/data/strings.json';

export function loadText(stringCode, ...args) {
    let text = ''

    STRINGS.map(tx => {
        if (tx.stringCode === stringCode) {
            text = tx.value
        }
    })

    args.forEach(arg => {
        text = text.replace('${val}', arg)
    })

    return text
}

export function getStringCodeByText(value, resource) {
    let sc = ''
    const res = typeof resource === 'undefined' ? STRINGS : resource

    res.map(tx => {
        if (tx.value === value) {
            sc = tx.stringCode
        }
    })

    return sc
}

export function getRandomBooleanWithProbability(probability) {
    return probability > Math.random()
}