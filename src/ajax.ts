import axios from "axios";
interface AjaxProps {
    method: "post" | "get",
    url: string
    data?: object
}
function ajax({ method, url, data }: AjaxProps) {
    const http = axios.create();

    switch (method) {
        case "get":
            {
                return http.get(url, data);
            }
        case "post":
            {
                return http.post(url, data);
            }
        default:
            return Promise.reject("method参数错误")
    }
}
export default ajax;
