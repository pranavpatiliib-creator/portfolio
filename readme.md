# Pranav Mohan Patil — Portfolio

[![Live Demo](https://img.shields.io/badge/Portfolio-Live-3b82f6?style=flat-square&logo=vercel)](https://github.com/pranavpatiliib-creator)
[![GitHub](https://img.shields.io/badge/GitHub-pranavpatiliib--creator-181717?style=flat-square&logo=github)](https://github.com/pranavpatiliib-creator)

> **Building practical solutions with AI, automation, and modern web technologies.**

---

## 👤 About Pranav

I'm **Pranav Mohan Patil**, a second-year **Computer Science and Design (CSD)** student at **Dr. Vithalrao Vikhe Patil College of Engineering, Ahilyanagar**. I enjoy building real-world software — from school ERP systems used in production to AI agents and automation workflows.

My focus areas:
- **Generative AI** & **AI Agents**
- **Full-Stack Web Development**
- **Automation** (WhatsApp, email, workflow bots)
- **Cloud Deployment** (Vercel, AWS)
- **Database-backed applications** (Supabase, SQL)

---

## 🎓 Education

| Field       | Detail                                               |
|-------------|------------------------------------------------------|
| College     | Dr. Vithalrao Vikhe Patil College of Engineering     |
| Location    | Ahilyanagar, Maharashtra, India                      |
| Department  | Computer Science and Design (CSD)                    |
| Year        | Second Year — Currently Enrolled                     |

---

## 🛠️ Technical Skills

### Frontend
`HTML5` `CSS3` `JavaScript` `Next.js` `Bootstrap`

### Backend & Database
`Python` `SQL` `Supabase`

### AI & Automation
`Generative AI` `AI Agents` `Automation` `Baileys / WhatsApp` `Twilio`

### Deployment & Cloud
`Vercel` `AWS`

---

## 🚀 Projects

### 📚 School ERP System *(Live Project)*
A production-ready school ERP platform with:
- Timetable management
- Administrative dashboards
- Attendance tracking
- Leave management

**Stack:** Next.js · Supabase · JavaScript · Vercel · SQL  
**Live Demo:** [edumanmra.vercel.app](https://edumanmra.vercel.app/)

---

### 🥗 Nutrient Agent
An AI agent that provides personalised nutrition guidance via a conversational interface using generative AI.

**Stack:** Python · Generative AI · AI Agents

---

### 🔐 Cybersecurity Mail Writing Agent
An AI-powered agent that assists in drafting professional, contextually accurate cybersecurity-related emails.

**Stack:** Python · Generative AI · AI Agents · Automation

---

### 💬 WhatsApp Group Automation
An automation system for managing WhatsApp group workflows using the Baileys library — scheduled messages, event handling, and repetitive task automation.

**Stack:** Node.js · Baileys · JavaScript · Automation

---

### 🛒 E-Commerce Website
A full-stack e-commerce platform with product listings, shopping cart, and admin interface.

**Stack:** HTML · CSS · JavaScript · Python · SQL

---

### 🌾 Agriculture Bot
An AI-driven conversational bot for farmers — crop guidance, weather recommendations, and farming tips.

**Stack:** Python · Generative AI · AI Agents · Automation

---

## 🔗 Links

| Resource          | URL                                                                          |
|-------------------|------------------------------------------------------------------------------|
| GitHub Profile    | [github.com/pranavpatiliib-creator](https://github.com/pranavpatiliib-creator) |
| School ERP (Live) | [edumanmra.vercel.app](https://edumanmra.vercel.app/)                        |

---

## 📁 Project Structure

```
portfolio/
│
├── index.html          ← Main HTML (all sections)
├── README.md           ← This file
│
├── css/
│   └── style.css       ← Custom dark theme styles
│
├── js/
│   └── script.js       ← Interactions, animations, form validation
│
├── assets/
│   ├── profile.jpg     ← Replace with your actual photo
│   └── favicon.png     ← Replace with your favicon
│
└── screenshots/        ← Add portfolio screenshots here
```

---

## 💻 Running Locally

This is a **static website** — no build step required.

### Option 1 — Open directly
Simply open `index.html` in any modern browser.

### Option 2 — Local dev server (recommended)
If you have Node.js installed:
```bash
npx serve .
```
Or with Python:
```bash
# Python 3
python -m http.server 8080
```
Then visit `http://localhost:8080`.

### Option 3 — VS Code Live Server
Install the **Live Server** extension in VS Code, right-click `index.html`, and select **Open with Live Server**.

---

## 🌐 Deployment

### Deploy to Vercel
1. Push this repository to GitHub.
2. Go to [vercel.com](https://vercel.com) → **New Project** → Import your repo.
3. Framework Preset: **Other** (static site).
4. Click **Deploy**. Done — Vercel auto-deploys on every push.

### Deploy to GitHub Pages
1. Push to GitHub.
2. Go to **Settings → Pages**.
3. Set Source to **main branch / root**.
4. Your portfolio will be live at `https://<username>.github.io/<repo-name>/`.

---

## 📬 Contact Form Setup

The contact form in [`index.html`](index.html) is wired up with client-side validation.  
To make it send real emails, add a **Formspree** endpoint in [`js/script.js`](js/script.js):

```js
// js/script.js — line ~170
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';
```

1. Sign up at [formspree.io](https://formspree.io).
2. Create a form and copy your endpoint URL.
3. Paste it into the constant above.

---

## 🖼️ Adding Your Profile Photo

Replace the placeholder with your real photo:

```
assets/profile.jpg
```

The `<img>` tag in `index.html` will automatically use it.  
Recommended size: **300×300 px or larger**, square crop, JPEG or PNG.  
The CSS applies a circular crop and glow effect automatically.

---

## 📄 License

This portfolio is personal open-source work by **Pranav Mohan Patil**.  
Feel free to use the structure as inspiration — but please replace all personal information with your own.

---

*© 2025 Pranav Mohan Patil · Dr. VVPCE, Ahilyanagar · CSD*
