var arr = [
    {
    dp:"https://images.unsplash.com/photo-1628015081036-0747ec8f077a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story:"https://images.unsplash.com/photo-1512310604669-443f26c35f52?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vZGVsfGVufDB8MXwwfHx8MA%3D%3D"
    },

    {
        dp:"https://images.unsplash.com/photo-1514315384763-ba401779410f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG1vZGVsfGVufDB8MXwwfHx8MA%3D%3D", story:"https://images.unsplash.com/photo-1541216970279-affbfdd55aa8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },

    {
        dp:"https://images.unsplash.com/photo-1503104834685-7205e8607eb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fG1vZGVsfGVufDB8MXwwfHx8MA%3D%3D", story:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fG1vZGVsfGVufDB8MXwwfHx8MA%3D%3D"
    },

    {
        dp:"https://images.unsplash.com/photo-1513619371302-207c0b203098?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA2fHxtb2RlbHxlbnwwfDF8MHx8fDA%3D", story:"https://images.unsplash.com/photo-1517256742927-ccff23d76be8?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTl8fG1vZGVsfGVufDB8MXwwfHx8MA%3D%3D"
    }
]

var storiyan = document.querySelector("#storiyan")
var clutter = "";

 arr.forEach(function(elem, index){
    // clutter= clutter + "Hello"
    clutter += `<div class="story">
                 <img id = "${index}" src="${elem.dp}" alt="">
                </div>`

    // console.log(elem, index);
})

// console.log(clutter);

storiyan.innerHTML = clutter;

storiyan.addEventListener("click", function(dets){
    // arr[dets.target.id].story

    document.querySelector("#full-screen").style.display = "block"
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`




setTimeout(function(){
document.querySelector("#full-screen").style.display = "none"
},3000)

});