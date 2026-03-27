const testimonials = [
  {
    title: "Excellent Service",
    text: "From the beginning, the team guided us clearly. Very smooth buying experience.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200",
    name: "Gokul Kumar",
    role: "Home Buyer",
    userImg: "https://randomuser.me/api/portraits/men/32.jpg"
  },

  {
    title: "Very Satisfied",
    text: "I am fully satisfied with the plot purchase. Professional and customer-friendly approach.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    name: "Rajesh Kumar",
    role: "Property Owner",
    userImg: "https://randomuser.me/api/portraits/men/33.jpg"
  },

  {
    title: "Good Management",
    text: "Quick response and flexible support. They helped us customize everything for our needs.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    name: "Sethupathi",
    role: "Satisfied Client",
    userImg: "https://randomuser.me/api/portraits/men/34.jpg"
  },

  {
    title: "Transparent Process",
    text: "Everything was handled clearly. Quality and delivery were exactly as promised.",
    image: "https://images.unsplash.com/photo-1600585152915-d208bec867a1",
    name: "Vishal Kumar",
    role: "Investor",
    userImg: "https://randomuser.me/api/portraits/men/35.jpg"
  },

  {
    title: "Highly Recommended",
    text: "Peaceful location, good layout planning and excellent communication throughout.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200",
    name: "Karthikeyan",
    role: "Home Buyer",
    userImg: "https://randomuser.me/api/portraits/men/36.jpg"
  },

  {
    title: "Great Experience",
    text: "Best investment decision. Location and future growth potential are very good.",
    image: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=1200",
    name: "Murugan",
    role: "Land Investor",
    userImg: "https://randomuser.me/api/portraits/men/37.jpg"
  }
];

let index = 0;

function showSlide(i) {
  const t = testimonials[i];

  document.getElementById("testimonialTitle").innerText = t.title;
  document.getElementById("testimonialText").innerText = t.text;
  document.getElementById("testimonialImage").src = t.image;
  document.getElementById("userName").innerText = t.name;
  document.getElementById("userRole").innerText = t.role;
  document.getElementById("userImage").src = t.userImg;

  updateDots();
}

function nextSlide() {
  index = (index + 1) % testimonials.length;
  showSlide(index);
}

function prevSlide() {
  index = (index - 1 + testimonials.length) % testimonials.length;
  showSlide(index);
}

function createDots() {
  const dotsContainer = document.getElementById("dots");

  testimonials.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.onclick = () => {
      index = i;
      showSlide(index);
    };
    dotsContainer.appendChild(dot);
  });
}

function updateDots() {
  const dots = document.querySelectorAll(".dots span");
  dots.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

/* AUTO SLIDE */
setInterval(nextSlide, 4000);

/* INIT */
createDots();
showSlide(index);


const plotSlider = document.querySelector('.plot-slider');

document.addEventListener('click', function(e) {
  const items = document.querySelectorAll('.plot-item');

  if (e.target.classList.contains('next')) {
    plotSlider.append(items[0]);
  }

  if (e.target.classList.contains('prev')) {
    plotSlider.prepend(items[items.length - 1]);
  }
});

document.getElementById("myForm").addEventListener("submit", function () {
  
  // small delay to allow form submit
  setTimeout(function(){
    window.location.href = "thankyou.html";
  }, 1000);

});

function showSuccess(){
  alert("✅ Your Requirement Submitted Successfully!\nOur team will contact you soon.");
}



function openProperty(type){

  let data = {};

  if(type === "coral"){
    data = {
      title:"Coral Residency",
      location:"Kalapatty",
      image:"./images/villa.jpeg",
      details:["30+ Acres","2.5–6 cents","Near Kathir College","2BHK ₹70L","Gated Community","Blacktop Roads"]
    };
  }

  if(type === "crown"){
    data = {
      title:"Crown City",
      location:"Sathy Road",
      image:"./images/crown.jpeg",
      details:["Near SNS College","24/7 Security","Park","Prime Location","DTCP Approved","Ready to Build"]
    };
  }

  if(type === "crystal"){
    data = {
      title:"Crystal Gateway",
      location:"Sulur",
      image:"./images/crystal.jpg",
      details:["80 Acres","RERA Approved","Mini Theatre","Clubhouse","Near Airport","Luxury Villas"]
    };
  }

  document.getElementById("modalTitle").innerText = data.title;
  document.getElementById("modalLocation").innerText = data.location;
  document.getElementById("modalImage").src = data.image;

  let html="";
  data.details.forEach(item=>{
    html += `<div class="detail-box"><i class="fa-solid fa-circle-check"></i> ${item}</div>`;
  });

  document.getElementById("modalDetails").innerHTML = html;

  document.getElementById("modal").style.display="flex";
}

function closeModal(){
  document.getElementById("modal").style.display="none";
}

/* WHATSAPP */
function openWhatsApp(){
  let phone="918197135303";
  let name=document.getElementById("modalTitle").innerText;

  let msg=encodeURIComponent("Hi, I'm interested in "+name+". Please share details.");
  window.open(`https://wa.me/${phone}?text=${msg}`);
}