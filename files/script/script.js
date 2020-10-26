//D&D
var premisteno = 0;

jQuery(".prvky").draggable({ revert: "invalid" });

/* Mozna nekdy do dalsi hodiny tuhle vice nazornejsi variantu
var prvky = document.getElementsByClassName('prvky');
for(let i=0;i<prvky.length;i++){
    prvky[i].draggable({ revert: "invalid" });
}    
*/

jQuery(".drop").droppable({
    drop: function( event, ui ) {
      event.preventDefault();                                       
      let presouvane = ui.draggable[0];                              //presouvany
      let kam = event.target                                         //budouci rodic
      //kam.children[0].remove();                                      //smazu presouvaneho
      if(presouvane.dataset['id'] == kam.dataset['id']){
          //zelena
          premisteno++;
          $(kam).droppable('destroy');
          kam.removeAttribute("class");
          kam.classList.add("green");
          kam.appendChild(presouvane);
          presouvane.removeAttribute("style");
          presouvane.removeAttribute("class");
          if(premisteno == 5){
            document.getElementById("obal_prvky").style.display = "none";
            let popisky = document.getElementById("informace");
            popisky.classList.replace("hide","show");
            document.getElementById("dopln").style.width = "35%";
          }
      }else{
        jQuery(presouvane).draggable({
            revert: true
        });
     }
    }
});


