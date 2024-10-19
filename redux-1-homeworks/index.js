// explain below concepts and write an example for each one

// action:An action, is an object that contains the payload of information. They are the only source of information for the Redux store to be updated.

const addItem = (item) => {
    return {
      type: 'ADD_ITEM',
      payload: item
    };
  };

// action creator: An action creator is merely a function that returns an action object. Redux includes a utility function called bindActionCreators for binding one or more action creators to the store's dispatch() function.  
const toggleFavorite = (itemId) => {
    return {
      type: 'TOGGLE_FAVORITE',
      payload: {
        id: itemId
      }
    };
  };
  dispatch(toggleFavorite(42));


// reducer:In Redux, a reducer is a pure function that takes an action and the previous state of the application and returns the new state. The action describes what happened and it is the reducer's job to return the new state based on that action.
// Initial state of the user (not logged in by default)
const initialState = {
    isLoggedIn: false,
    username: null
  };
  
  // Reducer function
  function authReducer(state = initialState, action) {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...state,
          isLoggedIn: true, 
          username: action.payload  
        };
      case 'LOGOUT':
        return {
          ...state,
          isLoggedIn: false,  
          username: null 
        };
      default:
        return state;  
    }
  }
  
  export default authReducer;
  store.dispatch({ type: 'LOGIN', payload: 'JohnDoe' });  
store.dispatch({ type: 'LOGOUT' });  

 
// store:The global state of an application is stored in an object tree within a single store 
{/* <script src="https://unpkg.com/redux@4.0.5/dist/redux.min.js"></script>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Redux Store Example</title>
</head>
<body>
  <h1>Counter: <span id="counterValue">0</span></h1>
  <button id="increment">Increment</button>
  <button id="decrement">Decrement</button>

  <script>
    
    function counterReducer(state = { count: 0 }, action) {
      switch (action.type) {
        case 'INCREMENT':
          return { count: state.count + 1 };
        case 'DECREMENT':
          return { count: state.count - 1 };
        default:
          return state;
      }
    }


    const store = Redux.createStore(counterReducer);

    const counterDisplay = document.getElementById('counterValue');
    function updateCounterDisplay() {
      counterDisplay.innerText = store.getState().count;
    }


    store.subscribe(updateCounterDisplay);

    document.getElementById('increment').addEventListener('click', () => {
      store.dispatch({ type: 'INCREMENT' });
    });

    document.getElementById('decrement').addEventListener('click', () => {
      store.dispatch({ type: 'DECREMENT' });
    });
  </script>
</body>
</html>
