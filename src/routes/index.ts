// Created by: [lfirmansya]
// Menambahkan routing pada vue 3 dengan typescript
import { createRouter, createWebHistory, type  RouteRecordRaw } from "vue-router"

// Membuat variable routes yang berisi array dari RouteRecordRaw
// RouteRecordRaw adalah tipe data yang digunakan untuk mendefinisikan route pada vue-router
const routes: Array<RouteRecordRaw> = [
  {
        // Route untuk halaman home
        // Ketika user mengakses path "/" maka akan diarahkan ke component home.vue
        // Component home.vue berada pada folder views
        // Component home.vue akan diimport secara dinamis menggunakan import()
        path: "/",
        name: "home",
        component: () => import('../views/home.vue')
  },
  {
        path: "/products",
        name: "products",
        component: () => import('../views/products/index.vue')
  },
  {
        path: '/products/create',
        name: 'products-create',
        component: () => import('../views/products/create.vue')
  },
  {
      path: '/products/edit/:id',
      name: 'products-edit',
      component: () => import('../views/products/edit.vue')
}
]

// Membuat router menggunakan createRouter
// createRouter adalah fungsi yang digunakan untuk membuat router pada vue-router
// createWebHistory adalah fungsi yang digunakan untuk membuat history mode pada vue-router
// history adalah mode routing yang digunakan pada vue-router
// routes adalah array dari RouteRecordRaw yang sudah didefinisikan sebelumnya
const router = createRouter({
    history: createWebHistory(),
    routes
})

// Export router agar bisa digunakan pada file lain
export default router
