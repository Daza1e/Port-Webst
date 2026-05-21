const inp = document.getElementById("comm-in");
const out = document.getElementById("output");

let curr   = "";
const buzz = "root@VorsvA:~/"
const opts = ["uname","about","help","works","loves","trace","reach","touch"]

document.addEventListener("keydown", (e)=>{

    if (e.key === "Backspace"){
        curr = curr.slice(0, -1);
    }
    else if(e.key.length === 1){
        if(curr.length < 32)curr += e.key;
        else window.alert("Max char Limit reaeched")
    }
    else if(e.key === "Enter"){
        if (opts.includes(curr))
          if (curr === "help")
            out.innerHTML += buzz + curr.toLowerCase() + "/#<br>" + `<div class="opt"> ${data[curr].join("<br>")} </div> <br>`;
          else
            out.innerHTML += buzz + curr.toLowerCase() + "/#<br>" + `<div class="opt"> ${data[curr]} </div> <br>`;
        else
          out.innerHTML += buzz + curr.toLowerCase() + "/#<br>Invaild Command : See help" + "<br></br>";
          
        curr = "";
    }
    inp.textContent = curr;
})

const data = {
  "uname":"<span class=u1>VorsvA</span> aka <span class=u1>Vijay Rajan Manraj</span>",
  "about":`I am a Computer Science Engineering student specializing\
 in Cybersecurity. I am driven by the challenge of securing \
complex systems and exploring emerging attack vectors.<br><br>\
My passion for technology started early with robotics and \
programming. Today, I thrive in competitive, dynamic environments \
where I can leverage unconventional thinking to solve niche \
infrastructure and security problems. Outside of engineering, \
I keep my logic skills sharp by playing complex automation \
simulation games.`,
  "help" :[
    "uname - Prints Username and Alias",
    "about - Prints Details of the System User",
    "help  - Prints this help to the screen",
    "works - Prints Information of Works done",
    "loves - Prints Passion of System User",
    "trace - "
  ]
}

// const opts = ["uname","about","help","works","loves","trace","reach","touch"]
