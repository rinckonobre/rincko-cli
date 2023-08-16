import { Event } from "@discord/base";

export default new Event({
    name: "messageDelete",
    run(message) {
        console.log(`[deleted message] ${message.author?.username}: ${message.content}`);
    },
});