# KubeCostOptimizer: AI-Powered Kubernetes Cost Management Dashboard

![KubeCostOptimizer Dashboard](images/p1.png)
*A snapshot of the main dashboard, showcasing real-time cost analytics.*

---

## 🚀 Introduction

**KubeCostOptimizer** is a modern, AI-driven dashboard designed to provide real-time cost visibility and resource efficiency insights for Kubernetes clusters. Built with Next.js, Genkit, and Docker, this tool helps you stop guessing, start optimizing, and slash your cloud bill by up to 60% with actionable, AI-powered recommendations.

This project was built to demonstrate a production-grade, feature-rich application for managing and optimizing Kubernetes costs.

---

## ✨ Key Features

- **Live Interactive Dashboard**: Get a real-time, at-a-glance view of your cluster's financial health with dynamic charts and cards.
- **AI-Powered Recommendations**: Leverage the power of Google's Genkit AI to receive actionable right-sizing and resource optimization suggestions.
- **Advanced Filtering**: Dynamically filter cost and usage data by time range, namespace, and labels to drill down into specific areas.
- **Cost Distribution Analysis**: Visualize cost concentration with intuitive charts and heatmaps, breaking down expenses by namespace, pod, and service.
- **Workload Monitoring**: A dedicated dashboard for analyzing CPU and memory usage for specific workloads and individual pods.
- **Monitoring Integration Demo**: An interactive UI demonstrating how to connect with industry-standard tools like Prometheus, Datadog, and Grafana.
- **Containerized & Production-Ready**: Fully containerized with Docker and Docker Compose for easy local setup, testing, and deployment.

---

## 🛠️ Tech Stack

| Layer              | Tech Stack                                     |
| ------------------ | ---------------------------------------------- |
| **Frontend**       | Next.js, React, Tailwind CSS                   |
| **UI Components**  | ShadCN UI                                      |
| **Charts**         | Recharts                                       |
| **AI/Backend Logic**| Google AI & Genkit                               |
| **Containerization**| Docker, Docker Compose                         |
| **Linting/Formatting**| ESLint, Prettier                               |

---

## 🏁 Getting Started

Follow these instructions to get a local copy up and running for development and testing purposes.

### Prerequisites

- **Node.js**: v20.x or later
- **Docker**: Latest version
- **Docker Compose**: Latest version
- **Google AI API Key**: Get one from [Google AI Studio](https://aistudio.google.com/app/apikey).

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/kubecostoptimizer.git
    cd kubecostoptimizer
    ```

2.  **Create an environment file:**
    Copy the example environment file and add your Google AI API key.
    ```bash
    cp .env.example .env
    ```
    Now, edit the `.env` file:
    ```env
    GOOGLE_API_KEY=your_google_ai_api_key_here
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

4.  **Run the application with Docker Compose:**
    This command will build the Docker images and start the Next.js app and the Genkit server.
    ```bash
    docker-compose up --build
    ```

5.  **Access the application:**
    -   **Web App**: [http://localhost:3000](http://localhost:3000)
    -   **Genkit UI**: [http://localhost:4000](http://localhost:4000) (for inspecting AI flows)

---

## 📁 Project Structure

The repository is structured as a standard Next.js application:

```
.
├── src
│   ├── app/                # Next.js App Router pages
│   ├── components/         # Reusable React components (UI, charts, etc.)
│   ├── ai/                 # Genkit AI flows and configuration
│   ├── lib/                # Utilities, constants, schemas, server actions
│   └── services/           # Mock services for data fetching
├── public/                 # Static assets
├── .env.example            # Example environment variables
├── docker-compose.yml      # Docker Compose configuration
├── Dockerfile              # Dockerfile for the Next.js app
└── next.config.ts          # Next.js configuration
```

---

## 🗺️ Roadmap

This project follows a phased development plan:

-   **Phase 1: Core Features**: Focus on backend integration, resource usage fetching, cost estimation, and reporting.
-   **Phase 2: Pro Monitoring & Dashboard**: Implement the live dashboard, time-series monitoring, alerts, and deeper integrations.
-   **Phase 3: Advanced Engineering**: Introduce multi-cluster support, advanced security, and enterprise-grade features.

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
