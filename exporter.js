
// inline object export
export const car = {
    name: 'maruthi',
    color: 'blue',
}

// object export
export const bus = {
    name: 'omni',
    color: 'green',
}

// class export
export class X {

    greet(){ 
        console.log("Hello dear")
    }
}

// object exported by deafult
const van = {
    name: 'traveller',
    color: 'silver'
}

// function export
const name = function foo() { 
    return "Helo" 
    }

export default {    
    name,
    van,
}

