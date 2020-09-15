export const activityTypeWeights = {
    'none': 0,
    'fit': 0.1,
    'fit-snack': -0.05,
    'unhealthy-salty': -0.1,
    'unhealthy-sweet': -0.15,
    'unhealthy-mix': -0.15,
    'gym': 0.15,
    'running': 0.2,
    'bike': 0.1
}

export const initialProbability = 0.3

export const formTypes = [
    'form-type-breakfast',
    'form-type-lunch',
    'form-type-dinner',
    'form-type-snacks',
    'form-type-training'
]

export const trainingActivities = [
    { value: 'none', label: 'training-activity-none' },
    { value: 'gym', label: 'training-activity-gym' },
    { value: 'running', label: 'training-activity-running' },
    { value: 'bike', label: 'training-activity-bike' }
]


export const foodTypes = [
    { value: 'none', label: 'food-type-none' },
    { value: 'fit', label: 'food-type-fit' },
    { value: 'unhealthy-salty', label: 'food-type-unhealthy-salty' },
    { value: 'unhealthy-sweet', label: 'food-type-unhealthy-sweet' }
]

export const snackTypes = [
    { value: 'none', label: 'food-type-none' },
    { value: 'fit-snack', label: 'food-type-fit' },
    { value: 'unhealthy-salty', label: 'food-type-unhealthy-salty' },
    { value: 'unhealthy-sweet', label: 'food-type-unhealthy-sweet' },
    { value: 'unhealthy-mix', label: 'food-type-unhealthy-mix' }
]

export const approvalIconSize = '8vw'