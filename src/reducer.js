export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    discover_weekly: null,
    //token: null,
    //token: "BQDSuOH6NPlQuk4ne0Yp-5KOkbkHf1awJqAzTQMX_N69KgFYw5I7r90ziM6l_itXXxd5ws6fg-UAMOj6ljeGmEc9zjYqIP2dY1j33I2jBHNYoN_CZ90JRfrm7rXvivX-Uj81jSkRmz5dB6wUUKv-_3Nf2DLBn9heF6KyYIRNl_wNNVjD",
};

const reducer = (state,action) => {
console.log(action);
//action  -> type,[payload]
 switch(action.type){
     case 'SET_USER' :
         return {
             ...state,
             user: action.user,
         };
      case 'SET_TOKEN' :
          return{
              ...state,
              token: action.token
          };
      case 'SET_PLAYLISTS' :
           return{
               ...state,
               playlists: action.playlists,
           };   
      case "SET_DISCOVER_WEEKLY" :
          return{
              ...state,
              discover_weekly: action.discover_weekly,
          };     
         default:
             return state;
         
 }
};

export default reducer;