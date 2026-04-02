
    // Note, the execution order is reverse dispite the sequence

    // Macro Task

    // Low priority 3
    setImmediate( () => console.log(" setImmediate(): Immediate timer P3-3"))

    // Low priority 2
    setTimeout( () => console.log(" setTimout(): Timeout timer P3-2"), 2)
    
    // Low priority 1
    const id = setInterval( () => console.log("macro Tasks: \n setInterval(): Interval timer P3-1"))
    
    setTimeout( () => clearTimeout(id), 2)

    // Micro Task

    // Medium priority 
    new Promise( (resolve, reject) => {
        const success = true
        if (success === true) {
            resolve('micro Task: \n promise: success P2')
        } else{
            reject('micro Task: \n promise: failed P2')
        }
    }).then( (resolve) => console.log(resolve))
    .catch( (error) => console.log(error))

    // Emergency Task
        
    // High priority
    process.nextTick( () => console.log("emergency Task: \n process.nextTick() P1\n"))

    // exit with success
    process.exitCode = 0



