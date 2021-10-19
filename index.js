import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

const GET_TEAMS = JSON.stringify({
  teams: [
    "Desing",
    "Frontend",
    "Backend",
    "Product Mangment",
    "Security",
    "new team",
  ],
});

const GET_TEAMS_MEMBERS = JSON.stringify({
  "Yara ElSawaf": {
    id: 12,
    name: "Yara ElSawaf",
    role: "UI Designer",
    goals_count: 5,
    goals_completed_count: 2,
  },
  "Hoda Hamdy": {
    id: 25,
    name: "Hoda Hamdy",
    role: "UI Designer",
    goals_count: 5,
    goals_completed_count: 3,
  },
  "Nada Fadali": {
    id: 78,
    name: "Nada Fadali",
    role: "UI Designer",
    goals_count: 9,
    goals_completed_count: 7,
  },
  "Yasmin Mourad": {
    id: 97,
    name: "Yasmin Mourad",
    role: "UI Designer",
    goals_count: 10,
    goals_completed_count: 4,
  },
  "Ingie ElSaddawy": {
    id: 55,
    name: "Ingie ElSaddawy",
    role: "UI Designer",
    goals_count: 6,
    goals_completed_count: 3,
  },
  "Nour Azab": {
    id: 41,
    name: "Nour Azab",
    role: "UI Designer",
    goals_count: 5,
    goals_completed_count: 5,
  },
  "Reem Tarek": {
    id: 49,
    name: "Reem Tarek",
    role: "UI Designer",
    goals_count: 4,
    goals_completed_count: 2,
  },
  "Mai ElMaghraby": {
    id: 63,
    name: "Mai ElMaghraby",
    role: "UI Designer",
    goals_count: 7,
    goals_completed_count: 3,
  },
  "Abd ElWahab": {
    id: 106,
    name: "Abd ElWahab",
    role: "UI Designer",
    goals_count: 6,
    goals_completed_count: 3,
  },
});

const GET_USER_ROLE = JSON.stringify({
  role: "employee",
  isRegistered: false,
});

const GET_SUBTASK_COMMENTS = JSON.stringify({
  comments: [
    {
      id: 12,
      body: "hi, that's so wrong , bye !?",
      timestamep: "Sun Oct 03 2021 21:10:38 GMT+0200",
      userId: 2,
      userName: "mshana",
    },
    {
      id: 15,
      body: "eah dah",
      timestamep: "Sun Oct 03 2021 21:10:38 GMT+0200",
      userId: 3,
      userName: "la2ana",
    },
    {
      id: 20,
      body: "ay 7aga",
      timestamep: "Sun Oct 03 2021 21:10:38 GMT+0200",
      userId: 3,
      userName: "la2ana",
    },
  ],
});

const GET_GOALS_WITH_SUBTASKS = JSON.stringify({
  goals: [
    {
      id: 13,
      name: "ad7r el standup",
      difficulty_points: 4,
      category: "hi",
      timestamps: "Sun Feb 03 2021 21:10:38 GMT+0200",
      subtasks: [
        {
          id: 12,
          details: "ay 7ag ... lorem, as if we agreed on the todo_status",
          todo_status: 1,
          deadline:
            "Sun Oct 11 2021 21:22:05 GMT+0200 (Eastern European Standard Time)",
          timestamps: "Sun Oct 03 2021 21:22:05 GMT+0200",
        },
        {
          id: 14,
          details: "ay 7ag ... lorem, there is a ....",
          todo_status: 1,
          deadline:
            "Sun Oct 12 2021 21:22:05 GMT+0200 (Eastern European Standard Time)",
          timestamps: "Sun Oct 04 2021 21:22:05 GMT+0200",
        },
      ],
    },
    {
      id: 14,
      name: "ad7r el standup",
      difficulty_points: 20,
      category: "hi",
      timestamps: "Sun Oct 06 2021 11:10:38 GMT+0200",
      subtasks: [
        {
          id: 30,
          details: "ay 7ag ... lorem, as if we agreed on the todo_status",
          todo_status: 2,
          deadline:
            "Sun Oct 11 2021 21:22:05 GMT+0200 (Eastern European Standard Time)",
          timestamps: "Sun Oct 03 2021 21:22:05 GMT+0200",
        },
        {
          id: 31,
          details: "ay 7ag ... lorem, there is a ....",
          todo_status: 1,
          deadline:
            "Sun Oct 12 2021 21:22:05 GMT+0200 (Eastern European Standard Time)",
          timestamps: "Sun Oct 04 2021 21:22:05 GMT+0200",
        },
      ],
    },
    {
      id: 20,
      name: "try not to die",
      difficulty_points: 2,
      category: "Community",
      timestamps: "Sun Dec 05 2021 21:10:38 GMT+0200",
      subtasks: [
        {
          id: 13,
          details: "ay 7ag ... lorem",
          todo_status: 1,
          deadline:
            "Sun Oct 11 2021 21:22:05 GMT+0200 (Eastern European Standard Time)",
          timestamps: "Sun Oct 03 2021 21:22:05 GMT+0200",
        },
      ],
    },
  ],
});

const GET_USER_INFO = JSON.stringify({
  id: 1,
  name: "noha",
  firstName: "Hoda",
  lastName: "Hamdy",
  email: "noha@robustastudio.com",
  started_at: "Sun Oct 03 2020 21:22:05 GMT+0200",
  position: 2,
  profile_photo:
    "http://www.ga.berkeley.edu/wp-content/uploads/2015/08/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
  timestamps: "Sun Oct 12 2020 21:22:05 GMT+0200",
  role: "manager",
  isRegistered: true,
});

const GET_USER_ACCOUNT = JSON.stringify({
  id: 1,
  firstName: "Hoda",
  lastName: "Hamdy",
  team: "Design",
  position: "UX Designer",
  email: "hoda@robustastudio.com",
  started_at: "Sun Oct 03 2020 21:22:05 GMT+0200",
  profile_photo:
    "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png",
  timestamps: "Sun Oct 12 2020 21:22:05 GMT+0200",
  role: "employee",
  isRegistered: true,
});

const POST_PUT_RES = JSON.stringify({
  msg: "done",
});

app.get("/", (_, res) => {
  return res.send("hi");
});

app.get("/teams", (_, res) => {
  res.setHeader("Content-Type", "application/json");
  return res.send(GET_TEAMS);
});

app.get("/team-members", (_, res) => {
  res.setHeader("Content-Type", "application/json");
  return res.send(GET_TEAMS_MEMBERS);
});

app.get("/user-role", (_, res) => {
  res.setHeader("Content-Type", "application/json");
  return res.send(GET_USER_ROLE);
});

app.get("/subtask-comments", (_, res) => {
  res.setHeader("Content-Type", "application/json");
  return res.send(GET_SUBTASK_COMMENTS);
});

app.get("/goals", (_, res) => {
  res.setHeader("Content-Type", "application/json");
  return res.send(GET_GOALS_WITH_SUBTASKS);
});

app.get("/user-info", (_, res) => {
  res.setHeader("Content-Type", "application/json");
  return res.send(GET_USER_INFO);
});

app.get("user-account", (_, res) => {
  res.setHeader("Content-Type", "application/json");
  return res.send(GET_USER_ACCOUNT);
});

app.post("/register", (_, res) => {
  res.setHeader("Content-Type", "application/json");
  return res.send(POST_PUT_RES);
});

app.post("/goal", (_, res) => {
  res.setHeader("Content-Type", "application/json");
  return res.send(POST_PUT_RES);
});

app.post("/subtask", (_, res) => {
  res.setHeader("Content-Type", "application/json");
  return res.send(POST_PUT_RES);
});

app.put("/user-account", (_, res) => {
  res.setHeader("Content-Type", "application/json");
  return res.send(POST_PUT_RES);
});

app.put("/user-info", (_, res) => {
  res.setHeader("Content-Type", "application/json");
  return res.send(POST_PUT_RES);
});

app.listen(process.env.PORT || 8000, () => {
  console.log(`app is up and runnig on port ${process.env.PORT || 8000}`);
});
