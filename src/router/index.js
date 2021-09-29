import { createRouter, createWebHistory } from 'vue-router'
import MovieReview from '../views/MovieReview.vue'

const routes = [
  
  {
    path:'/movie-preview/:id' ,
    name:'movie-preview',
    component :  MovieReview ,
    props : true 
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
