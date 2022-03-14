import axios from "axios";

export default async function auth({ next, router }) {
    await axios.get("/auth/user")

    return next();
}