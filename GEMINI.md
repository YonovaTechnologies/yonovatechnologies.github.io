# Agent Instructions & Project Context

## 1. Tech Stack & Architecture
* **Backend:** Java 17+, Spring Boot 3.x. Always use Maven for dependency management.
* **Frontend:** React (Functional components, Hooks). Do not use Angular.
* **Infrastructure:** Google Cloud Platform (GCP). Prefer Cloud Run for deployments unless App Engine is explicitly requested.
* **Messaging:** Kafka for event-driven microservice communication.

## 2. Coding Standards
* **Fail Fast:** Prioritize input validation at the controller level.
* **Immutability:** Use Java Records for DTOs and configuration properties where possible.
* **Testing:** Write unit tests using JUnit 5 and Mockito. Do not skip tests for new business logic.
* **Types:** Strictly type all React props and state.

## 3. Execution & Behavior Rules
* **No Yapping:** Do not output long apologies, pleasantries, or philosophical explanations. Output only the necessary code, terminal commands, or direct answers.
* **Check First:** Before modifying a file, read it to understand the existing context.
* **Incremental Steps:** Do not attempt to refactor an entire application at once. Break tasks down into verifiable, single-component changes.