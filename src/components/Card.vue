<template>
<div class="card" :style="{width: width + 'rem'}">
  <div class="card-body">
    <slot></slot>
  </div>
</div>
</template>

<script>
export default {
    name: 'Card',
    props: {
        width: {
            type: String,
            default: "18"
        }
    }
}
</script>
