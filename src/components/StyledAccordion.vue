<template>
  <div class="accordion">
    <div v-for="(item, index) in items" :key="index" class="accordion-item">
      <div class="accordion-header" @click="toggle(index)">
        <div>
          <span v-if="isOpen(index)"><img src="../assets/minus.png" alt="" width="14"></span>
          <span v-else><img src="../assets/plus.png" alt="" width="14"></span>

        </div>
        <div>{{ item.title }}</div>
      </div>
      <transition name="accordion">
        <div v-show="isOpen(index)" class="accordion-content"
             :style="{ height: isOpen(index) ? contentHeight + 'px' : '0' }">
          <p>{{ item.content }}</p>

        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AccordionComponent',
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      openIndex: null,
      contentHeight: 0,
    };
  },
  methods: {
    toggle(index) {
      this.openIndex = this.openIndex === index ? null : index;
      this.$nextTick(() => {
        const content = this.$el.querySelectorAll('.accordion-content')[index];
        this.contentHeight = content ? content.scrollHeight : 0; // Set height based on content
      });
    },
    isOpen(index) {
      return this.openIndex === index;
    },
  },
};
</script>

<style scoped>
.accordion {
  border: 1px solid #ccc;
  border-radius: 5px;
}

.accordion-item {
  border-bottom: 1px solid #ccc;
}

.accordion-header {
  display: flex;
  gap: 2em;
  padding: 10px 20px;
  cursor: pointer;
  background-color: #f9f9f9;
  align-items: center;

  span {
    font-size: 15px;
    font-weight: 900;
  }
}

.accordion-content {
  overflow: hidden;
  /* Ensure content does not overflow during animation */
  transition: height .5s ease;
  /* Transition for height */
  padding-inline: 20px;
}

/* Animation Styles */
.accordion-enter-active,
.accordion-leave-active {
  transition: height .5s ease;
}

.accordion-enter,
.accordion-leave-to

/* .accordion-leave-active in <2.1.8 */
  {
  height: 0;
}
</style>
