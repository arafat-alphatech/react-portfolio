import createStore from "unistore";
import devtools from "unistore/devtools";
import axios from "axios";
import persistStore from 'unissist'
import localStorageAdapter from 'unissist/integrations/localStorageAdapter';

const initialState = {
    listBooks: [],
    userListBooks:[],
    userBook: [],
    book: [],
    token: '',
    is_login: false,
    login_failed: false,
    type: '',

  };
  
const store =
process.env.NODE_ENV === "production"
    ? createStore(initialState)
    : devtools(createStore(initialState));


const adapter = localStorageAdapter();
persistStore(store, adapter);

const actions = store => ({
    getAllBook: async (state) => {
        const url = "http://localhost:5000/api/public/items"
        await axios
        .get(url)
        .then((response) => {
            store.setState({
                listBooks: response.data.data,
            })
            console.log("Response all book: ", response)
        })
        .catch((err) => {
            console.log(err)
        })
    },

    getBook: async (state, id) => {
        const url = "http://localhost:5000/api/public/items/" + id
        await axios
        .get(url)
        .then((response) => {
            store.setState({
                book: response.data.data,
            })
            console.log("Response one book: ", response)
        })
        .catch((err) => {
            console.log(err)
        })
    },
    signUpHandle: async (state, name, username, email, password, alamat, no_telp) => {
        const url = "http://localhost:5000/api/users/register"

        const body = {
            name: name,
            username: username,
            email: email,
            password: password,
            alamat: alamat,
            no_telp: no_telp
        }
        // console.log(name)
        await axios
        .post(url, body)
        .then((response) => {
            alert("Sign up sukses")
            store.setState({
                token: response.data.token,
                is_login: true
            })
            console.log("Response signup: ", response)
        })
        .catch((err) => {
            console.log(err)
        })
    },

    handleLogout: (state) => {
        store.setState({
            token: '',
            is_login: false
        })
    },

    signInHandle: async (state, username, password) => {
        const url = "http://localhost:5000/api/users/login"

        const body = {
            username: username,
            password: password
        }
        await axios
        .post(url, body)
        .then((response) => {
            alert("Sign in sukses")
            store.setState({
                token: response.data.token,
                is_login: true,
                login_failed: false
            })
            console.log("Response: ", response)
        })
        .catch((err) => {
            store.setState({
                login_failed: true
            })
            console.log(err);
        })
    },

    handleSearch: async (state, value) => {
        const url = "http://localhost:5000/api/public/items?judul=" + value
        console.log(url)
        await axios
        .get(url)
        .then((response) => {
            store.setState({
                listBooks: response.data.data
            })
        })
        .catch((err) => {
            console.log(err)
        })
    },

    setFail: state =>{
        store.setState({
            login_failed: false
        })
    },

    getUserListBooks: async (state, token) => {
        const url = "http://localhost:5000/api/users/items"
        const auth = "Bearer " + token
        // console.log(auth)
        await axios
        .get(url, { headers: { "Authorization": auth } })
        .then((response) => {
            store.setState({
                userListBooks: response.data.data
            })
        })
        .catch((err) => {
            console.log(err)
        })
    }
})


export { store, actions }