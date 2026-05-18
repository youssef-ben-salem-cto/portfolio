---
title: "\"Sia\": Cognitive Recommendations"
summary: "A Dual-Pipeline Architecture establishing a configuration-driven AI recommender system operating concurrently with the alerting engine."
icon: "🧠"
type: "tahut-kms"
weight: 60
---

<div class="not-prose space-y-8 mt-8">

<!-- Section 1 -->
<div class="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 shadow-sm">
<h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
<i class="fas fa-brain text-purple-500"></i> Unified Graph-Centric Architecture
</h2>
<div class="space-y-4 text-lg text-gray-600 dark:text-gray-300">
<p>The design of the "Sia" Recommender System introduces a dual-pipeline architecture for the Tahut Knowledge Management System (KMS). It creates a parallel system that operates concurrently with the real-time monitoring engine without duplicating data ingestion efforts.</p>
<p>By centering on Neo4j as the central nervous system, Sia decouples the business logic of recommending from alerting while sharing a single source of truth—providing a scalable platform for active intelligence.</p>
</div>

<div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
<div class="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
<h3 class="font-bold text-xl text-gray-900 dark:text-white mb-2 flex items-center gap-2">
<i class="fas fa-magic text-purple-500"></i> 1. Rule-Based Engine
</h3>
<p class="text-gray-600 dark:text-gray-400">Executes pre-configured Cypher queries against the live graph to identify specific patterns and generate proactive recommendations in real-time.</p>
</div>
<div class="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
<h3 class="font-bold text-xl text-gray-900 dark:text-white mb-2 flex items-center gap-2">
<i class="fas fa-search text-blue-500"></i> 2. On-Demand GraphRAG
</h3>
<p class="text-gray-600 dark:text-gray-400">Processes natural language requests using a sophisticated Graph Retrieval-Augmented Generation pipeline, synthesizing answers via LLMs.</p>
</div>
</div>
</div>

<!-- Section 2 -->
<div class="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 shadow-sm">
<h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
<i class="fas fa-project-diagram text-green-500"></i> GraphRAG Pipeline
</h2>
<p class="text-lg text-gray-600 dark:text-gray-300 mb-6">
Sia enhances traditional RAG by incorporating the explicit structure of the knowledge graph, allowing the LLM to reason across interconnected facts and bridge complex relations.
</p>
<ul class="space-y-4 list-none text-lg text-gray-600 dark:text-gray-300">
<li class="flex items-start gap-3">
<div class="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg mt-1"><i class="fas fa-layer-group text-blue-600 dark:text-blue-400"></i></div>
<div><strong>Hybrid Retrieval:</strong> Combines fast semantic search over vector databases (like Qdrant) with graph-aware pre-filtering and subgraph expansion via Cypher.</div>
</li>
<li class="flex items-start gap-3">
<div class="bg-indigo-100 dark:bg-indigo-900/30 p-2 rounded-lg mt-1"><i class="fas fa-sort-amount-up text-indigo-600 dark:text-indigo-400"></i></div>
<div><strong>High-Precision Ranking:</strong> Utilizes cross-encoder models (e.g., ms-marco-MiniLM-L-6-v2) and cascaded strategies to jointly attend to queries and candidate documents.</div>
</li>
<li class="flex items-start gap-3">
<div class="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg mt-1"><i class="fas fa-robot text-green-600 dark:text-green-400"></i></div>
<div><strong>Generative Synthesis:</strong> Assembles top-ranked subgraphs and text chunks into prompts for a powerful LLM to synthesize contextual, natural language responses.</div>
</li>
</ul>
</div>

<!-- Section 3 -->
<div class="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 shadow-sm">
<h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
<i class="fas fa-shield-alt text-cyan-500"></i> Transactional Outbox Pattern
</h2>
<p class="text-lg text-gray-600 dark:text-gray-300 mb-8">
A critical challenge of dual writes to PostgreSQL and Kafka is elegantly solved using the Transactional Outbox Pattern to ensure strong eventual consistency.
</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-8 relative mb-8">
<div class="bg-white dark:bg-gray-800 p-6 rounded-xl border-l-4 border-l-cyan-500 shadow-md">
<div class="flex items-center gap-3 mb-3">
<i class="fas fa-database text-2xl text-cyan-500"></i>
<h3 class="font-bold text-xl text-gray-900 dark:text-white">Atomic Commits</h3>
</div>
<p class="text-gray-600 dark:text-gray-400">The system inserts recommendation data and corresponding event records into an <code>outbox_events</code> table within a single ACID-compliant PostgreSQL transaction.</p>
</div>

<div class="bg-white dark:bg-gray-800 p-6 rounded-xl border-l-4 border-l-orange-500 shadow-md">
<div class="flex items-center gap-3 mb-3">
<i class="fas fa-stream text-2xl text-orange-500"></i>
<h3 class="font-bold text-xl text-gray-900 dark:text-white">CDC Event Streaming</h3>
</div>
<p class="text-gray-600 dark:text-gray-400">Change Data Capture (CDC) tools like Debezium read the database's Write-Ahead Log (WAL) to stream changes to Kafka reliably, avoiding message loss or duplication.</p>
</div>
</div>

<h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4 mt-8 flex items-center gap-2">
<i class="fas fa-sitemap text-blue-500"></i> GraphRAG Query Flow
</h3>

```mermaid
sequenceDiagram
participant User as ktm:chat (User)
participant Endpoint as On-Demand Endpoint
participant Qdrant as Vector Store
participant Neo4j as Graph DB
participant LLM as Language Model

User->>Endpoint: /recommend <query>
Endpoint->>Qdrant: Hybrid Semantic Search
Qdrant-->>Endpoint: Seed Nodes & Chunks
Endpoint->>Neo4j: Subgraph Expansion (Cypher)
Neo4j-->>Endpoint: Connected Subgraphs
Endpoint->>Endpoint: Cross-Encoder Ranking
Endpoint->>LLM: Prompt with Subgraph Context
LLM-->>Endpoint: Synthesized Response
Endpoint-->>User: Contextualized Recommendation
```

<h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4 mt-8 flex items-center gap-2">
<i class="fas fa-share-alt text-green-500"></i> Outbox Pattern Logic
</h3>

```mermaid
graph TD
A[Recommender Engine] -->|Atomic Transaction| B(PostgreSQL DB)
B --> C[recommendations table]
B --> D[outbox_events table]

D -->|Debezium CDC via WAL| E[Kafka Broker]
E --> F[tahut.alerts Topic]
F --> G[Dashboards & UI]
```

</div>

</div>
