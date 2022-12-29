export const authDataActionCreater = () => {
    return {
        type: "AUTH",
        payload: true,
    }
}

export const logOutDataActionCreater = () => {
    return {
        type: "LOGOUT",
        payload: false,
    }
}
