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
    id_user: '',
    name: '',
    is_login: false,
    login_failed: false,
    type: '',
    cart: [],
    category: []
  };
  
const store =
process.env.NODE_ENV === "production"
    ? createStore(initialState)
    : devtools(createStore(initialState));


const adapter = localStorageAdapter();
persistStore(store, adapter);

const actions = store => ({
    getAllCategory: async (state) => {
        const url = "http://localhost:5000/api/public/kategori"
        await axios
        .get(url)
        .then((response) => {
            store.setState({
                category: response.data.data,
            })
            // console.log("Response all book: ", response)
        })
        .catch((err) => {
            console.log(err)
        })
    },

    getAllBook: async (state, is_login, id_user) => {
        let url = ''
        if(is_login){
            url = "http://localhost:5000/api/public/items?is_login=True&id_user=" + id_user

        }else{
            url = "http://localhost:5000/api/public/items"
        }
        await axios
        .get(url)
        .then((response) => {
            store.setState({
                listBooks: response.data.data,
            })
            // console.log("Response all book: ", response)
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
            // console.log("Response one book: ", response)
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
                is_login: true,
                id_user: response.data.id_user,
                type: response.data.type,
                name: response.data.name
            })
            console.log("Response signup: ", response)
        })
        .catch((err) => {
            console.log(err)
        })
    },

    handleLogout: (state) => {
        localStorage.clear()

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
                login_failed: false,
                id_user: response.data.id_user,
                type: response.data.type,
                name: response.data.name
            })
            // console.log("Response: ", response)
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
        // console.log(url)
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
    },

    getCartData: async (state, token) => {   
        let url = "http://localhost:5000/api/users/cart"
        let auth = "Bearer " + token
        // console.log(auth)
        
        await axios
        .get(url, { headers: { "Authorization": auth } })
        .then((res) => {
            store.setState({
                cart: res.data
            })
            // console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
    },

    updateCart: async (state, id, token, action) => {
        let url = "http://localhost:5000/api/users/cart/" + id
        let auth = "Bearer " + token
        let body = {
            "action": action
        }
        let header = { 
            headers: { 
                "Authorization": auth 
            } 
        }
        await axios
        .patch(url,body ,header)
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
    },

    perubahanQty: (state, id, action) => {
        let cart = state.cart
        let data = cart.data
        data.map((item, key) => {
            if(item['buku.id'] == id){
                if(action == 'tambah_qty'){
                        cart.data[key].qty += 1
                        cart.total_qty += 1
                        cart.total_price += 1 * cart.data[key].price
                }
                else if(action == 'kurang_qty' && cart.data[key].qty > 1){
                    cart.data[key].qty -= 1
                    cart.total_qty -= 1
                    cart.total_price -= 1 * cart.data[key].price
                }
                else if(action == "delete"){
                    cart.total_qty -= cart.data[key].qty
                    cart.total_price -= cart.data[key].qty * cart.data[key].price
                    cart.data.splice(key, 1)
                }
                store.setState({
                    cart: cart
                })
                console.log(state.cart)
            }
        })
    },

    addCart: async (state, id, token) => {
        let url = "http://localhost:5000/api/users/cart/" + id
        let auth = "Bearer " + token
        let body = {}
        let header = { 
            headers: { 
                "Authorization": auth 
            } 
        }
        await axios
        .post(url, body ,header)
        .then((res) => {
            alert('Berhasil tambah buku ke keranjang')
        })
        .catch((err) => {
            console.log(err)
        })
    }
})


export { store, actions }