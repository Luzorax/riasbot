var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "Serveur Discord",
assets : {
large_image : "large",
large_text : "Join us" // THIS WILL SHOW AS "Playing <Status>" from the outisde
},
buttons : [{label : "DISCORD" , url : "https://discord.gg/FzcessDfys"},{label : "YOUTUBE",url : "https://www.youtube.com/channel/UCT5hFFGK_eBLBWvgpo3Vdeg"}]
}
})
})
client.login({ clientId : "835184349933731912" }).catch(console.error);