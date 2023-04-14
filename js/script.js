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
          check: true
        },
        {
          text: 'Ripassare Javascript',
          check: false
        },
      ]
    }
  }

}).mount("#app")