---
title: "AI Engine & Workspace"
summary: "Inside the Cognitive Agent Layer: Chain-of-Thought reasoning, real-time memory synchronization, and surgical UI context preservation."
icon: "🧠"
type: "tahut-kms"
weight: 20
---

<div class="not-prose space-y-8 mt-8">

  <!-- Section 1 -->
  <div class="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 shadow-sm">
    <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
      <i class="fas fa-brain text-pink-500"></i> The Cognitive Agent Layer
    </h2>
    <div class="flex flex-col md:flex-row gap-8 items-center">
      <div class="flex-1 space-y-4 text-lg text-gray-600 dark:text-gray-300">
        <p>The <code>AgentRuntimeEngine</code> sits as a transparent interceptor between the user query and the RAG pipeline. It handles query rewriting, prompt assembly, and reasoning execution using local, air-gapped LLMs (e.g., vLLM, Ollama) or secure private cloud tenants (e.g., Azure OpenAI).</p>
        <p><strong>Prompt Assembly Pipeline:</strong> The engine dynamically injects system personas, previous memory states, few-shot examples, and the retrieved context into a single cohesive prompt, strictly enforcing the user's native language.</p>
      </div>
      <div class="flex-1 w-full rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-2">
        <img src="{{< relurl "images/tahut-kms/images/intelligence.png" >}}" alt="Agent Intelligence" class="w-full h-auto object-contain rounded-lg">
      </div>
    </div>
  </div>

  <!-- Section 2 -->
  <div class="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 shadow-sm">
    <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
      <i class="fas fa-desktop text-blue-500"></i> Workspace Synchronization
    </h2>
    <div class="flex flex-col md:flex-row-reverse gap-8 items-center">
      <div class="flex-1 space-y-4 text-lg text-gray-600 dark:text-gray-300">
        <p>To achieve sub-200ms page-snapping, the Next.js frontend uses a custom <code>useWorkspaceSync</code> hook. This bridge coordinates the <code>react-pdf</code> web workers and the Zustand store to ensure visual fidelity during complex layout shifts or dark-mode toggles.</p>
      </div>
      <div class="flex-1 w-full rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-2">
        <img src="{{< relurl "images/tahut-kms/images/collection-workspace.png" >}}" alt="Collection Workspace" class="w-full h-auto object-contain rounded-lg">
      </div>
    </div>
  </div>

  <!-- Section 3 -->
  <div class="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 shadow-sm">
    <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
      <i class="fas fa-memory text-green-500"></i> React State Memory Optimization
    </h2>
    <div class="flex flex-col md:flex-row gap-8 items-center">
      <div class="flex-1 space-y-4 text-lg text-gray-600 dark:text-gray-300">
        <p>Components receiving continuous SSE streams strictly avoid massive array spreading (<code>[...prev, update]</code>) on every tick. We use <code>useRef</code> and throttled React state batching to prevent heavy memory leaks in browsers during long reasoning streams.</p>
      </div>
      <div class="flex-1 w-full rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-2">
        <img src="{{< relurl "images/tahut-kms/images/ingestion-progress.png" >}}" alt="Ingestion Progress" class="w-full h-auto object-contain rounded-lg">
      </div>
    </div>
  </div>

<!-- Section 4 -->
<div class="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 shadow-sm mt-8">
<h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
<i class="fas fa-cubes text-indigo-500"></i> Supported Models & Providers
</h2>
<p class="text-lg text-gray-600 dark:text-gray-300 mb-8">
Tahut KMS is designed to be completely provider-agnostic. While local execution (via vLLM or Ollama) is often utilized for strictly air-gapped deployments, the application natively supports a wide array of state-of-the-art inference engines out of the box, including secure enterprise cloud providers.
</p>

<div class="grid grid-cols-1 md:grid-cols-3 gap-6">

<!-- LLM/VLM -->
<div class="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
<h3 class="font-bold text-lg text-gray-900 dark:text-white mb-4 flex items-center gap-2 border-b border-gray-100 dark:border-gray-700 pb-2">
<i class="fas fa-comment-dots text-pink-500"></i> LLMs & VLMs
</h3>
<div class="flex flex-wrap gap-2">
<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-600">OpenAI Compatible</span>
<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 border border-blue-200 dark:border-blue-700">Google Gemini</span>
<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-300 border border-sky-200 dark:border-sky-800">Azure OpenAI</span>
<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300 border border-purple-200 dark:border-purple-800">Anthropic</span>
<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-gray-900 text-white dark:bg-black dark:text-white border border-gray-700">Ollama</span>
<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300 border border-yellow-200 dark:border-yellow-800">HF / TEI</span>
</div>
</div>

<!-- Embeddings -->
<div class="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
<h3 class="font-bold text-lg text-gray-900 dark:text-white mb-4 flex items-center gap-2 border-b border-gray-100 dark:border-gray-700 pb-2">
<i class="fas fa-layer-group text-green-500"></i> Embeddings
</h3>
<div class="flex flex-wrap gap-2">
<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-600">OpenAI Compatible</span>
<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 border border-blue-200 dark:border-blue-700">Google Gemini</span>
<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-300 border border-sky-200 dark:border-sky-800">Azure OpenAI</span>
<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-gray-900 text-white dark:bg-black dark:text-white border border-gray-700">Ollama</span>
<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300 border border-yellow-200 dark:border-yellow-800">HF / TEI</span>
</div>
</div>

<!-- Rerankers -->
<div class="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
<h3 class="font-bold text-lg text-gray-900 dark:text-white mb-4 flex items-center gap-2 border-b border-gray-100 dark:border-gray-700 pb-2">
<i class="fas fa-sort-amount-down text-orange-500"></i> Rerankers
</h3>
<div class="flex flex-wrap gap-2">
<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-600">OpenAI Compatible</span>
<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-300 border border-sky-200 dark:border-sky-800">Azure OpenAI</span>
<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-gray-900 text-white dark:bg-black dark:text-white border border-gray-700">Ollama</span>
<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300 border border-yellow-200 dark:border-yellow-800">HF / TEI</span>
<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-300 border border-teal-200 dark:border-teal-800">Cohere</span>
<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300 border border-red-200 dark:border-red-800">Voyage AI</span>
</div>
</div>

</div>
</div>

</div>
