<template>
  <span class="px-3 py-1 rounded-xl" :class="classes"><slot></slot></span>
</template>

<script>
export default {
  props: {
    info: {
      type: Boolean,
    },
    success: {
      type: Boolean,
    },
    warning: {
      type: Boolean,
    },
    error: {
      type: Boolean,
    },
  },
  computed: {
    classes() {
      return {
        "text-green-500 bg-green-50": this.success,
        "text-blue-500 bg-blue-50": this.info,
        "text-yellow-600 bg-yellow-50": this.warning,
        "text-red-500 bg-red-50": this.error,
      };
    },
  },
};
</script>
