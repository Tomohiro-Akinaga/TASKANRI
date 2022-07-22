import axios from "axios";

export default async function getLoginUserData() {
    const loginUserId = localStorage.getItem("userid");
    const response = await axios.get(`/users/${loginUserId}`);
    return response.data;
}
