import {createStore} from 'vuex'

export default createStore({
    state: {
        isActive: true,
        activeIndex: 0,
        valuePrice: 'Выбрать',
        valueMaterial: 'Выбрать',
        breadcrumb: [
            {name: 'Главная', path: '/'},
            {name: 'Ситема хранения', path: 'saved'},
            {name: 'Комплекты стелажных систем', path: 'set'}
        ],
        productsList: [],
        sortPrice: [
            {name: 'Цена по возрастанию', id: 1},
            {name: 'Цена по убыванию', id: 2},
        ],
        material: [{ "id": "1", "name": "Дерево" }, { "id": "2", "name": "Металл" }
        ],
    },
    mutations: {
        setActive(state, payload) {
            state.activeIndex = payload
            if (state.activeIndex === state.breadcrumb.length - 1) {
                state.isActive = true
            } else {
                state.isActive = false
            }
        },

        setSortPrice(state, payload) {

        },

        updateMessagePrice (state, payload) {
            state.valuePrice = payload
        },

        updateMessageMaterial (state, payload) {
            state.valueMaterial = payload
        },

    },
    getters: {
        activeSteps(state) {
            return state.activeIndex
        },
        //Попробовать переписать геттер
        getProductList(state) {
            if(state.valueMaterial !== 'Выбрать') {
                return state.productsList.filter(el => el.material === +state.valueMaterial)
            }
            if ( state.valuePrice === 'Выбрать') {
                return state.productsList
            }
            if ( +state.valuePrice === 1) {
                return  state.productsList.sort((a,b) => a.price['current_price'] > b.price['current_price'] ? 1 : -1)
            }
            if (+state.valuePrice === 2) {
                return  state.productsList.sort((a,b) => a.price['current_price'] < b.price['current_price'] ? 1 : -1)
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
