import axios from "axios";

async function auth({ next, router }) {
    await axios.get("/auth/user")
    
    return next();
}

async function adminAuth({ next, router }) {
    await axios.get("/auth/admin")
    
    return next();
}

export { auth, adminAuth }