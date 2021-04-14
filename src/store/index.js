import {createStore} from 'vuex'

export default createStore({
    state: {
        isActive: true,
        isActiveFavourites: false,
        isActiveShopping: false,
        activeIndex: 0,
        valuePrice: 'Выбрать',
        valueMaterial: 'Выбрать',
        shoppingCart: [],
        favourites: [],
        breadcrumb: [
            {name: 'Главная', path: '/'},
            {name: 'Ситема хранения', path: 'saved'},
            {name: 'Комплекты стелажных систем', path: 'kits'}
        ],
        productsList: [],
        sortPrice: [
            {name: 'Цена по возрастанию', id: 1},
            {name: 'Цена по убыванию', id: 2},
        ],
        material: [{"id": "1", "name": "Дерево"}, {"id": "2", "name": "Металл"}
        ],

    },
    mutations: {
        addToFavourites(state, product) {
            if (localStorage.getItem(`${product.name}`)) {
                const check = [...state.favourites]
                check.filter(({name}, id) => product.name === name ?
                    state.favourites.splice(id, 1) : name)
                localStorage.removeItem(`${product.name}`)
                state.isActiveFavourites = false
                console.log(state.isActiveFavourites)
            }
            else {
                state.favourites.push(product)
                localStorage.setItem(`${product.name}`, JSON.stringify(product))
                state.isActiveFavourites = true
                console.log(state.isActiveFavourites)
            }

        },

        addToShoppingCart(state, product) {
            if (localStorage.getItem(`${product.name}`)) {
                const check = [...state.shoppingCart]
                check.filter(({name}, id) => product.name === name ?
                        state.shoppingCart.splice(id, 1) : name)
                localStorage.removeItem(`${product.name}`)
                state.isActiveShopping = false
            }
            else {
                state.shoppingCart.push(product)
                localStorage.setItem(`${product.name}`, JSON.stringify(product))
                state.isActiveShopping = true
            }
        },

        setActive(state, idx) {
            state.activeIndex = idx
            state.isActive = state.activeIndex === state.breadcrumb.length - 1;
        },

        setActiveIndex(state, idx) {
            state.activeIndex = idx
        },

        updateMessagePrice(state, valueSortPrice) {
            state.valuePrice = valueSortPrice
        },

        updateMessageMaterial(state, valueMaterial) {
            state.valueMaterial = valueMaterial
        },

    },

    getters: {
        activeSteps(state) {
            return state.activeIndex
        },
        getFlagFavourites(state) {
            return state.isActiveFavourites
        },
        getFlagShoppingCart(state) {
            return state.isActiveShopping
        },
        getIsActive(state) {
            return state.isActive
        },
        getMaterial(state) {
            return state.material
        },
        getSortPrice(state) {
            return state.sortPrice
        },
        getBreadcrumb(state) {
            return state.breadcrumb
        },

        getProductList(state) {
            if (state.valueMaterial !== 'Выбрать') {
                return state.productsList.filter(el => el.material === +state.valueMaterial)
            }
            if (state.valuePrice === "Выбрать") {
                return state.productsList
            }
            if (+state.valuePrice === 1) {
                return state.productsList.sort((a, b) => a.price['current_price'] > b.price['current_price'] ? 1 : -1)
            }
            if (+state.valuePrice === 2) {
                return state.productsList.sort((a, b) => a.price['current_price'] < b.price['current_price'] ? 1 : -1)
            }
            return state.productsList
        },

        getSortMaterial(state) {
            return state.productsList.filter(el => el.material === state.valueMaterial)
        }
    },

    actions: {
        async getProducts(context) {
            try {
                const response = await fetch('https://tages-gamp-test-default-rtdb.firebaseio.com/product.json')
                context.state.productsList = await response.json()
            } catch (e) {
                console.error(e)
            }
        }

    },
})
