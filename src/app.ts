import { Utils } from "./utils";
import '../css/styles.scss';

export class God {
    name:string
    constructor(name:any) {
        this.name = name
    }
    run() {
        let div = document.createElement("div");
        let content = document.createTextNode(`Running ${this.name}...`)
        div.appendChild(content);
        document.body.appendChild(div)

        Utils.print(`Running ${this.name}...`)
    }
}

let app = new God("God")
app.run()