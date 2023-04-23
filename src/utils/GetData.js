import axios from "axios";
export const fetchShips = async ({ pageParam = 1 }) => {
    const res = await axios.get(process.env.REACT_APP_URL + "?page=" + pageParam)
    return res.data
}
export const searchShips = async ({ queryKey }) => {
    const res = await axios.get(process.env.REACT_APP_URL + "?search=" + queryKey[1].replace(/-/g,' '))
    return res.data
}
export const detailShip = async ({ queryKey }) => {
    const res = await axios.get(process.env.REACT_APP_URL + queryKey[1])
    return res.data
}