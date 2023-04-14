const {createApp} = Vue;

createApp({

  data(){
    return{
      tasks:[
        {
          text: 'Controllare lista della spesa',
          check: false
        },
        {
          text: 'Cambiare olio motore auto',
          check: false
        },
        {
          text: 'Ripassare Javascript',
          check: false
        },
      ],

      errorMsg:''
    }
  },


methods:{

  remtsk(index){
    if(this.tasks[index].check){
      this.tasks.splice(index,1)
      this.errorMsg = '';
    }else{
      this.errorMsg = 'La task può essere eliminata solo se completata'
    }
  }









}







}).mount("#app")