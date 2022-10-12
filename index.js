function saturdayFun(activity = 'roller-skate'){
    return (`This Saturday, I want to ${activity}!`)
}

const mondayWork = function(activity = 'go to the office'){
    return (`This Monday, I will ${activity}.`)
}
function wrapAdjective(parameter = "special"){
    return function(parameter2){
        return (`You are ${parameter}${parameter2}${parameter}!`)
        }
}