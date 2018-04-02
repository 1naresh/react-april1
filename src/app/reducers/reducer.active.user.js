export default function(state=null,action){
    switch(action.type){
        case 'user_selected':
            return action.playload;
            break
    }
    return state;
}