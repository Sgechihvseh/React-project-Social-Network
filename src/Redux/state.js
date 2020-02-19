import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";

let store = {
    _callSubscriber() {
        console.log('State changed')
    },
    _state: {
        dialogsPage: {
            dialogsData: [
                {
                    id: 0,
                    name: "Kolya",
                    my_src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEUAAAD///+6urqdnZ319fXFxcWnp6f5+fnh4eE+Pj5PT0/8/Pyzs7O/v796enrW1tYvLy/Nzc3s7OyEhIQZGRk2NjZVVVVpaWljY2Otra2fn59aWlpKSkrd3d0fHx8NDQ2Ojo6VlZVxcXF9fX0zMzMeHh4mJiaIiIjFG+GUAAAEIElEQVR4nO3c6VbbMBCG4YoEwpKwhD1sCbRw/3fYE42paLxp9cTnvM/PmDqaHuPPI1n8+gUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIzU/6LLQHl66c9PtSHuAyaY9FZob7REmmvQVaMZ+nfYWaMyJ9hiTzD0qvNAeZIpLjwKNedAeZoIrrwqX2sOMd+dVoDHX2gONduxZ4Ux7oLH6wt4Za+z3hr0zztjf+BdoDrQHGyWgwHHGvk/YOyOMfb+wd560BxzML+yd0cX+aWCBxnxoDzmQb9g7I4v99+ACjZloDzpIQNg72oMOsYkpcFSxH1WgMbfa4/b2GFnhlfzzyWryw2oPe6vPyAK/Y/9o59NH5XrqDqMrPJYT7N6n9u0X9Dm6QGPO7Rk+dj8+VC5px0tChVXs154XrnRL+l9M2DsS+0+1z1+Uq/ppmVRhFfsXtc+Pdav6YZ1WoJnbs9zWD+xN85FYoDG/7WkO6gemr8qlidiwd+Sm8tZwZHapXNzWn+QCjbmzZ1o1HdqD2Zz4sHeqe8qs6dipbnlpYe+823NdNx7TXsVJCXtnKidrjp131QLvsxRozMae7aH5oOp8TmLYO3K6euxba70Cv3IVWMX+SctRvQmds2wVGkm+RctRraWq3cY1hcT+TdvhuUqBrxkL/A6+1v80lYax7ZKKU8V+64WvsJLTdluI1RX7W8M3jC239midsb81dMPYEs8J1va8HQ8RAzeM2cLekRN3XBvTIVf/84W9I9OkXQ/zQzaMja1Oqk976q6G7GywhjFn2DsSeq2xbw3UMHYPIl5P7FvDrP/nDXunyrzu5937AQrMHfaOxH7PBOUADWPusHd6Y99aly4wf9jvDr5v7mBTuMICYf/PmXxF3/xP2Yax/eE4Bxl77xxe0RXGImHvyFR+7zxswYaxcW46Ixl6/8J5sRXGpvWFvJ7t9/Svh5TqiRvWiDLziv2tMg1jubB35KHFY12ySMNYLuxrA/d4kWyZv2Gsr7eX8GW/y+f9gGn2hrFk2DttL2g0yfziWO29l0Ik9v1eyn3OWmHhsHfk98vvxeqcDWP/7slcZBem58vx+RrG8mHvyHyM5waH81wVlg97p3pg8fzprzwFNrzUU5BcehvPn87TMIZuqEjjH/tWjobRd/dkLvKmsPeGvwwrjOEbKtKExP5W8iZ4/92Tuazs9/pfOqkNY9SGijRv9ov9f/3TGsZNsTrayXUX8Jp8UsNYro4OQbG/ldAwhu2ezCUs9reWb5EFxm+oSCMP1SGPw7PPuAqHDXsnMPatqIZx6LB3ZBEmLKliGsahw96pYj9sauEuuMC0DRVpQmPfCm4YB+vsm8gkf+CNIHCF8WHR+ce7ylrIYE/CxnC4B2/AAwAAAAAAAAAAAAAAAAAAAAAAAAAAAID4CzlGN8SCSUdDAAAAAElFTkSuQmCC",
                    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSqFBoEXYUjcxgUBQxlwjRJlPMsMI5ZaKO2iHlInEl9giTFmZdvQ&s",
                    received: "Hi",
                    sent: "efdsfea",
                },
                {
                    id: 1,
                    name: "Pasha",
                    my_src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEUAAAD///+6urqdnZ319fXFxcWnp6f5+fnh4eE+Pj5PT0/8/Pyzs7O/v796enrW1tYvLy/Nzc3s7OyEhIQZGRk2NjZVVVVpaWljY2Otra2fn59aWlpKSkrd3d0fHx8NDQ2Ojo6VlZVxcXF9fX0zMzMeHh4mJiaIiIjFG+GUAAAEIElEQVR4nO3c6VbbMBCG4YoEwpKwhD1sCbRw/3fYE42paLxp9cTnvM/PmDqaHuPPI1n8+gUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIzU/6LLQHl66c9PtSHuAyaY9FZob7REmmvQVaMZ+nfYWaMyJ9hiTzD0qvNAeZIpLjwKNedAeZoIrrwqX2sOMd+dVoDHX2gONduxZ4Ux7oLH6wt4Za+z3hr0zztjf+BdoDrQHGyWgwHHGvk/YOyOMfb+wd560BxzML+yd0cX+aWCBxnxoDzmQb9g7I4v99+ACjZloDzpIQNg72oMOsYkpcFSxH1WgMbfa4/b2GFnhlfzzyWryw2oPe6vPyAK/Y/9o59NH5XrqDqMrPJYT7N6n9u0X9Dm6QGPO7Rk+dj8+VC5px0tChVXs154XrnRL+l9M2DsS+0+1z1+Uq/ppmVRhFfsXtc+Pdav6YZ1WoJnbs9zWD+xN85FYoDG/7WkO6gemr8qlidiwd+Sm8tZwZHapXNzWn+QCjbmzZ1o1HdqD2Zz4sHeqe8qs6dipbnlpYe+823NdNx7TXsVJCXtnKidrjp131QLvsxRozMae7aH5oOp8TmLYO3K6euxba70Cv3IVWMX+SctRvQmds2wVGkm+RctRraWq3cY1hcT+TdvhuUqBrxkL/A6+1v80lYax7ZKKU8V+64WvsJLTdluI1RX7W8M3jC239midsb81dMPYEs8J1va8HQ8RAzeM2cLekRN3XBvTIVf/84W9I9OkXQ/zQzaMja1Oqk976q6G7GywhjFn2DsSeq2xbw3UMHYPIl5P7FvDrP/nDXunyrzu5937AQrMHfaOxH7PBOUADWPusHd6Y99aly4wf9jvDr5v7mBTuMICYf/PmXxF3/xP2Yax/eE4Bxl77xxe0RXGImHvyFR+7zxswYaxcW46Ixl6/8J5sRXGpvWFvJ7t9/Svh5TqiRvWiDLziv2tMg1jubB35KHFY12ySMNYLuxrA/d4kWyZv2Gsr7eX8GW/y+f9gGn2hrFk2DttL2g0yfziWO29l0Ik9v1eyn3OWmHhsHfk98vvxeqcDWP/7slcZBem58vx+RrG8mHvyHyM5waH81wVlg97p3pg8fzprzwFNrzUU5BcehvPn87TMIZuqEjjH/tWjobRd/dkLvKmsPeGvwwrjOEbKtKExP5W8iZ4/92Tuazs9/pfOqkNY9SGijRv9ov9f/3TGsZNsTrayXUX8Jp8UsNYro4OQbG/ldAwhu2ezCUs9reWb5EFxm+oSCMP1SGPw7PPuAqHDXsnMPatqIZx6LB3ZBEmLKliGsahw96pYj9sauEuuMC0DRVpQmPfCm4YB+vsm8gkf+CNIHCF8WHR+ce7ylrIYE/CxnC4B2/AAwAAAAAAAAAAAAAAAAAAAAAAAAAAAID4CzlGN8SCSUdDAAAAAElFTkSuQmCC",
                    src: "https://img.icons8.com/plasticine/2x/user.png",
                    received: "How are you?",
                    sent: "efdsfea",
                },

                {
                    id: 2,
                    name: "Sanya",
                    my_src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEUAAAD///+6urqdnZ319fXFxcWnp6f5+fnh4eE+Pj5PT0/8/Pyzs7O/v796enrW1tYvLy/Nzc3s7OyEhIQZGRk2NjZVVVVpaWljY2Otra2fn59aWlpKSkrd3d0fHx8NDQ2Ojo6VlZVxcXF9fX0zMzMeHh4mJiaIiIjFG+GUAAAEIElEQVR4nO3c6VbbMBCG4YoEwpKwhD1sCbRw/3fYE42paLxp9cTnvM/PmDqaHuPPI1n8+gUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIzU/6LLQHl66c9PtSHuAyaY9FZob7REmmvQVaMZ+nfYWaMyJ9hiTzD0qvNAeZIpLjwKNedAeZoIrrwqX2sOMd+dVoDHX2gONduxZ4Ux7oLH6wt4Za+z3hr0zztjf+BdoDrQHGyWgwHHGvk/YOyOMfb+wd560BxzML+yd0cX+aWCBxnxoDzmQb9g7I4v99+ACjZloDzpIQNg72oMOsYkpcFSxH1WgMbfa4/b2GFnhlfzzyWryw2oPe6vPyAK/Y/9o59NH5XrqDqMrPJYT7N6n9u0X9Dm6QGPO7Rk+dj8+VC5px0tChVXs154XrnRL+l9M2DsS+0+1z1+Uq/ppmVRhFfsXtc+Pdav6YZ1WoJnbs9zWD+xN85FYoDG/7WkO6gemr8qlidiwd+Sm8tZwZHapXNzWn+QCjbmzZ1o1HdqD2Zz4sHeqe8qs6dipbnlpYe+823NdNx7TXsVJCXtnKidrjp131QLvsxRozMae7aH5oOp8TmLYO3K6euxba70Cv3IVWMX+SctRvQmds2wVGkm+RctRraWq3cY1hcT+TdvhuUqBrxkL/A6+1v80lYax7ZKKU8V+64WvsJLTdluI1RX7W8M3jC239midsb81dMPYEs8J1va8HQ8RAzeM2cLekRN3XBvTIVf/84W9I9OkXQ/zQzaMja1Oqk976q6G7GywhjFn2DsSeq2xbw3UMHYPIl5P7FvDrP/nDXunyrzu5937AQrMHfaOxH7PBOUADWPusHd6Y99aly4wf9jvDr5v7mBTuMICYf/PmXxF3/xP2Yax/eE4Bxl77xxe0RXGImHvyFR+7zxswYaxcW46Ixl6/8J5sRXGpvWFvJ7t9/Svh5TqiRvWiDLziv2tMg1jubB35KHFY12ySMNYLuxrA/d4kWyZv2Gsr7eX8GW/y+f9gGn2hrFk2DttL2g0yfziWO29l0Ik9v1eyn3OWmHhsHfk98vvxeqcDWP/7slcZBem58vx+RrG8mHvyHyM5waH81wVlg97p3pg8fzprzwFNrzUU5BcehvPn87TMIZuqEjjH/tWjobRd/dkLvKmsPeGvwwrjOEbKtKExP5W8iZ4/92Tuazs9/pfOqkNY9SGijRv9ov9f/3TGsZNsTrayXUX8Jp8UsNYro4OQbG/ldAwhu2ezCUs9reWb5EFxm+oSCMP1SGPw7PPuAqHDXsnMPatqIZx6LB3ZBEmLKliGsahw96pYj9sauEuuMC0DRVpQmPfCm4YB+vsm8gkf+CNIHCF8WHR+ce7ylrIYE/CxnC4B2/AAwAAAAAAAAAAAAAAAAAAAAAAAAAAAID4CzlGN8SCSUdDAAAAAElFTkSuQmCC",
                    src: "https://noguiltlife.com/wp-content/uploads/2019/11/baby-yoda-sipping-tea-meme-1-e1575123902614.jpg",
                    received: "You are ready?",
                    sent: "efdsfea",
                },
                {
                    id: 3,
                    name: "Sergey",
                    my_src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEUAAAD///+6urqdnZ319fXFxcWnp6f5+fnh4eE+Pj5PT0/8/Pyzs7O/v796enrW1tYvLy/Nzc3s7OyEhIQZGRk2NjZVVVVpaWljY2Otra2fn59aWlpKSkrd3d0fHx8NDQ2Ojo6VlZVxcXF9fX0zMzMeHh4mJiaIiIjFG+GUAAAEIElEQVR4nO3c6VbbMBCG4YoEwpKwhD1sCbRw/3fYE42paLxp9cTnvM/PmDqaHuPPI1n8+gUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIzU/6LLQHl66c9PtSHuAyaY9FZob7REmmvQVaMZ+nfYWaMyJ9hiTzD0qvNAeZIpLjwKNedAeZoIrrwqX2sOMd+dVoDHX2gONduxZ4Ux7oLH6wt4Za+z3hr0zztjf+BdoDrQHGyWgwHHGvk/YOyOMfb+wd560BxzML+yd0cX+aWCBxnxoDzmQb9g7I4v99+ACjZloDzpIQNg72oMOsYkpcFSxH1WgMbfa4/b2GFnhlfzzyWryw2oPe6vPyAK/Y/9o59NH5XrqDqMrPJYT7N6n9u0X9Dm6QGPO7Rk+dj8+VC5px0tChVXs154XrnRL+l9M2DsS+0+1z1+Uq/ppmVRhFfsXtc+Pdav6YZ1WoJnbs9zWD+xN85FYoDG/7WkO6gemr8qlidiwd+Sm8tZwZHapXNzWn+QCjbmzZ1o1HdqD2Zz4sHeqe8qs6dipbnlpYe+823NdNx7TXsVJCXtnKidrjp131QLvsxRozMae7aH5oOp8TmLYO3K6euxba70Cv3IVWMX+SctRvQmds2wVGkm+RctRraWq3cY1hcT+TdvhuUqBrxkL/A6+1v80lYax7ZKKU8V+64WvsJLTdluI1RX7W8M3jC239midsb81dMPYEs8J1va8HQ8RAzeM2cLekRN3XBvTIVf/84W9I9OkXQ/zQzaMja1Oqk976q6G7GywhjFn2DsSeq2xbw3UMHYPIl5P7FvDrP/nDXunyrzu5937AQrMHfaOxH7PBOUADWPusHd6Y99aly4wf9jvDr5v7mBTuMICYf/PmXxF3/xP2Yax/eE4Bxl77xxe0RXGImHvyFR+7zxswYaxcW46Ixl6/8J5sRXGpvWFvJ7t9/Svh5TqiRvWiDLziv2tMg1jubB35KHFY12ySMNYLuxrA/d4kWyZv2Gsr7eX8GW/y+f9gGn2hrFk2DttL2g0yfziWO29l0Ik9v1eyn3OWmHhsHfk98vvxeqcDWP/7slcZBem58vx+RrG8mHvyHyM5waH81wVlg97p3pg8fzprzwFNrzUU5BcehvPn87TMIZuqEjjH/tWjobRd/dkLvKmsPeGvwwrjOEbKtKExP5W8iZ4/92Tuazs9/pfOqkNY9SGijRv9ov9f/3TGsZNsTrayXUX8Jp8UsNYro4OQbG/ldAwhu2ezCUs9reWb5EFxm+oSCMP1SGPw7PPuAqHDXsnMPatqIZx6LB3ZBEmLKliGsahw96pYj9sauEuuMC0DRVpQmPfCm4YB+vsm8gkf+CNIHCF8WHR+ce7ylrIYE/CxnC4B2/AAwAAAAAAAAAAAAAAAAAAAAAAAAAAAID4CzlGN8SCSUdDAAAAAElFTkSuQmCC",
                    src: "https://avatarfiles.alphacoders.com/651/thumb-65159.jpg",
                    received: "Axax",
                    sent: "efdsfea",
                }
            ],
            newMessages: [{
                newMessageText: 'Hi!',
                src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEUAAAD///+6urqdnZ319fXFxcWnp6f5+fnh4eE+Pj5PT0/8/Pyzs7O/v796enrW1tYvLy/Nzc3s7OyEhIQZGRk2NjZVVVVpaWljY2Otra2fn59aWlpKSkrd3d0fHx8NDQ2Ojo6VlZVxcXF9fX0zMzMeHh4mJiaIiIjFG+GUAAAEIElEQVR4nO3c6VbbMBCG4YoEwpKwhD1sCbRw/3fYE42paLxp9cTnvM/PmDqaHuPPI1n8+gUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIzU/6LLQHl66c9PtSHuAyaY9FZob7REmmvQVaMZ+nfYWaMyJ9hiTzD0qvNAeZIpLjwKNedAeZoIrrwqX2sOMd+dVoDHX2gONduxZ4Ux7oLH6wt4Za+z3hr0zztjf+BdoDrQHGyWgwHHGvk/YOyOMfb+wd560BxzML+yd0cX+aWCBxnxoDzmQb9g7I4v99+ACjZloDzpIQNg72oMOsYkpcFSxH1WgMbfa4/b2GFnhlfzzyWryw2oPe6vPyAK/Y/9o59NH5XrqDqMrPJYT7N6n9u0X9Dm6QGPO7Rk+dj8+VC5px0tChVXs154XrnRL+l9M2DsS+0+1z1+Uq/ppmVRhFfsXtc+Pdav6YZ1WoJnbs9zWD+xN85FYoDG/7WkO6gemr8qlidiwd+Sm8tZwZHapXNzWn+QCjbmzZ1o1HdqD2Zz4sHeqe8qs6dipbnlpYe+823NdNx7TXsVJCXtnKidrjp131QLvsxRozMae7aH5oOp8TmLYO3K6euxba70Cv3IVWMX+SctRvQmds2wVGkm+RctRraWq3cY1hcT+TdvhuUqBrxkL/A6+1v80lYax7ZKKU8V+64WvsJLTdluI1RX7W8M3jC239midsb81dMPYEs8J1va8HQ8RAzeM2cLekRN3XBvTIVf/84W9I9OkXQ/zQzaMja1Oqk976q6G7GywhjFn2DsSeq2xbw3UMHYPIl5P7FvDrP/nDXunyrzu5937AQrMHfaOxH7PBOUADWPusHd6Y99aly4wf9jvDr5v7mBTuMICYf/PmXxF3/xP2Yax/eE4Bxl77xxe0RXGImHvyFR+7zxswYaxcW46Ixl6/8J5sRXGpvWFvJ7t9/Svh5TqiRvWiDLziv2tMg1jubB35KHFY12ySMNYLuxrA/d4kWyZv2Gsr7eX8GW/y+f9gGn2hrFk2DttL2g0yfziWO29l0Ik9v1eyn3OWmHhsHfk98vvxeqcDWP/7slcZBem58vx+RrG8mHvyHyM5waH81wVlg97p3pg8fzprzwFNrzUU5BcehvPn87TMIZuqEjjH/tWjobRd/dkLvKmsPeGvwwrjOEbKtKExP5W8iZ4/92Tuazs9/pfOqkNY9SGijRv9ov9f/3TGsZNsTrayXUX8Jp8UsNYro4OQbG/ldAwhu2ezCUs9reWb5EFxm+oSCMP1SGPw7PPuAqHDXsnMPatqIZx6LB3ZBEmLKliGsahw96pYj9sauEuuMC0DRVpQmPfCm4YB+vsm8gkf+CNIHCF8WHR+ce7ylrIYE/CxnC4B2/AAwAAAAAAAAAAAAAAAAAAAAAAAAAAAID4CzlGN8SCSUdDAAAAAElFTkSuQmCC"
            }],
            newMessagesText: ''
        },
        profilePage: {
            PostData: [
                {id: 0, message: "Hi! How are yoy?", LikesCount: 15},
                {id: 1, message: "It's my first post!", LikesCount: 20}
            ],
            newPostText: ''
        },
        navbarPage: {
            friendPage: {
                names: [
                    {name: "Kolya"},
                    {name: "Pasha"},
                    {name: "Sanya"}
                ]
            }
        }
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.navbarPage = navbarReducer(this._state.navbarPage, action);
        this._callSubscriber(this._state);
    }
}


export default store;
