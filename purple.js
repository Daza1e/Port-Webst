const inp = document.getElementById("comm-in");
const out = document.getElementById("output");

let curr   = "";
const buzz = "root@VorsvA:~/"
const opts = ["uname","about","help","honor","certs","works","loves","trace","reach","touch"]

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
    "help&ensp; - Prints this help to the screen",
    "works - Prints Information of Works done",
    "loves - Prints Passion of System User",
    "trace - Prints the experience of the System User",
    "reach - Prints Contact Information",
    "touch - [Can only be run as sudo]",
    "medal - Recognition from Other systems",
    "certs - Performance benchmarks of System",
    "sudo&ensp; - Enables power beyond one can imagine"
  ].join('<br>'),
  "works":[
    "<h1>Simulated Threat Delivery Toolkit</h1>",
    "Python-based utility to simulate covert payload delivery, analyzing how target systems detect and respond to unauthorized network access. Implemented defense evasion techniques to bypass standard AV iechanisms.<br>",
    "<h1>Offline-First Health Tracker</h1>",
    "Self-hosted a privacy-focused web application for dietary tracking. Architected to function entirely independent of external APIs, ensuring complete user data sovereignty on local network infrastructure.<br>",
    "<h1>Embedded Malware in ML Models</h1>",
    "Research paper exploring the intersection of AI and cybersecurity, focusing on identifying and mitigating hidden payloads within pre-trained machine learning models.<br>",
    "<h1>My Dear Diary (AI Companion)</h1>",
    "Developed a virtual companion application designed to improve user emotional well-being by integrating advanced NLP and LLM APIs for dynamic, context-aware interactions.<br>"
  ].join('<br>'),
  "loves":[
    "<h4>Passion</h4>",
    "⟩⟩ Philosphy<br>⟩⟩ Reading<br>⟩⟩ Programming",
    "<h4>Domains of Interest</h4>",
    "⟩⟩ Comuputing<br>⟩⟩ Math<br>⟩⟩ Biology<br>⟩⟩ Astronomy<br>⟩⟩ Psychology"
  ].join('<br'),
  "trace":[
    "<h1>Server & Network Infrastructure Admin</h1>",
    "<h3>Independent | 2023 - Present</h3>",
    "Architected and administered a high-availability Debian Linux server environment.Engineered secure network routing across 8+ custom domains, managing complex DNS configurations and SSL/TLS certificates. Secured inbound web traffic by implementing Nginx reverse proxies and Cloudflare Zero Trust tunnels.",
    "<b>Clients : <a href=\"https://dhanrajdecors.com\" target=\"_blank\" rel=\"external\">Dhanraj decors</a>",
    "<a href=\"https://xenopent.tech\" target=\"_blank\" rel=\"external\">Xenopent</a><b>",
    "<br>",
    "<h1>Cybersecurity Intern</h1>",
    "<h3>ASSR Emphorium | Jun 2025 - Jul 2025</h3>",
    "Developed security compliance reports and strategic pitch decks. Translated complex technical assessments into actionable business insights for external clients."
  ].join('<br>'),
  "reach":[
    "Email    - me@vijayrajanmanraj.dev",
    "Phone    - +91 638 168 2004",
    "Github   - <a href=\"https://github.com/vorsv\" target=\"_blank\">VorsvA Github</a>",
    "Linkedin - <a href=\"https://linkedin.com/in/vorsv\" target=\"_blank\">VorsvA Linkedin</a>"
  ].join('<br>'),
  "touch":[
    "Email    - me@vijayrajanmanraj.dev",
    "Phone    - +91 638 168 2004",
    "Github   - <a href=\"https://github.com/vorsv\" target=\"_blank\">VorsvA Github</a>",
    "Linkedin - <a href=\"https://linkedin.com/in/vorsv\" target=\"_blank\">VorsvA Linkedin</a>"
  ].join('<br>'),
  "honor":[
    "<h1>ISACA Foundation Scholar</h1>",
    "<h3>2023 - 2025</h3>",
    "Awarded a merit-based scholarship ($500 USD) and selected for membership by the Information Systems Audit and Control Association (Chennai Chapter) for two consecutive years due to academic excellence."
  ].join('<br>'),
  "certs":[
    "<h2>Certified in Cybersecurity</h2>",
    "<h4>(ISC)² 2026</h4>",
    "<h2>Cisco Certified Network Associate</h2>",
    "<h4>Cisco 2023</h4>",
    "<h2>Python For Data Science</h2>",
    "<h4>IBM 2025</h4>"
  ].join('<br>'),
}

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
          out.innerHTML += "<br>" + buzz + curr.toLowerCase() + "/#<br>" + data[curr];
        else
          out.innerHTML +="<br>" + buzz + curr.toLowerCase() + "/#<br>Invaild Command See help";
        curr = "";
    }
    inp.textContent = curr;
})


// const opts = ["uname","about","honor","certs","help","works","loves","trace","reach","touch"]
