export const selectedUser =(user) => {
    console.log('you clicked',user.name)
    return {
        type:"user_selected",
        playload:user
    }
}