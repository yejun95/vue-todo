<template>
  <div>
    <transition-group name="list" tag="p">
      <li v-for="(todoItem, index) in this.storeTodoItems" :key="todoItem.item" class="shadow">
        <i class="checkBtn fa-solid fa-check" @click="toggleComplete({todoItem, index})"
          :class="{ checkBtnCompleted: todoItem.completed }"></i>
        <span :class="{ textCompleted: todoItem.completed }">{{ todoItem.item }}</span>
        <span @click="removeTodo({todoItem, index})" class="removeBtn">
          <i class="fa-solid fa-trash-can"></i>
        </span>
      </li>
    </transition-group>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  methods: {
    // removeTodo: function(todoItem, index){
    //   this.$store.commit('removeOneItem', {todoItem, index});
    // },
    // toggleComplete: function (todoItem, index) {
    //   this.$store.commit('toggleOneItem', { todoItem, index });
    // }
    ...mapMutations({
      removeTodo: 'removeOneItem', // 본문에 인자가 객체 1개인지 2개인지 확인
      toggleComplete: 'toggleOneItem'
    }),
  },
  computed: {
    // todoItems() {
    //   return this.$store.getters.storeTodoItems;
    // }
    ...mapGetters(['storeTodoItems'])
  }

}
</script>
<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}

li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}

.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}

.checkBtnCompleted {
  color: #b3adad;
}

.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}

.removeBtn {
  margin-left: auto;
  color: #de4343;
}

/* 트랜지션 이펙트 */
.list-item {
  display: inline-block;
  margin-right: 10px;
}

.list-enter-active,
.list-leave-active {
  transition: all 1s;
}

.list-enter,
.list-leave-to

/* .list-leave-active below version 2.1.8 */
  {
  opacity: 0;
  transform: translateY(30px);
}</style>