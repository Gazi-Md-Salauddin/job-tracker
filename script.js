const jobs = [
  { id: 1, company: "Mobile First Corp", role: "React Native Developer", info: "Remote • Full time • $130,000- $175,000",
    status: "none",
    description: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide."
  },
  { id: 2, company: "WebFlow Agency", role: "Web Designer", info: "Los Angeles, CA • Part-time • $80,000 - $120,000",
  status: "none",
  description: "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends."},
  { id: 3, company: "DataViz Solutions", role: "Data Specialist", info: "Boston, MA • Full-time • $125,000 - $165,000",
  status: "none",
  description: "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking."},
  { id: 4, company: "CloudFirst Inc", role: "Backend Developer", info: "Seattle, WA • Full-time • $140,000 - $190,000", status: "none", 
  description: "Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure."},
  { id: 5, company: "Innovation Labs", role: "UI/UX Engineer", info: "Austin, TX • Full-time • $110,000 - $150,000",
  status: "none",
  description: "Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required."},
  { id:6, company: "MegaCorp Solutions", role: "JavaScript Developer", info: "New York, NY • Full-time • $130,000 - $170,00", status: "none", description: "Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities."
  },
  {id:7, company: "StartupXYZ", role: "Full Stack Engineer", info: "Remote • Full-time • $120,000 - $160,000", status: "none", description: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide."
  },
  {id:8, company: "TechCorp Industries", role: "Senior Frontend Developer", info: "San Francisco, CA • Full-time • $130,000 - $175,000", status: "none", description: "We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects."
  }
];

const allBtn = document.getElementById("allBtn");
const interviewBtn = document.getElementById("interviewBtn");
const rejectedBtn = document.getElementById("rejectedBtn");

let filter = "all";

const jobList = document.getElementById("jobList");
const totalEl = document.getElementById("total");
const totalBadge = document.getElementById('jobs-count-badge');
const interviewEl = document.getElementById("interview");
const rejectedEl = document.getElementById("rejected");

function setActiveButton(activeBtn) {

  const buttons = [allBtn, interviewBtn, rejectedBtn];

  buttons.forEach(btn => {
    btn.classList.remove("bg-blue-600", "text-white");
    btn.classList.add("bg-white", "text-gray-500");
  });

  activeBtn.classList.remove("bg-white", "text-gray-500");
  activeBtn.classList.add("bg-blue-600", "text-white");
}

allBtn.onclick = () => {
  filter = "all";
  setActiveButton(allBtn);
  renderJobs();
};

interviewBtn.onclick = () => {
  filter = "interview";
  setActiveButton(interviewBtn);
  renderJobs();
};

rejectedBtn.onclick = () => {
  filter = "rejected";
  setActiveButton(rejectedBtn);
  renderJobs();
};

function updateStats() {
  totalEl.textContent = jobs.length;
  interviewEl.textContent = jobs.filter(j => j.status === "interview").length;
  rejectedEl.textContent = jobs.filter(j => j.status === "rejected").length;
  totalBadge.textContent = jobs.length;
}

function renderJobs() {

  jobList.innerHTML = "";

  const filtered = jobs.filter(job => {
    if (filter === "all") return true;
    return job.status === filter;
  });
  if(filtered.length === 0){
    jobList.innerHTML = `
    <div class="w-[80%] mx-auto"><img src="jobs.png"></img>
    <h2 class="text-2xl font-bold">No jobs available</h2>
    <p>Check back soon for new job opportunities</p>
    </div>
    `
  }

  filtered.forEach(job => {

    const card = document.createElement("div");

    card.className = "bg-white p-4 rounded";

    card.innerHTML = `
      <div class="sm:flex justify-between items-start">
        <div>
          <h2 class="font-bold">${job.company}</h2>
          <p class="text-sm text-gray-500">${job.role}</p>
          <p class="text-gray-500 text-sm/10">${job.info}</p>

          <span class="inline-block mt-2 text-xs px-2 py-1 rounded 
          ${job.status === "interview" ? "bg-green-100 text-green-700" :
            job.status === "rejected" ? "bg-red-100 text-red-700" :
            "bg-gray-200"}">
            ${job.status === "none" ? "NOT APPLIED" : job.status.toUpperCase()}
          </span>
          <p class="text-sm/10">${job.description}</p>
        </div>

        <button onclick="deleteJob(${job.id})" 
          class="text-lg"><i class="fa-regular fa-trash-can"></i></button>
      </div>

      <div class="flex gap-2 mt-3">
        <button onclick="setStatus(${job.id}, 'interview')"
          class="px-3 py-1 border border-green-500 text-green-600 rounded">
          Interview
        </button>

        <button onclick="setStatus(${job.id}, 'rejected')" 
          class="px-3 py-1 border border-red-500 text-red-600 rounded">
          Rejected
        </button>
      </div>
    `;

    jobList.appendChild(card);
  });

  updateStats();
}

function setStatus(id, status) {
  const job = jobs.find(j => j.id === id);
  job.status = status;
  renderJobs();
}

function deleteJob(id) {
  const index = jobs.findIndex(j => j.id === id);
  jobs.splice(index, 1);
  renderJobs();
}

document.getElementById("allBtn").onclick = () => {
  filter = "all";
  setActiveButton(allBtn);
  renderJobs();
};

document.getElementById("interviewBtn").onclick = () => {
  filter = "interview";
  setActiveButton(interviewBtn);
  renderJobs();
};

document.getElementById("rejectedBtn").onclick = () => {
  filter = "rejected";
  setActiveButton(rejectedBtn);
  renderJobs();
};

renderJobs();
