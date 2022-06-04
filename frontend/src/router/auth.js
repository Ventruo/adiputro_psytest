import axios from "axios";

async function auth({ next, router }) {
    const {status, data} = await axios.get("/auth/user")
    if (status != 200) router.push('/');
    
    return next();
}

async function adminAuth({ next, router }) {
    const {status, data} = await axios.get("/auth/admin")
    if (status != 200) router.push('/');
    
    return next();
}

export { auth, adminAuth }