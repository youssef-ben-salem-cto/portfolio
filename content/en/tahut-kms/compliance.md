---
title: "Security, Identity & Compliance"
summary: "OIDC/SAML Federation, Air-Gapped RBAC, and Immutable Kafka Audit Logging for Banking Environments."
icon: "🛡️"
type: "tahut-kms"
weight: 40
---

<div class="not-prose space-y-8 mt-8">

<div class="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 shadow-sm">
<div class="prose prose-lg dark:prose-invert max-w-none mb-8">
<p>The Tahut KMS platform is meticulously engineered from the ground up to meet the stringent requirements of High-Security Banking and IT Governance environments.</p>
<p>While formal compliance certifications are specific to individual deployments, the core system architecture and feature set are intrinsically aligned with the most rigorous pillars of global banking governance and data security standards:</p>
</div>

<h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3 mt-8">
<i class="fas fa-server text-cyan-500"></i> 1. Data Sovereignty & Air-Gapped Authority
</h2>
<div class="flex flex-col gap-8 mb-12">
<div class="space-y-4 text-lg text-gray-600 dark:text-gray-300">
<p>Tahut is designed as an Air-Gapped Authority system. This directly addresses the "Midnight Audit" and "Building the Chamber" journeys by ensuring:</p>
<ul class="space-y-2 mt-4 list-none">
<li class="flex items-start gap-2"><i class="fas fa-check-circle text-cyan-500 mt-1"></i> <strong>100% Private Data Processing:</strong> All LLM and embedding processing is handled via privately hosted endpoints—whether through local on-premises models (e.g., vLLM/Ollama) or secure, private cloud tenants (e.g., Azure OpenAI). Your data never trains public models.</li>
<li class="flex items-start gap-2"><i class="fas fa-check-circle text-cyan-500 mt-1"></i> <strong>Zero-Telemetry Policy:</strong> Strict audit of all dependencies to ensure no "phone home" behavior (ANSSI alignment).</li>
<li class="flex items-start gap-2"><i class="fas fa-check-circle text-cyan-500 mt-1"></i> <strong>Infrastructure Hardening:</strong> Migration to managed OpenSearch and PostgreSQL enables production-grade backup and monitoring.</li>
</ul>
</div>
<div class="w-full rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-2">
<img src="{{< relurl "images/tahut-kms/images/Identity%20&%20SSO.png" >}}" alt="Identity & SSO" class="w-full h-auto object-contain rounded-lg">
</div>
</div>

<h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3 border-t border-gray-200 dark:border-gray-700 pt-8">
<i class="fas fa-id-badge text-purple-500"></i> 2. Identity & Access Governance
</h2>
<div class="flex flex-col gap-8 mb-12">
<div class="space-y-4 text-lg text-gray-600 dark:text-gray-300">
<p>The system implements a multi-layered security model aligning with ISO 27001 and GDPR:</p>
<ul class="space-y-2 mt-4 list-none">
<li class="flex items-start gap-2"><i class="fas fa-check-circle text-purple-500 mt-1"></i> <strong>Enterprise Identity Federation:</strong> Supports OIDC, SAML 2.0, and LDAP/AD.</li>
<li class="flex items-start gap-2"><i class="fas fa-check-circle text-purple-500 mt-1"></i> <strong>Granular RBAC:</strong> Permissions are enforced at the Archive level.</li>
<li class="flex items-start gap-2"><i class="fas fa-check-circle text-purple-500 mt-1"></i> <strong>Secure Session Management:</strong> Uses JWT via HTTP-only Cookies and Single Session Per User.</li>
<li class="flex items-start gap-2"><i class="fas fa-check-circle text-purple-500 mt-1"></i> <strong>Local Device 2FA:</strong> Supports WebAuthn/Biometrics as a second factor.</li>
</ul>
</div>
<div class="w-full rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-2">
<img src="{{< relurl "images/tahut-kms/images/Governance%20Hierarchy.png" >}}" alt="Governance Hierarchy" class="w-full h-auto object-contain rounded-lg">
</div>
</div>

<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 border-t border-gray-200 dark:border-gray-700 pt-8">
<div>
<h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
<i class="fas fa-clipboard-list text-green-500"></i> 3. Immutable Auditability
</h2>
<p class="text-lg text-gray-600 dark:text-gray-300">
<strong>Kafka Streamed Logs:</strong> Administrative and sensitive file-access events are streamed to a Kafka topic (`tahut.audit.events`) using a fail-silent producer.<br><br>
<strong>Real-time Admin Dashboard:</strong> Admins monitor system health from a centralized UI.
</p>
</div>
<div>
<h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
<i class="fas fa-shield-alt text-red-500"></i> 4. Operational Resilience
</h2>
<p class="text-lg text-gray-600 dark:text-gray-300">
<strong>Tiered Fallback Strategy:</strong> Graceful degradation to Vector or Wiki tiers if GraphRAG is overloaded.<br><br>
<strong>Maintenance Modes:</strong> Toggles for global or archive-level access blocks.
</p>
</div>
</div>

<h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3 border-t border-gray-200 dark:border-gray-700 pt-8">
<i class="fas fa-user-shield text-indigo-500"></i> 5. Data Privacy & Verification
</h2>
<div class="flex flex-col gap-8 mb-12">
<div class="space-y-4 text-lg text-gray-600 dark:text-gray-300">
<ul class="space-y-2 list-none">
<li class="flex items-start gap-2"><i class="fas fa-check-circle text-indigo-500 mt-1"></i> <strong>High-Fidelity Citations:</strong> The "Surgical Intelligence" focus ensures every AI answer is linked to a specific page/paragraph in a searchable PDF.</li>
<li class="flex items-start gap-2"><i class="fas fa-check-circle text-indigo-500 mt-1"></i> <strong>PII Sanitization:</strong> The query pipeline includes PII filtering and language enforcement to protect sensitive data.</li>
<li class="flex items-start gap-2"><i class="fas fa-check-circle text-indigo-500 mt-1"></i> <strong>Searchable OCR Layers:</strong> Automated server-side OCR fulfills the "Right to Access" and "Data Portability" spirits of GDPR.</li>
</ul>
</div>
<div class="w-full rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-2">
<img src="{{< relurl "images/tahut-kms/images/guardrails.png" >}}" alt="Guardrails" class="w-full h-auto object-contain rounded-lg">
</div>
</div>

<div class="bg-cyan-50 dark:bg-cyan-900/20 p-6 rounded-xl border border-cyan-100 dark:border-cyan-800 mt-8">
<h3 class="text-xl font-bold text-cyan-900 dark:text-cyan-100 mb-2">Governance-First Architecture</h3>
<p class="text-gray-700 dark:text-gray-300">Designed to exceed standard compliance benchmarks, the platform's security layers are built specifically to facilitate and pass rigorous internal bank audits.</p>
<p class="text-gray-700 dark:text-gray-300 mt-2"><strong>The Tahut Advantage:</strong> More than just a general Knowledge Management System, Tahut is a Governance-First platform that prioritizes the "Verification" and "Proof" layers demanded by the highly regulated enterprise and banking domains.</p>
</div>

</div>

</div>
