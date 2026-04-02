import ProgressBar from "progress";

const bar = new ProgressBar(':bar', {total:20, incomplete:'.', complete:'*' })

const t = setInterval(() => {
    bar.tick()
    if (bar.complete){
        clearInterval(t)
    }
}, 200)
