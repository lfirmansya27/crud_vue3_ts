<script setup lang="ts">

    import { ref } from "vue";
    
    import { useRouter } from "vue-router";

    import Api from "../../api";

    interface Errors{
        image?: string[];
        title?: string[];
        description?: string[];
        price?: string[];
        stock?: string[];
    }

    const image = ref<File | null>(null);
    const title = ref("");
    const description = ref("");
    const price = ref("");
    const stock = ref("");

    const errors = ref<Errors>({});

    const router = useRouter();

    const handleFileChange = (event: Event) => {
        const target = event.target as HTMLInputElement;
        if (target.files && target.files[0]) {
            image.value = target.files[0];
        }
    };

    const storeProduct = async () => {
        const formData = new FormData();
        if (image.value) {
            formData.append("image", image.value);
        }
        formData.append("title", title.value);
        formData.append("description", description.value);
        formData.append("price", price.value);
        formData.append("stock", stock.value);

        try {
            await Api.post("/api/products", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            router.push({ name: "products" });
        } catch (error : any) {
            errors.value = error.response.data;
        }
    };
</script>
<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                <div class="card border-0 rounded-3 shadow">
                    <div class="card-body">
                        <form @submit.prevent="storeProduct">
                            <div class="mb-3">
                                <label class="form-label fw-bold">Image</label>
                                <input type="file" @change="handleFileChange" class="form-control" />
                                <div v-if="errors.image" class="alert alert-danger mt-2">{{ errors.image[0] }}</div>
                            </div>

                            <div class="mb-3">
                                <label class="form-label fw-bold">Title</label>
                                <input type="text" v-model="title" class="form-control" placeholder="Title Product" />
                                <div v-if="errors.title" class="alert alert-danger mt-2">{{ errors.title[0] }}</div>
                            </div>

                            <div class="mb-3">
                                <label class="form-label fw-bold">Description</label>
                                <textarea v-model="description" class="form-control" rows="5"
                                    placeholder="Description Product"></textarea>
                                <div v-if="errors.description" class="alert alert-danger mt-2">{{ errors.description[0]}}</div>
                            </div>

                            <div class="row">
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label class="form-label fw-bold">Price</label>
                                        <input type="number" v-model="price" class="form-control"
                                            placeholder="Price Product" />
                                        <div v-if="errors.price" class="alert alert-danger mt-2">{{ errors.price[0] }}
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label class="form-label fw-bold">Stock</label>
                                        <input type="number" v-model="stock" class="form-control"
                                            placeholder="Stock Product" />
                                        <div v-if="errors.stock" class="alert alert-danger mt-2">{{ errors.stock[0] }}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button type="submit" class="btn btn-md btn-primary rounded-5 shadow border-0">Save</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>