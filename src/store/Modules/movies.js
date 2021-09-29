import movieslist from '../../assets/movie-list'
const SET_SEARCH = "SET_SEARCH"
const ADD_MOVIE = "ADD_MOVIE"
const SET_FILTER = "SET_FILTER"
const state = {
  movies: movieslist,
  search:'',
  filter :{

    key:'rating' ,
     order :'desc'
  }
}

const mutations = {
   [SET_SEARCH](state,search){
     state.search =search
   },
   [ADD_MOVIE](state , movie){
     state.movies.push(movie)
   },
   [SET_FILTER](state, filter) {
    state.filter = filter
},
}

const actions = {
  search({ commit }, search) {
    commit(SET_SEARCH, search)
},
addMovie({commit },movie){
  // movie.id = state.movie.length() + 1
  commit(ADD_MOVIE,movie)
},

filter({ commit }, filter) {
  commit(SET_FILTER, filter)
},
   }


const getters = {
  getMovies: state => {
    return state.movies.filter(movie => movie.name.toLowerCase().indexOf(state.search.toLowerCase()) > -1)
        .sort(compare(state.filter))
  }

}

const compare = ({ key, order }) => {
  return (a, b) => {

      let result = 0

      if (a[key] > b[key]) {
          result = 1
      }

      if (a[key] < b[key]) {
          result = -1
      }

      if (order === 'asc') return result

      return result * -1
  }
}



export default {
  state,
  mutations,
  actions,
  getters
}