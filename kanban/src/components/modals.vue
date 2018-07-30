<template>
<div class="mymodal">
  <div class="modal" id="myModal">
      <div class="modal-dialog">
          <div class="modal-content">
              <div class="modal-header">
                  <h4 class="btn btn-info btn-lg modal-title close">Add new ToDo</h4>
                  <button type="button" class="close" data-dismiss="modal">&times;</button>
              </div>
              <div class="modal-body">
                  <div class="form-group">
                      <label for="exampleInputEmail1">Todo Title</label>
                      <input v-model="taskname" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter new todo title">
                  </div>
                  <div class="form-group">
                      <label for="exampleInputPassword1">Description</label>
                      <input v-model="description" type="text" class="form-control" id="exampleInputPassword1" placeholder="enter todo description">
                  </div>
                  <div class="form-group">
                      <label for="exampleInputPassword1">Assign to?</label>
                      <input v-model="assignto" type="text" class="form-control" id="exampleInputPassword1" placeholder="assign todo to?">
                  </div>
                  <button @click="createTodo" data-dismiss="modal" type="submit" class="btn btn-primary">Submit TODO</button>
              </div>
              <div class="modal-footer">
                  <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
              </div>
          </div>
      </div>
  </div>
</div>
</template>

<script>
import {
  todo,backlog
}
  from '@/firebase/firebase.js'
export default {
  name: 'modals',
  data: function () {
    return {
      taskname: '',
      description: '',
      assignto: ''
    }
  },

  methods: {
    createTodo: function () {
      let task1 = {
        task: this.taskname,
        description: this.description,
        assignto: this.assignto
      }
      backlog.push(task1)
        .then(data => {
          console.log(task1)
          this.taskname = ''
          this.description = ''
          this.assignto = ''
          console.log('backlog component is running')
          swal('Good job!', 'You have added list to the Backlog !', 'success')
        })
    }
  }
}

</script>
