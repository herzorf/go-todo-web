import axios from "axios";
interface AjaxProps {
    method: "post" | "get",
    url: string
    data: Object
}
function ajax({ method, url, data }: AjaxProps) {
    const http = axios.create();

    switch (method) {
        case "get":
            {
                http.get(url, data);
            }
            break;
        case "post":
            {
                http.post(url, data);
            }
            break;
        default:
            console.log("方法错误");
    }
}
export default ajax;
