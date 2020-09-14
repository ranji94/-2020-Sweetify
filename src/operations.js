import STRINGS from './resources/strings.json';

export function loadText(stringCode, resource) {
    let text = ''
    const res = typeof resource === 'undefined' ? STRINGS : resource

    res.map(tx => {
        if (tx.stringCode === stringCode) {
            text = tx.value
        }
    })

    return text
}