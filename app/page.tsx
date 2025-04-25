import { Github, Linkedin, Mail, Phone } from "lucide-react"
import Link from "next/link"

export default function Resume() {
  return (
    <div className="min-h-screen bg-white p-6 md:p-10">
      <div className="mx-auto max-w-4xl space-y-6 bg-white">
        {/* Header */}
        <header className="space-y-2 border-b border-gray-200 pb-4">
          <h1 className="text-3xl font-bold text-gray-900">Ankit Kumar</h1>
          <div className="flex flex-wrap gap-3 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Phone className="h-4 w-4" />
              <span>9205013630</span>
            </div>
            <div className="flex items-center gap-1">
              <Mail className="h-4 w-4" />
              <a href="mailto:ankitashuk20@gmail.com" className="hover:text-blue-600">
                ankitashuk20@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-1">
              <Linkedin className="h-4 w-4" />
              <a href="https://linkedin.com/in/ankitka" className="hover:text-blue-600">
                linkedin.com/in/ankitka
              </a>
            </div>
            <div className="flex items-center gap-1">
              <Github className="h-4 w-4" />
              <a href="https://github.com/Ankit-KK" className="hover:text-blue-600">
                github.com/Ankit-KK
              </a>
            </div>
          </div>
        </header>

        {/* Technical Skills */}
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-gray-900">Technical Skills</h2>
          <div className="space-y-1">
            <div>
              <span className="font-medium">Technical Skills:</span> Python, SQL, Power BI, Excel, Dashboards, Web
              Scraping, Machine Learning, GenAI, Prompt Engineering
            </div>
            <div>
              <span className="font-medium">Statistical Skills:</span> Cluster Analysis, Regression Modeling,
              Forecasting Modeling, Decision Trees, Time Series Analysis, Research
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-gray-900">Experience</h2>
          <div className="space-y-1">
            <div className="flex flex-wrap items-baseline justify-between">
              <h3 className="font-medium">Data Intern</h3>
              <span className="text-sm text-gray-600">March 2024 – June 2024</span>
            </div>
            <div className="flex flex-wrap items-baseline justify-between">
              <span>NYXify Technologies</span>
              <span className="text-sm text-gray-600">Bengaluru, India</span>
            </div>
            <ul className="ml-5 list-disc space-y-1 text-sm">
              <li>
                Managed a team of six interns in a web scraping project, achieving 95% data extraction efficiency and
                meeting deadlines.
              </li>
              <li>
                Engineered Python scripts to automate dataset collection and pre-processing, cutting manual labor by
                86%.
              </li>
              <li>
                Implemented real-time data collection from 10 websites, doubling data freshness with over a million
                images and videos.
              </li>
              <li>
                Oversaw product quality and performance throughout development, surpassing performance benchmarks.
              </li>
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-gray-900">Projects</h2>

          <div className="space-y-4">
            <div className="space-y-1">
              <div className="flex flex-wrap items-baseline justify-between">
                <h3 className="font-medium">BrewMetrics: Coffee Order Trend Analysis</h3>
                <span className="text-sm text-gray-600">Nov 2024</span>
              </div>
              <ul className="ml-5 list-disc space-y-1 text-sm">
                <li>Analyzed coffee order data in Excel to identify top-selling items and peak ordering times.</li>
                <li>Provided actionable insights for menu optimization and improved customer experience.</li>
              </ul>
              <div className="text-sm">
                <Link href="#" className="text-blue-600 hover:underline">
                  BrewMetrics Project Link
                </Link>
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex flex-wrap items-baseline justify-between">
                <h3 className="font-medium">Intelligent Machine Learning and Data Analysis Suite</h3>
                <span className="text-sm text-gray-600">July 2024</span>
              </div>
              <ul className="ml-5 list-disc space-y-1 text-sm">
                <li>
                  Developed MLAutoGen using LLaMA 3.1 8B Instruct, accelerating model selection, training, and
                  evaluation by 60%.
                </li>
                <li>
                  Boosted project efficiency and collaboration with modular scripts, enhancing reproducibility and
                  documentation quality by 70%.
                </li>
              </ul>
              <div className="text-sm space-x-2">
                <Link href="#" className="text-blue-600 hover:underline">
                  MLAutoGen App
                </Link>
                <span>,</span>
                <Link href="#" className="text-blue-600 hover:underline">
                  Exploragen App
                </Link>
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex flex-wrap items-baseline justify-between">
                <h3 className="font-medium">Sentiment Analysis of Amazon Alexa Reviews</h3>
                <span className="text-sm text-gray-600">June 2024</span>
              </div>
              <ul className="ml-5 list-disc space-y-1 text-sm">
                <li>Utilized NLP models to analyze 3,150 reviews, achieving 93% sentiment classification accuracy.</li>
                <li>
                  Elevated customer insights using Multinomial Naive Bayes and logistic regression, guiding product
                  strategies.
                </li>
              </ul>
              <div className="text-sm">
                <Link href="#" className="text-blue-600 hover:underline">
                  GitHub Repository
                </Link>
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex flex-wrap items-baseline justify-between">
                <h3 className="font-medium">Data-Driven Retail Growth: Leveraging Analytics & Predictive Modeling</h3>
                <span className="text-sm text-gray-600">June 2024</span>
              </div>
              <ul className="ml-5 list-disc space-y-1 text-sm">
                <li>
                  Enhanced sales forecasting accuracy by 25% through predictive models for better inventory management.
                </li>
                <li>Analyzed over 1M records to identify key sales drivers, increasing peak period sales by 15%.</li>
              </ul>
              <div className="text-sm">
                <Link href="#" className="text-blue-600 hover:underline">
                  GitHub Repository
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-gray-900">Education</h2>
          <div className="space-y-3">
            <div className="space-y-1">
              <div className="flex flex-wrap items-baseline justify-between">
                <h3 className="font-medium">Bachelors in Computer Applications</h3>
                <span className="text-sm text-gray-600">2021 – 2024</span>
              </div>
              <div className="flex flex-wrap items-baseline justify-between">
                <span>Amrita Vishwa Vidyapeetham, CGPA 7</span>
                <span className="text-sm text-gray-600">Coimbatore, Tamil Nadu</span>
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex flex-wrap items-baseline justify-between">
                <h3 className="font-medium">PGP in Data Science and Machine Learning</h3>
                <span className="text-sm text-gray-600">2023 – 2024</span>
              </div>
              <div>
                <span>Intellipaat</span>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-gray-900">Certifications</h2>
          <ul className="ml-5 list-disc space-y-1">
            <li>Google Data Analytics – Google</li>
            <li>MS SQL Developer Course – Intellipaat</li>
            <li>Machine Learning Specialization – Deeplearning.AI</li>
          </ul>
        </section>
      </div>
    </div>
  )
}
