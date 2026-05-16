---
title: "Eye of Horus: Active Intelligence Alerts"
summary: "Transforming the KMS from a passive repository into a real-time, active intelligence monitoring platform."
icon: "👁️"
type: "tahut-kms"
weight: 50
---

<div class="not-prose space-y-8 mt-8">

<!-- Section 1 -->
<div class="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 shadow-sm">
<h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
<i class="fas fa-eye text-yellow-500"></i> From Passive Repository to Active Intelligence
</h2>
<div class="space-y-4 text-lg text-gray-600 dark:text-gray-300">
<p>The design of the "Eye of Horus" collection represents a significant architectural evolution for the Tahut Knowledge Management System (KMS), transforming it from a passive repository of information into a dynamic, intelligent monitoring platform.</p>
<p>The core objective is to introduce an active intelligence layer capable of detecting predefined alerts based on the continuous analysis of interconnected data. This requires a carefully designed multi-component architecture that integrates seamlessly with the existing KMS infrastructure.</p>
</div>

<div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
<div class="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
<h3 class="font-bold text-xl text-gray-900 dark:text-white mb-2 flex items-center gap-2">
<i class="fas fa-bolt text-yellow-500"></i> 1. Real-time Stream Analysis
</h3>
<p class="text-gray-600 dark:text-gray-400">Analyzing incoming data streams via the LightRAG API pipelines the moment they enter the system.</p>
</div>
<div class="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
<h3 class="font-bold text-xl text-gray-900 dark:text-white mb-2 flex items-center gap-2">
<i class="fas fa-sync text-blue-500"></i> 2. Continuous Re-evaluation
</h3>
<p class="text-gray-600 dark:text-gray-400">Continuously re-evaluating the entire Neo4j knowledge graph for emerging patterns and hidden relationships.</p>
</div>
</div>
</div>

<!-- Section 2 -->
<div class="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 shadow-sm">
<h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
<i class="fas fa-cogs text-gray-500"></i> Configuration-Driven Rules Engine
</h2>
<p class="text-lg text-gray-600 dark:text-gray-300 mb-6">
The cornerstone of the "Eye of Horus" collection is its declarative rules engine. Designed to be fundamentally "configuration-driven", it provides a flexible, non-code-based alerting system.
</p>
<ul class="space-y-4 list-none text-lg text-gray-600 dark:text-gray-300">
<li class="flex items-start gap-3">
<div class="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-lg mt-1"><i class="fas fa-file-code text-purple-600 dark:text-purple-400"></i></div>
<div><strong>Declarative Schemas:</strong> Administrators can define, modify, and manage detection logic through human-readable JSON or YAML schemas.</div>
</li>
<li class="flex items-start gap-3">
<div class="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg mt-1"><i class="fas fa-project-diagram text-green-600 dark:text-green-400"></i></div>
<div><strong>Graph Pattern Matching:</strong> The engine leverages Neo4j's expressive Cypher query language to execute complex pattern matching across the graph.</div>
</li>
<li class="flex items-start gap-3">
<div class="bg-red-100 dark:bg-red-900/30 p-2 rounded-lg mt-1"><i class="fas fa-fire text-red-600 dark:text-red-400"></i></div>
<div><strong>APOC Triggers:</strong> Utilizing the Awesome Procedures on Cypher (APOC) library, lightweight triggers execute upon the creation of new nodes or relationships.</div>
</li>
</ul>
</div>

<!-- Section 3 -->
<div class="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 shadow-sm">
<h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
<i class="fas fa-project-diagram text-cyan-500"></i> Dual-Path Alert Distribution
</h2>
<p class="text-lg text-gray-600 dark:text-gray-300 mb-8">
Upon the successful firing of a rule, the system must persist the resulting alert and distribute it effectively to the broader enterprise ecosystem.
</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-8 relative mb-8">
<div class="bg-white dark:bg-gray-800 p-6 rounded-xl border-l-4 border-l-cyan-500 shadow-md">
<div class="flex items-center gap-3 mb-3">
<i class="fas fa-database text-2xl text-cyan-500"></i>
<h3 class="font-bold text-xl text-gray-900 dark:text-white">Local Dashboard Persistence</h3>
</div>
<p class="text-gray-600 dark:text-gray-400">The first persistence target is a local storage area (optimized NoSQL or relational), designated exclusively for the internal KMS monitoring dashboard.</p>
</div>

<div class="bg-white dark:bg-gray-800 p-6 rounded-xl border-l-4 border-l-orange-500 shadow-md">
<div class="flex items-center gap-3 mb-3">
<i class="fas fa-stream text-2xl text-orange-500"></i>
<h3 class="font-bold text-xl text-gray-900 dark:text-white">Enterprise SIEM Integration</h3>
</div>
<p class="text-gray-600 dark:text-gray-400">Simultaneously, the alert payload is formatted and published to a designated Kafka topic (<code>tahut.alerts</code>). This high-throughput messaging bus ensures alerts are reliably delivered to Security Information and Event Management (SIEM) platforms or ticketing systems in real-time.</p>
</div>
</div>

<h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4 mt-8 flex items-center gap-2">
<i class="fas fa-sitemap text-blue-500"></i> System Architecture Flow
</h3>

```mermaid
sequenceDiagram
participant API as LightRAG API
participant Graph as Neo4j Graph DB
participant Engine as Rules Engine
participant Dash as Local Dashboard
participant Kafka as Kafka (SIEM)

API->>Graph: Ingest new structured data
Graph-->>Engine: APOC Trigger (Node/Edge Created)
Engine->>Engine: Evaluate YAML Declarative Rules
alt Alert Triggered
Engine->>Dash: Persist to Local UI Store
Engine->>Kafka: Publish Event to tahut.alerts
end
```

<h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4 mt-8 flex items-center gap-2">
<i class="fas fa-share-alt text-green-500"></i> Alert Routing Logic
</h3>

```mermaid
graph TD
A[Alert Triggered] --> B(Local Dashboard Persistence)
A --> C(Enterprise SIEM Integration)

B --> D[Postgresql]
D --> E[Internal KMS Monitoring UI]

C --> F[Kafka tahut.alerts Topic]
F --> G[External SIEM / Ticketing]
```

</div>

</div>
