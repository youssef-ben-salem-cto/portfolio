---
title: "Architecture & Scale"
summary: "Decoupled Ingestion Pipeline, Distributed Redis Workers, and SSE Pub/Sub for sub-200ms real-time verification."
icon: "⚙️"
type: "tahut-kms"
weight: 30
---

<div class="not-prose space-y-8 mt-8">

<!-- Section 1 -->
<div class="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 shadow-sm">
<h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
<i class="fas fa-network-wired text-cyan-500"></i> Distributed Worker Architecture
</h2>
<div class="flex flex-col gap-8">
<div class="space-y-4 text-lg text-gray-600 dark:text-gray-300">
<p>Tahut KMS utilizes a feature-flagged isolation pattern to separate heavy machine learning tasks from the fast API layer. This ensures the main API remains highly responsive, even under extreme indexing or chat load.</p>
<ul class="space-y-2 mt-4 list-none">
<li class="flex items-start gap-2"><i class="fas fa-check-circle text-cyan-500 mt-1"></i> <strong>FastAPI Load Balancer:</strong> Handles all HTTP routing, authentication, and SSE relaying.</li>
<li class="flex items-start gap-2"><i class="fas fa-check-circle text-cyan-500 mt-1"></i> <strong>Redis Queue (RQ):</strong> Serves as both the task queue and the pub/sub event bus.</li>
<li class="flex items-start gap-2"><i class="fas fa-check-circle text-cyan-500 mt-1"></i> <strong>Distributed Workers:</strong> Independent nodes handling Ingestion, Chat, and Graph workloads.</li>
</ul>
</div>
</div>

```mermaid
flowchart TD
    subgraph L1 ["Client Layer"]
        UI["Frontend UI"]
    end

    subgraph L2 ["API Layer"]
        API["FastAPI Backend"]
    end

    subgraph L3 ["Message Broker"]
        Cache[("Redis Pub/Sub & Queue")]
    end

    subgraph L4 ["Distributed Workers"]
        W1["Ingestion Workers"]
        W2["Chat Workers"]
        W3["Graph Workers"]
    end

    subgraph L5 ["Data Persistence"]
        PG[("PostgreSQL / pgvector")]
        OS[("OpenSearch")]
        Neo[("Neo4j Graph DB")]
    end

    UI <-->|"HTTP / SSE"| API
    API <-->|"Enqueue Tasks"| Cache
    Cache <-->|"Process Jobs"| W1
    Cache <-->|"Process Jobs"| W2
    Cache <-->|"Process Jobs"| W3

    W1 -->|"Embeddings"| PG
    W1 -->|"Full Text"| OS
    W1 -->|"Entities"| Neo

    W2 -->|"Query/Retrieval"| PG
    W2 -->|"Query/Retrieval"| OS
    
    W3 -->|"Knowledge Graph"| Neo
```

<!-- Section 2 -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
<div class="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 shadow-sm">
<h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
<i class="fas fa-file-import text-blue-500"></i> Seamless Asynchronous Ingestion
</h2>
<p class="text-lg text-gray-600 dark:text-gray-300">
The platform features an intelligent, fully asynchronous ingestion pipeline. Document processing automatically executes multi-layered OCR, extracts critical semantic data, and generates precise vector embeddings—all while pushing live progress updates directly to the interface via Server-Sent Events. This ensures zero downtime or page refreshes for the end user.
</p>
</div>

<div class="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 shadow-sm">
<h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
<i class="fas fa-microchip text-purple-500"></i> Advanced Hardware Optimization
</h2>
<p class="text-lg text-gray-600 dark:text-gray-300">
Engineered for scale and continuous operation, the system utilizes strict, hardware-agnostic memory management algorithms. By actively optimizing resource allocation across execution layers—including PyTorch and Apple Metal Performance Shaders (MPS)—the platform guarantees sustained, high-performance processing without the risk of memory degradation over time.
</p>
</div>

<div class="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 shadow-sm md:col-span-2 mt-2">
<h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
<i class="fas fa-file-pdf text-red-500"></i> Deep Document Understanding (Docling & Unstructured)
</h2>
<div class="space-y-4 text-lg text-gray-600 dark:text-gray-300">
<p>To support the extreme file variability typical in highly regulated enterprise environments, the ingestion engine is powered by industry-leading semantic parsing frameworks: <strong>Docling</strong> and <strong>Unstructured.io</strong>.</p>
<ul class="space-y-2 list-none">
<li class="flex items-start gap-3"><i class="fas fa-check-circle text-cyan-500 mt-1.5 flex-shrink-0"></i> <span><strong>Layout-Aware Parsing:</strong> Accurately extracts text while mathematically preserving complex visual hierarchies such as multi-column layouts, nested tables, and embedded charts.</span></li>
<li class="flex items-start gap-3"><i class="fas fa-check-circle text-cyan-500 mt-1.5 flex-shrink-0"></i> <span><strong>Multi-Modal Ingestion:</strong> Seamlessly processes dense PDFs, Word documents, PowerPoint presentations, and raw images before pushing clean, semantic chunks to the vectorization pipeline.</span></li>
</ul>
</div>
</div>

</div>

<!-- Section 3 -->
<div class="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 shadow-sm text-center">
<h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">System Overview Dashboard</h2>
<div class="rounded-xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700 inline-block bg-white dark:bg-gray-800 p-2 max-w-4xl mx-auto">
<img src="{{< relurl "images/tahut-kms/images/sys-overview.png" >}}" alt="System Overview Dashboard" class="w-full h-auto object-contain rounded-lg">
</div>
</div>

</div>
