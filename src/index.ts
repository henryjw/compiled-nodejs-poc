import axios from "axios"
import {print} from "./print";

print(process.execPath);

print("Hello world");

(async () => {
    const res = await axios.get("https://www.google.com");
    const data = res.data as string;

    print(`Number of characters in Google's Homepage HTML: ${data.length}`)
})();