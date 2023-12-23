export default function getTokenAndHeader() {
    const token = localStorage.getItem('token')
    if (!token) {
        alert('請重新登入')
        location.href = '/'
        return
    }
    return {
        token, headers: {
            Authorization: `Bearer ${token}`
        }
    }
}

