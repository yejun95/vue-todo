import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex); // use = vuex을 전역으로 사용하겠다. 

const storage = {
  fetch() {
    const arr = [];
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
    return arr;
  },
}

export const store = new Vuex.Store({
  state: {
    todoItems: storage.fetch()
  },
  getters: {
    storeTodoItems(state) {
      return state.todoItems;
    }
  },
  mutations: {
    addOneItem(state, todoItem) {
      let obj = {completed: false, item: todoItem};
      localStorage.setItem(todoItem ,JSON.stringify(obj));
      state.todoItems.push(obj);
    },
    removeOneItem(state, payload) {
      localStorage.removeItem(payload.todoItem.item);
      state.todoItems.splice(payload.index, 1);
    },
    toggleOneItem(state, payload) {
      state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
      // 로컬 스토리지의 데이터를 갱신
      localStorage.removeItem(payload.todoItem.item);
      localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
    },
    clearAllItems() {
      localStorage.clear();
      this.state.todoItems = [];
    }
  }
});