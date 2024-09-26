<template>
  <div v-if="isLoading">
    <h5>Loading....</h5>
  </div>
  <button v-else-if='likeCount === 0' @click='likePost'>
    like Counter
  </button>
  <button v-else @click='likePost'>
    Likes <span>{{ likeCount }}</span>
  </button>
</template>

<script lang='ts' setup>
import { actions } from 'astro:actions';
import { ref, watch } from 'vue'
import confetti from 'canvas-confetti'
import debounce from 'lodash.debounce'

interface Props {
  postId: string;
}

const props = defineProps<Props>();
const likeCount = ref(0)
const likeClick = ref(0)
const isLoading = ref(true)

watch(likeCount, debounce(() => {
  try {
    actions.updatePostLikes({
      postId: props?.postId,
      likes: likeClick.value
    })
  } catch (error) {
    console.error(error)
  }
  likeClick.value = 0
}, 500));

const likePost = () => {
  likeCount.value++
  likeClick.value++
  confetti({
    particleCount: 100,
    startVelocity: 30,
    spread: 360,
    origin: {
      x: Math.random(),
      // since they fall down, start a bit higher than random
      y: Math.random() - 0.2
    }
  });
}

const getCurrentLikes = async () => {
  const { likes } = await actions.getPostLikes(props.postId);
  likeCount.value = likes
  isLoading.value = false
}

getCurrentLikes()
</script>

<style scoped>
button {
  background-color: #5e51bc;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
}

button:hover {
  background-color: #4a3f9a;
}
</style>
