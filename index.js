import express from 'express'
import si from 'systeminformation'

const app = express()
const PORT = 8000

app.use(express.json())

app.get('/statistic', async (req, res) => {

    const memory = await si.mem()
    const cpu = await si.cpu()
    const cpu_temp = await si.cpuTemperature()

    res.status(200).send({
        cpu: {
            tempurature: `${cpu_temp.main}˚C`,
        },
        memory: {
            total: `${memory.total / (1024 * 1024 * 1024)} GB`,
            free: `${memory.free / (1024 * 1024 * 1024)} GB`,
            used_percentage: `${memory.used} %`
        }
    })
})

app.listen(8080, () => {console.log('Listening on port 8080')})