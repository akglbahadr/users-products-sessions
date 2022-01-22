import logger from "pino" //logger
import dayjs from "dayjs" //formatter for timestamps

const log = logger({ 
    prettyPrint: true,
    base:{
        pid: false //process id
    },
    timestamp: () => `, "time":"${dayjs().format()}"`
})

export default log;