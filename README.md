# 🍲 Flavour Fusion: AI-Driven Recipe Blogging

An AI-powered cloud application that generates customized and structured recipe blogs using Google Gemini 2.5 Flash.

---
## 📌 Project Overview
Flavour Fusion is a web-based application built using Streamlit and Google Generative AI (Gemini 2.5 Flash) that automatically generates detailed recipe blogs based on user input.

Users can:
- Enter a recipe topic
- Specify desired word count
- Generate AI-written recipe blogs
- Enjoy a programmer joke while content is being generated

This project demonstrates practical implementation of Large Language Models (LLMs) in cloud application development.

## 🚀 Features

- ✍️ AI-powered recipe blog generation
- 📏 Custom word count selection
- 😂 Random programmer joke during generation
- ⚡ Fast response using Gemini 2.5 Flash
- 🧩 Clean and interactive Streamlit UI
- ❗ Error handling and API integration

## 🏗️ System Architecture

```bash
User → Streamlit UI → Backend Logic → Gemini API → Generated Blog → UI Output
```

### Components

#### 1️⃣ User Layer
- Provides topic
- Selects word count
- Clicks generate button

#### 2️⃣ Frontend (Streamlit)
- Input fields
- Buttons
- Display area
- Spinner / loading indicator

#### 3️⃣ Backend (Python)
- API configuration
- Model initialization
- Joke generator function
- Recipe generation function

#### 4️⃣ AI Layer
- Gemini 1.5 Flash model
- Content generation engine

---

## 📂 Project Structure

```bash
BLOG/
│
├── app.py
└── requirements.txt
```

### 📄 app.py
Contains:
- Required imports
- API configuration
- Joke generation function
- Recipe generation function
- Streamlit UI logic

### 📄 requirements.txt

```bash
streamlit
google-generativeai
```

---

## 🛠️ Tech Stack

| Layer       | Technology            |
|------------|----------------------|
| Frontend   | Streamlit            |
| Backend    | Python               |
| AI Model   | Gemini 1.5 Flash     |
| API        | Google Generative AI |
| Deployment | Streamlit Cloud      |

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/flavour-fusion.git
cd flavour-fusion
```

### 2️⃣ Create Virtual Environment (Optional but Recommended)

```bash
python -m venv venv
source venv/bin/activate   # Mac/Linux
venv\Scripts\activate      # Windows
```

### 3️⃣ Install Dependencies

```bash
pip install -r requirements.txt
```

---

## 🔑 API Configuration

1. Visit Google AI Studio  
2. Generate your API key  
3. Add API key securely  


Example (Streamlit Cloud):

```bash
GOOGLE_API_KEY="your_api_key_here"
```

---

## ▶️ Running the Application in Terminal

```bash
python -m streamlit run app.py
```

The app will open in your browser.

---

## 🧠 How It Works

1. User inputs recipe topic  
2. User selects word count  
3. Clicks “Generate Recipe”  
4. Joke is displayed  
5. Request sent to Gemini API  
6. AI generates structured blog  
7. Output displayed in UI  

---

## 📋 Functional Requirements

- Accept topic input  
- Accept word count  
- Generate blog content  
- Display joke during processing  
- Handle errors gracefully  

---

## 🔒 Non-Functional Requirements

- Fast response time  
- Clean UI  
- Secure API handling  
- Scalable cloud-based design  
- Maintainable code structure  

---

## 🚀 Deployment

Deploy using:
- Streamlit Cloud
- GitHub Integration
- Add API key via secrets

---

## ⚠️ Limitations

- Requires internet connection  
- Depends on API availability  
- Word count may be approximate  
- API usage costs may apply  

---

## 🔮 Future Enhancements

- SEO optimization mode  
- Multi-language support  
- Recipe image generation  
- Export as PDF  
- User authentication  
- Blog history tracking  
- Admin dashboard  

---
## 📚 Prior Knowledge Required

- Basics of Large Language Models (LLMs)
- Google Gemini API usage
- Python fundamentals
- Streamlit framework basic

---
## 🏁 Conclusion

Flavour Fusion demonstrates real-world integration of:
- Generative AI
- Cloud APIs
- NLP
- Interactive Web Applications(Streamlit)
It is a scalable and modern AI-powered content generation platform designed to simplify recipe blogging.
