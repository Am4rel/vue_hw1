<template>
    <li>{{listItem.name}}</li>
</template>

<script>
export default ({
    props: {
        listItem: {
            type: Object
        }
    }
})
</script>
