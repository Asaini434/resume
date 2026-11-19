const education = [
    {
        title: "George Mason University",
        subtitle: "M.S. in Computer Science (in progress)",
        date: "Aug 2026 - May 2028",
        details:[
            "Coursework: Analysis of Algorithms, Introduction to Artificial Intelligence, Database Systems"
        ]
    },
    {
        title: "Rutgers University, New Brunswick",
        subtitle: "B.S. Electrical & Computer Engineering - Summa Cum Laude, GPA: 3.68/4.0",
        date: "Jan 2023 - May 2026",
        details: [
            "Computer science and software: Introduction to Computer Science, Data Structures, Discrete Structures I and II, Principles of Programming Languages, Programming Methodology I (C), Software Engineering, Introduction to Computer Systems, Introduction to Information and Network Security",
            "Computer engineering: Principles of Electrical Engineering I and II (with labs), Digital Logic Design, Computer Architecture and Assembly Language, Digital Systems Design, Electronic Devices, Linear Systems and Signals, Computing Principles for Mobile Embedded Systems",
            "Mathematics: Calculus I and II, Multivariable Calculus, Differential Equations, Introductory Linear Algebra, Linear Optimization",
            "Capstone: ECE Capstone Design (ROSWELL clinical decision support app)",
            "Dean's List (multiple semesters)"
        ]
    }
];

const skills = [
    {
        label: "Languages",
        values: ["Python", "C", "Java", "JavaScript", "SQL", "HTML/CSS", "C++ (introductory)"]
    },
    {
        label: "AI/ML",
        values: ["FastMCP", "Ollama", "PyTorch", "Logistic Regression", "Model Quantization", "Interval Bound Propagation"]
    },
    {
        label: "Tools & Frameworks",
        values: ["FastAPI", "Flask", "React", "REST APIs", "JWT", "Git/GitHub", "Jira", "Linux", "Jupyter Notebook"]
    },
    {
        label: "Databases",
        values: ["PostgreSQL", "MySQL", "SQLite", "Relational Schema Design", "Relational Algebra"]
    },
    {
        label: "Certifications",
        values: ["HarvardX Artificial Intelligence Certificate", "PCEP - Certified Entry-Level Python Programmer", "CPR/AED"]
    }
];

const experience = [
    {
        title: "Graduate Grader - CS 321 Software Engineering",
        subtitle: "Department of computer science",
        date: "Aug 2026 - present",
        details:[
            "Grade and review deliverables for 4 student teams, each building one subsystem of a shared 8-subsystem career platform.",
            "Evaluate teams Jira backlog health, GitHub practices, and agile process in recurring sprint check-ins."
        ]
    },
    {
        title: "Research Assistant (Co-Author)",
        subtitle: "Virginia Tech (Remote) · Engineering Education Research, Mixed Methods",
        date: "Sept 2025 - Jan 2026",
        details: [
            "Co-authored a paper on the E-SPIN Situational Judgment Inventory (Frontiers in Education, 2026).",
            "Conducted de-identified data analysis and produced reproducible documentation of analytical procedures, including IRB compliance, for a multi-institution study.",
            "Contributed to the literature review and the synthesis of findings.",
            "Collaborated with PhD researchers and faculty in Virginia Tech's engineering education research group."
        ]
    },
    {
        title: "Research Assistant",
        subtitle: "Rutgers University · Industrial Engineering & AI Tools - Dr. Rajiv Malhotra",
        date: "May 2024 - Jan 2025",
        details: [
            "Studied AI tools and widely used industrial technologies under Dr. Rajiv Malhotra.",
            "Supported research applying AI tools to industrial process optimization through literature review, data collection, and prototype evaluation."
        ]
    }
];

const projects = [
    {
        title: "ReflectX Health - Provider Dashboard for Reflect XR & Reflect Mobile",
        subtitle: "PostgreSQL · FastAPI · FastMCP · React · Ollama (local LLM)",
        date: "Sep 2026 - Nov 2026",
        details: [
            "GMU Challenge X - 2nd Place (Nov 2026). Sponsor: Persistent Technology. Prototype built on synthetic data.",
            "Led a student team (team lead and point of contact) building a HIPAA-minded clinician dashboard that tracks client engagement across two mental-wellness apps, Reflect XR and Reflect Mobile.",
            "Dashboard features activity charts, remote therapeutic monitoring (RTM) views, a client directory with notes, and a floating AI chat assistant on every signed-in page.",
            "Designed the PostgreSQL schema: bcrypt-hashed credentials, role-based access, an append-only audit log and soft deletes, loaded with Synthea synthetic patient data.",
            "Added JWT login for provider and admin roles; every API route checks the user's role and client assignment and returns 403 otherwise. Added a live HIPAA readiness self-assessment.",
            "Team's AI assistant: validates and screens each question, reads dashboard data through a read-only FastMCP tool, and redacts emails, SSNs, phone numbers, IDs, tokens and addresses before and after a local Ollama model answers.",
            "Contributed to the FastAPI backend and FastMCP assistant; built the React views for activity charts, RTM monitoring and client notes."
        ]
    },
    {
        title: "Job Posting Matcher Agent (In Progress)",
        subtitle: "Python · LLM Tool Calling · FastAPI · Pydantic · SQLite",
        date: "Sep 2026 - Present",
        details: [
            "Personal project.",
            "Building an LLM agent that extracts structured requirements from job postings, scores resume fit, and tracks skill trends.",
            "Designing scheduled new-posting alerts and a hand-labeled evaluation set to measure extraction precision and recall."
        ]
    },
    {
        title: "Secure Text-to-SQL Assistant",
        subtitle: "Python · FastAPI · FastMCP · Ollama · sqlglot · SQLite · pytest",
        date: "Nov 2026",
        details: [
            "Assistant that turns plain-English questions into SQL and runs them safely against real databases, using a local LLM at zero API cost.",
            "Engine: Qwen2.5-Coder 7B running locally through Ollama generates the SQL. A self-correction loop sends database errors back to the model, and column hints point it to the right tables.",
            "Accuracy: 48.7% execution accuracy on the BIRD Mini-Dev benchmark (500 questions across 11 real databases).",
            "Security: wrote 19 prompt-to-SQL injection attacks based on ICSE 2025 research, covering data deletion, data theft and system-table access. With no defenses, 14 succeeded; with layered defenses (sqlglot syntax-tree validation, read-only connections, a column privacy policy and query timeouts), none succeeded, and accuracy dropped by only 0.6 points.",
            "Deployment: runs as a FastAPI REST service and as a FastMCP tool server, so AI assistants can query databases through it. Covered by 18 pytest tests."
        ]
    },
    {
        title: "ROSWELL - Clinical Decision Support App (Capstone)",
        subtitle: "Python · Flask · Logistic Regression · SQLite (Turso) · React Native",
        date: "Jan 2025 - Dec 2025",
        details: [
            "Rutgers ECE capstone, built by a 3-person team.",
            "Mobile clinical decision-support app that helps psychiatrists identify medical conditions, such as hypothyroidism, anemia and diabetes, that can mimic psychiatric disorders.",
            "Patients report symptoms through a React Native app; a logistic regression model served through a Flask REST API converts the binary-encoded symptom inputs into probability-ranked diagnoses for a clinician dashboard.",
            "Designed a relational schema (Turso/SQLite) for patients, clinicians, sessions and messaging, with idempotent migrations, SHA-256 password hashing and role-based access control."
        ]
    }
];
  
const leadership = [
    {
        title: "President, Rutgers Hindu Students Council",
        subtitle: "Rutgers University",
        date: "May 2024 - May 2026",
        details: [
          "Led a 200+ member student organization with a 10-person executive board.",
          "Grew the annual operating budget from $8K to $25K (3x) through sponsorship outreach, event monetization and resource planning.",
          "Directed end-to-end production of campus-wide cultural events, including logistics, vendor coordination and public communications."
        ]
    },
    {
        title: "Mathematics and Engineering Economics Tutor",
        subtitle: "Rutgers University",
        date: "Jan 2025 - May 2026",
        details: [
          "Delivered one-on-one and small-group tutoring in Calculus I and II and Engineering Economics to 100+ students through Athletic Academic Services and the School of Engineering's Penji platform.",
          "Maintained a 4.9/5.0 average satisfaction rating, adapting explanations to each student's learning style.",
          "Identified recurring conceptual gaps across students and developed targeted explanation frameworks."
        ]
    },
    {
        title: "EOF Summer Counselor",
        subtitle: "Rutgers University",
        date: "Jun 2025 - Jul 2025",
        details: [
          "Mentored a cohort of incoming first-year students through their transition to college.",
          "Supported academic growth, built community through group activities, and helped students build confidence and a sense of belonging.",
          "Worked with faculty, staff and fellow counselors, and handled interpersonal conflicts with empathy."
        ]
    },
    {
        title: "Hackathons",
        date: "2024",
        details: [
            "HackHERS '24",
            "HackTCNJ '24",
            "HackRU '24"
        ]
    }
];

function createEntry(item){
    const entry = document.createElement("article");
    entry.className = "entry";
    entry.innerHTML = `
    <button class="entry-header">
        <span class="entry-title">${item.title}</span>
        <span class="entry-date">${item.date}</span>
        <span class="entry-subtitle">${item.subtitle || ""}</span>
    </button>
    <div class="entry-details" hidden>
      <ul>
        ${item.details.map(d => `<li>${d}</li>`).join("")}
      </ul>
    </div>
    `;
    const button = entry.querySelector(".entry-header");
    const panel = entry.querySelector(".entry-details");
    button.addEventListener("click", () => {
        panel.hidden = !panel.hidden;
      });
    return entry;
}

function render(sectionId, items) {
    const section = document.getElementById(sectionId);
    items.forEach(item => {
      section.appendChild(createEntry(item));
    });
}

function renderSkills(sectionId, items) {
    const section = document.getElementById(sectionId);
    items.forEach(item => {
      const row = document.createElement("p");
      row.className = "skill-row";
      row.innerHTML = `<strong>${item.label}:</strong> ${item.values.join(", ")}`;
      section.appendChild(row);
    });
}
  
renderSkills("skills", skills);
  
render("education", education);
render("experience", experience);
render("projects", projects);
render("leadership", leadership);