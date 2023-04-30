var memory_array = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H'];
var memmory_array_shufled = [];
var otvoreni_values = [];
var otvorni_card_ids = [];
var cards_flipped = 0;
var button = document.getElementById("b");




function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}


newboard();

button.onclick = newboard;

function newboard() {

    memmory_array_shufled = [];
        memmory_array_shufled = shuffleArray(memory_array);
    document.getElementById('memory_board').innerHTML = "";
    cards_flipped = 0;
   


    for (var i = 0; i < memmory_array_shufled.length; i++) {

        var d = document.createElement("div");

        d.setAttribute("class", "tile");
        
        var divcontainer = document.createElement("div");
        
        divcontainer.setAttribute("class", "col-3 divcontainer");
        divcontainer.style.float = "left";
        d.id = "card" + i;

        d.value = memmory_array_shufled[i];
        
        d.addEventListener("click", function () {
            check(this);
        }, false);
        
        divcontainer.appendChild(d);
        
        document.getElementById('memory_board').appendChild(divcontainer);
        
        $(divcontainer).hide().slideDown("slow");

       



    }


}

function check(card) {

    var zatvorikarti;
    if (card.innerHTML === "" && otvoreni_values.length < 2) {

        card.innerHTML = card.value;
        $(card).animate({
            backgroundColor: "white",
        }, 500);

        if (otvoreni_values.length === 0) {
            otvoreni_values.push(card.value);
            otvorni_card_ids.push(card.id);
            
        } else if (otvoreni_values.length == 1) {
            
            otvoreni_values.push(card.value);
            otvorni_card_ids.push(card.id);

            if (otvoreni_values[0] == otvoreni_values[1]) {
                
                cards_flipped += 2;
                var a = document.getElementById(otvorni_card_ids[0]);
                var b = document.getElementById(otvorni_card_ids[1]);
                $(a).add(b).css("border", "#4CAF50 1px solid");

                $(a).add(b).animate({
                    backgroundColor: "#4CAF50",
                    color: "white"
                }, 300);



                otvoreni_values.length = 0;
                otvorni_card_ids.length = 0;


                if (cards_flipped === memmory_array_shufled.length) {

                    $("#memory_board").empty();
                    var p = $("<p>");
                    p.text("Congratulations!");
                    
                        p.css({
                            "font-size": "250%",
                            "color": "#DC143C",
                            "margin": "200px auto",
                            "text-align": "center",
                            "font-weight": "700"
                        });
                    

                    p.hide();
                    $("#memory_board").append(p);
                    p.slideDown("slow");
                }
            } else

                zatvorikarti = function () {
                    
                var a = document.getElementById(otvorni_card_ids[0]);
                var b = document.getElementById(otvorni_card_ids[1]);

                a.innerHTML = "";
                $(a).animate({
                    backgroundColor: "#DC143C"
                }, 500);

                b.innerHTML = "";
                $(b).animate({
                    backgroundColor: "#DC143C"
                }, 500);
                otvoreni_values.length = 0;
                otvorni_card_ids.length = 0;
            };
            setTimeout(zatvorikarti, 700);
        }


    }
}
