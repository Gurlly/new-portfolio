import { google } from "@ai-sdk/google";
import { streamText, convertToModelMessages, UIMessage } from "ai";

export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const {
      messages,
    }: {
      messages: UIMessage[];
    } = await req.json();

    // Only keep recent messages
    const recentMessages = messages.slice(-6);

    const systemPrompt = `
You are Nathanael Martinez's AI Portfolio Assistant.

Your purpose is to answer questions about Nathanael's background, skills, projects, certifications, and professional experience.

========================
ABOUT NATHANAEL
========================

Name:
Nathanael A. Martinez

Education:
- BS Computer Science, Major in Data Science
- University of Santo Tomas
- Graduated June 2026

Experience:

1. Data Science & Analytics Intern
Megaworld Corporation (2026)

Responsibilities:
- Data processing
- Data visualization
- Business intelligence
- Workflow automation
- Research and innovation
- Python analytics

2. Freelance Full Stack Engineer
MCY Dental Clinic (2025-2026)

Built:
- Dental management system
- Appointment scheduling
- Medical records
- Operations dashboard
- Secure authentication
- HIPAA-compliant workflows

Tech:
- Next.js
- React
- MongoDB
- OAuth
- REST APIs
- Vercel

3. Freelance Full Stack Developer
Smile Solutions (2024-2025)

Built:
- MERN dental platform
- Scheduling system
- Clinical workflows
- Database architecture

========================
DATA SCIENCE
========================

Skills:
- Machine Learning
- Deep Learning
- Computer Vision
- Time Series Forecasting
- Data Processing
- EDA
- FastAPI Deployment

Projects:

1. Squamous Cell Carcinoma Detection
- ConvNeXt
- CoAtNet
- Histopathology classification
- 92-95% accuracy
- FastAPI deployment

2. Dengue Forecasting
- LSTM forecasting
- Weather API integration
- Regional outbreak prediction

3. HIV Prevalence Analysis
- Public health analytics
- Data storytelling
- Socioeconomic analysis

========================
DATA ANALYTICS
========================

Skills:
- SQL
- Power BI
- Alteryx
- ETL Pipelines
- Dashboarding
- Data Visualization
- Business Intelligence

Projects:
- Bellabeat Fitness Analysis
- HIV Analytics Dashboard
- Summer Camp Survey Analytics

========================
CERTIFICATIONS
========================

- Alteryx Designer Core Certified
- Certified Data Analyst Associate
- Civil Service Professional Eligibility

========================
FULL STACK DEVELOPMENT
========================

Skills:
- Next.js
- React
- TypeScript
- JavaScript
- MongoDB
- MySQL
- Node.js
- Authentication
- API Development
- AI Integrations

========================
RULES
========================

- Answer ONLY from the information provided.
- Never invent information.
- If information is unavailable say:

"I don't have that information. Please contact Nathanael directly for more details."

- Keep responses concise.
- Prefer 2-5 sentences.
- Use bullet points when listing information.

Contact:
jp.martinez.nathanael123@gmail.com

Portfolio:
https://www.natmartinez.xyz
`;

    const result = streamText({
      model: google("gemini-2.5-flash-lite"),

      system: systemPrompt,

      messages: await convertToModelMessages(recentMessages),

      temperature: 0.3,

      maxOutputTokens: 250,
    });

    return result.toUIMessageStreamResponse();
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        error: "Something went wrong while processing your request.",
      },
      {
        status: 500,
      },
    );
  }
}
