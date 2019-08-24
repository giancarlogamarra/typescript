class Mensajes {
    mensajeLET(weather) {
      let message = 'Hello, Giancarlo';
      if (weather == 'sunny') {
        let message = 'It is a nice day';
        console.log(message);
      } else {
        let message = 'It is ' + weather + ' today';
        console.log(message);
      }
      console.log(message);
    }
  
    mensajeVAR(weather) {
      var message = 'Hello, Giancarlo';
      if (weather == 'sunny') {
          var message = 'It is a nice day';
          console.log(message);
      } else {
          var message = 'It is ' + weather + ' today';
          console.log(message);
      }
      console.log(message);
  
    }
  }
  
  var obj = new Mensajes();
  obj.mensajeLET('raining');
  obj.mensajeVAR('raining');