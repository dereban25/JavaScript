/**
 * Created by dereban on 10.08.2017.
 */
document.querySelector('.tabs-header').addEventListener('click',fTabs);

function fTabs(event) {
  console.log(event);
  if(event.target.className == 'tab-h'){
      //dataTab - номер вкладки,которую нужно отобразить
      var dataTab = event.target.getAttribute('data-tab');
      //отключаю класс active
      var tabH = document.getElementsByClassName('tab-h');
      for(var i=0;i<tabH.length;i++){
          tabH[i].classList.remove('active');
      }
      event.target.classList.add('active');
      var tabBody = document.getElementsByClassName('tab-b');
      for(var i = 0; i<tabBody.length;i++){
          if(dataTab==i){
              tabBody[i].style.display = 'block';
          }else{
              tabBody[i].style.display = 'none';
          }

      }
  }
}