const testimonial = [
  {
    name: "Almando H",
    PhotoUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, temporibus. Omnis laboriosam eaque eos sapiente neque, ad, corporis reiciendis, saepe quisquam nesciunt fuga ratione autem ipsum facilis? Accusantium enim aspernatur adipisci alias nostrum dignissimos labore corporis, quo officiis harum temporibus, nobis quam ad unde sapiente optio consequuntur eligendi consequatur autem?",
  },

  {
    name: "Eveline K",
    PhotoUrl:
      "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, temporibus. Omnis laboriosam eaque eos sapiente neque, ad, corporis reiciendis, saepe quisquam nesciunt fuga ratione autem ipsum facilis? Accusantium enim aspernatur adipisci alias nostrum dignissimos labore corporis, quo officiis harum temporibus, nobis quam ad unde sapiente optio consequuntur eligendi consequatur autem?",
  },
  {
    name: "Lineekela H",
    PhotoUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, temporibus. Omnis laboriosam eaque eos sapiente neque, ad, corporis reiciendis, saepe quisquam nesciunt fuga ratione autem ipsum facilis? Accusantium enim aspernatur adipisci alias nostrum dignissimos labore corporis, quo officiis harum temporibus, nobis quam ad unde sapiente optio consequuntur eligendi consequatur autem?",
  },
];

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");

let idx = 0;

updateTestimonial();

function updateTestimonial() {
  const { name, PhotoUrl, text } = testimonial[idx];
  imgEl.src = PhotoUrl;
  textEl.innerText = text;
  usernameEl.innerText = name;
  idx++;
  if (idx === testimonial.length) {
    idx = 0;
  }
  setTimeout(() => {
    updateTestimonial();
  }, 2000);
}
