<script setup lang="ts">
import { ref, onMounted } from 'vue'
import algoliasearch from 'algoliasearch/lite'
import { instantsearch } from 'vue-instantsearch'
const searchClient = algoliasearch('YOUR_APP_ID', 'YOUR_SEARCH_API_KEY')
const handleInput = (query: string) => {}

onMounted(() => {
    const search = instantsearch({
        indexName: 'YOUR_INDEX_NAME',
        searchClient
    })
    search.start()
})
</script>

<template>
    <div>
        <ais-instant-search :search-client="searchClient" index-name="YOUR_INDEX_NAME">
            <ais-search-box @input="handleInput" />
            <ais-hits v-slot="{ items }">
                <div v-for="(item, index) in items" :key="index">
                    <h2>{{ item.name }}</h2>
                    <p>{{ item.description }}</p>
                </div>
            </ais-hits>
        </ais-instant-search>
    </div>
</template>
<style lang="scss" scoped></style>
