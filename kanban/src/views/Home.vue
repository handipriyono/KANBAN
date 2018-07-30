<template>
    <div class="homes">
        <!-- //end of modals -->
<modals/>
   <buttons/>
        <!-- //compontent -->
        <div class="container">

            <div class="row">
              <div class="col-sm">
                  <div class="card text-center">
                      <div class="card-header text-white bg-success ">BACKLOG </div>
                      <!-- //start body -->
                      <div class="card-body" v-for="(todo,index) in backlogs" :key="index">
                          <div class="card">
                              <div class="card-header">
                                  <strong>{{todo.task}}</strong>
                              </div>
                              <div class="card-body">
                                  <p class="card-text desc">
                                      <strong>Description : </strong>{{todo.description}}
                                  </p>
                                    <hr/>
                                  <p class="card-text">
                                      <strong>Assign to: </strong>
                                      <font color="red">{{todo.assignto}}</font>
                                  </p>
                              </div>
                              <div class="card-footer d-flex justify-content-between">
                                  <div class="btn-group" role="group">
                             <!-- //empty -->
                             <div class="btn-group" role="group">
                                 <button @click="deletebacklog(index)" type="submit" class="btn btn-outline-danger btn-sm">Delete</button>
                             </div>

                                  </div>
                                  <div class="btn-group" role="group">
                                      <button @click="entertodo(index)" type="button" class="btn btn-outline-primary btn-sm">
                                          <i class="fas fa-arrow-right">-> Next</i>
                                      </button>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>



                <div class="col-sm">
                    <div class="card text-center">
                        <div class="card-header bg-secondary text-white">TODO </div>
                        <!-- //start body -->
                        <div class="card-body" v-for="(todo,index) in listTodo" :key="index">
                            <div class="card">
                                <div class="card-header">
                                    <strong>{{todo.task}}</strong>
                                </div>
                                <div class="card-body">
                                    <p class="card-text desc">
                                        <strong>Description : </strong>{{todo.description}}
                                    </p>
                                      <hr/>
                                    <p class="card-text">
                                        <strong>Assign to: </strong>
                                        <font color="red">{{todo.assignto}}</font>
                                    </p>
                                </div>
                                <div class="card-footer d-flex justify-content-between">
                                    <div class="btn-group" role="group">
                               <!-- //empty -->
                               <button @click="TodotoBacklog(index)" type="button" class="btn btn-outline-secondary btn-sm">
                                   <i class="fas fa-arrow-left">-- Back</i>
                               </button>

                                    </div>
                                    <div class="btn-group" role="group">
                                        <button @click="doingtodo(index)" type="button" class="btn btn-outline-primary btn-sm">
                                            <i class="fas fa-arrow-right">-> Next</i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-sm">
                    <div class="card text-center">
                        <div class="card-header bg-info text-white">ON PROCESS</div>
                        <!-- //start body -->
                        <div class="card-body" v-for="(todo,index) in doingTodo" :key="index">
                            <div class="card">
                                <div class="card-header">
                                    <strong>{{todo.task}}</strong>
                                </div>
                                <div class="card-body">
                                    <p class="card-text desc">
                                        <strong>Description</strong>: {{todo.description}}
                                    </p>
                                    <hr/>
                                    <p class="card-text">
                                        <strong>Assign To</strong>:{{todo.assignto}}
                                    </p>
                                </div>
                                <div class="card-footer d-flex justify-content-between">
                                    <button @click="processTodo(index)" type="button" class="btn btn-outline-secondary btn-sm">
                                        <i class="fas fa-arrow-left"><-- Back
                     </i>
                                    </button>
                                    <div class="btn-group" role="group">
                                        <button @click="doneTodolist(index)" type="button" class="btn btn-outline-primary btn-sm">
                                            <i class="fas fa-arrow-right">-> Next</i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm">
                    <div class="card text-center ">
                        <div class="card-header bg-danger text-white">DONE</div>
                        <!-- //start body -->
                        <div class="card-body" v-for="(todo,index) in doneList" :key="index">
                            <div class="card">
                                <div class="card-header ">
                                    <strong>{{todo.task}}</strong>
                                </div>
                                <div class="card-body">
                                    <p class="card-text desc">
                                        <strong>Description</strong>:{{todo.description}}
                                    </p>
                                      <hr/>
                                    <p class="card-text">
                                        <strong>Assign To</strong>: {{todo.assignto}}
                                    </p>
                                </div>
                                <div class="card-footer d-flex justify-content-between">
                                    <button @click="donetoProcess(index)" type="button" class="btn btn-outline-secondary btn-sm">
                                        <i class="fas fa-arrow-left"><- Back
                     </i>
                                    </button>
                                    <div class="btn-group" role="group">
                                        <button @click="deleteTask(index)" type="submit" class="btn btn-outline-danger btn-sm">Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  <!-- <footers/> -->
    </div>

</template>

<script>
// @ is an alias to /src
import {
  todo,
  doing,
  done,
  backlog
}
  from '@/firebase/firebase.js'
import buttons from '@/components/tes.vue'
import modals from '@/components/modals.vue'
// import footers from '@/components/footer.vue'
// import listTodo from '@components/tes.vue'
export default {
  name: 'homes',
  components: {
    buttons,
    modals

  },
  data () {
    return {

      taskname: '',
      description: '',
      assignto: '',
      listTodo: [],
      doingTodo: [],
      doneList: [],
      backlogs:[]

    }
  },

  created: function () {
    backlog.on('value', snapshot => {
      this.backlogs = snapshot.val()
      console.log(this.backlogs, 'backlogs')
    })



    this.readTodo()
    doing.on('value', snapshot => {
      this.doingTodo = snapshot.val()
      console.log(this.doingTodo)
    })

    done.on('value', snapshot => {
      this.doneList = snapshot.val()
      console.log(this.doneList)
    })
  }, //end created

  methods: {
    deleteTask (index) {
      console.log('hapus')
      done.child(index).remove()
    },
    deletebacklog (index) {
      console.log('hapus backlog')
      backlog.child(index).remove()
    },

    createTodo: function () {
      console.log('creates');
      let task1 = {
        task: this.taskname,
        description: this.description,
        assignto: this.assignto
      }
      backlog.push(task1)
        .then(data => {
          console.log('sjkskdjnknd????')
          this.taskname = ''
          this.description = ''
          this.assignto = ''
          // console.log(JSON.stringify(data))
          swal('Good job!', 'You have added new kanban!', 'success')
        })
    },

    entertodo: function (index) {
      console.log('untuk todo')
      let doinglist = {}
      backlog.child(index).once('value')
        .then(snapshot => {
          console.log(snapshot, 'isi snap')
          doinglist = snapshot.val()
          todo.child(index).set(doinglist)
            .then(snapshot => {})
        })
      backlog.child(index).remove()
    },


    doingtodo: function (index) {
      console.log('masuk')
      let doinglist = {}
      todo.child(index).once('value')
        .then(snapshot => {
          console.log(snapshot, 'isi snap')
          doinglist = snapshot.val()
          doing.child(index).set(doinglist)
            .then(snapshot => {})
        })
      todo.child(index).remove()
    },


    donetoProcess: function (index) {
      console.log('done to process')
      let doinglist = {}
      done.child(index).once('value')
        .then(snapshot => {
          console.log(snapshot, 'isi snap')
          doinglist = snapshot.val()
          doing.child(index).set(doinglist)
            .then(snapshot => {})
        })
      done.child(index).remove()
    },

    TodotoBacklog: function (index) {
      console.log('todo to backlog')
      let doinglist = {}
      todo.child(index).once('value')
        .then(snapshot => {
          console.log(snapshot, 'isi snap')
          doinglist = snapshot.val()
          backlog.child(index).set(doinglist)
            .then(snapshot => {})
        })
      todo.child(index).remove()
    },



    processTodo: function (index) {
      console.log('done to process')
      let doinglist = {}
      doing.child(index).once('value')
        .then(snapshot => {
          console.log(snapshot, 'isi snap')
          doinglist = snapshot.val()
          todo.child(index).set(doinglist)
            .then(snapshot => {})
        })
      doing.child(index).remove()
    },

    doneTodolist: function (index) {
      // doneList
      let donetodo = {}
      // const doing = db.ref('doing/')
      doing.child(index).once('value')
        .then(snapshot => {
          donetodo = snapshot.val()
          done.child(index).set(donetodo)
            .then(snapshot => {})
        })
      doing.child(index).remove()
    },

    readTodo: function () {
      console.log('read')
      todo.on('value', snapshot => {
        this.listTodo = snapshot.val()
        console.log(',listodo', this.listTodo)
      })
    }
  }
}
</script>
<style>
    .card-header {
        font-color: white
    }
    .card {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    .homes{
      background: #abbaab;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #ffffff, #abbaab) !important;  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #ffffff, #abbaab); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    }
    html{
      background: #abbaab !important;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #ffffff, #abbaab) !important;  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #ffffff, #abbaab) !important; /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    }
</style>
