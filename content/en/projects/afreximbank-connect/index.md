---
title: "Afreximbank Connect"
description: "Banking-grade security implementation featuring CIBA, PAR, TOTP, and Advanced MFA in a Clean Architecture Flutter/Auth0 environment."
date: 2025-11-01
weight: 30
draft: false
industry: ["Banking", "Finance"]
roles: ["CTO", "Security Architect", "Mobile Lead"]
tags: ["Flutter", "Auth0", "CIBA", "PAR", "MFA", "Security"]
featured_image: "/projects/afreximbank-connect/images/afr.svg"
socialImage: "/projects/afreximbank-connect/images/afr-connect1.png"
---

<div class="space-y-16">

<section class="max-w-4xl mx-auto px-4 md:px-0">
<div class="bg-bg-secondary border border-border-color rounded-2xl p-8 lg:p-12 shadow-lg relative overflow-hidden group">
<div class="absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div class="flex flex-col md:flex-row items-start md:items-center gap-8 mb-8 relative z-10">
<div class="w-24 h-24 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-border-color">
<img src="{{< relurl "projects/afreximbank-connect/images/afr.svg" >}}" alt="Afreximbank Connect Logo" class="w-16 h-16 object-contain" />
</div>
<div>
<h2 class="text-3xl font-bold text-text-primary mb-2">Secure Mobile Connectivity</h2>
<p class="text-text-secondary text-lg">Delivering robust, real-time transaction approvals with uncompromising security.</p>
</div>
</div>
<div class="prose prose-invert max-w-none text-text-secondary space-y-4">
<p>Afreximbank Connect represents the pinnacle of banking-grade mobile security, providing a highly secure gateway for real-time transaction approvals and executive connectivity. Built with <strong>Flutter</strong> for seamless performance across iOS and Android, the application integrates tightly with <strong>Auth0</strong> to deliver state-of-the-art authentication mechanisms.</p>
<p>At the core of this platform is a rigorous adherence to <strong>Clean Architecture</strong>, ensuring maintainability, scalability, and airtight security protocols.</p>
</div>
<div class="flex flex-wrap gap-3 mt-8">
<span class="px-4 py-1.5 rounded-full text-sm font-medium bg-brand-primary/20 text-brand-primary border border-brand-primary/30">Flutter</span>
<span class="px-4 py-1.5 rounded-full text-sm font-medium bg-brand-primary/20 text-brand-primary border border-brand-primary/30">iOS & Android</span>
<span class="px-4 py-1.5 rounded-full text-sm font-medium bg-brand-primary/20 text-brand-primary border border-brand-primary/30">Auth0</span>
<span class="px-4 py-1.5 rounded-full text-sm font-medium bg-brand-primary/20 text-brand-primary border border-brand-primary/30">Clean Architecture</span>
<span class="px-4 py-1.5 rounded-full text-sm font-medium bg-brand-primary/20 text-brand-primary border border-brand-primary/30">Banking-grade Security</span>
</div>
</div>
</section>

<section class="max-w-6xl mx-auto px-4 md:px-0">
<div class="mb-10">
<h3 class="text-2xl font-bold text-text-primary mb-4">Banking-Grade Security</h3>
<p class="text-text-secondary max-w-3xl">The application implements an exhaustive suite of security protocols designed to protect sensitive financial data and ensure non-repudiation in transaction approvals.</p>
</div>

<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
<div class="bg-bg-secondary p-6 rounded-xl border border-border-color hover:border-brand-primary/50 transition-colors">
<h4 class="text-lg font-semibold text-text-primary mb-2">Advanced MFA & Biometrics</h4>
<p class="text-text-secondary text-sm">Multi-factor authentication combining biometric verification (FaceID/TouchID), secure PIN, and cryptographic device authentication.</p>
</div>
<div class="bg-bg-secondary p-6 rounded-xl border border-border-color hover:border-brand-primary/50 transition-colors">
<h4 class="text-lg font-semibold text-text-primary mb-2">CIBA & PAR Integration</h4>
<p class="text-text-secondary text-sm">Leveraging Client Initiated Backchannel Authentication (CIBA) and Push Authorization Requests (PAR) for secure, decoupled transaction approvals away from the primary channel.</p>
</div>
<div class="bg-bg-secondary p-6 rounded-xl border border-border-color hover:border-brand-primary/50 transition-colors">
<h4 class="text-lg font-semibold text-text-primary mb-2">TOTP Generation</h4>
<p class="text-text-secondary text-sm">Integrated Time-based One-Time Password generation for fallback authentication and offline verification scenarios.</p>
</div>
</div>

<div class="relative w-full">

{{% evidence-container classification="AUTHENTICATION FLOW" %}}

```mermaid
sequenceDiagram
    participant Executive
    participant Device as Mobile App
    participant Auth0 as CIBA Server
    participant Core as Core Banking
    
    Executive->>Device: Initiates Approval
    Device->>Device: Biometric Verification
    Device->>Auth0: Push Authorization Request (PAR)
    Auth0-->>Device: Request URI
    Device->>Auth0: Initiate CIBA Flow
    Auth0-->>Device: auth_req_id
    loop Polling
        Device->>Auth0: Poll /token
        Auth0-->>Device: authorization_pending
    end
    Note over Auth0,Core: Background validation
    Auth0-->>Device: access_token
    Device->>Core: Commit Transaction
    Core-->>Device: Success
    Device-->>Executive: Approval Complete
```

{{% /evidence-container %}}

</div>
</section>

<section class="max-w-4xl mx-auto px-4 md:px-0 pb-16 mt-16">
<div class="mb-8 text-center">
<h3 class="text-2xl font-bold text-text-primary mb-4">Official App Stores</h3>
<p class="text-text-secondary max-w-2xl mx-auto">View the Afreximbank Connect application on the official platforms. Please note that application access and secure provisioning are strictly restricted to authorized bank clients and executives.</p>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
<a href="https://apps.apple.com/us/app/afreximbank-secure-connect/id6740484017" target="_blank" rel="noopener noreferrer" class="flex items-center justify-between bg-bg-secondary p-6 rounded-xl border border-border-color hover:border-brand-primary/50 transition-all group">
<div>
<h4 class="font-semibold text-text-primary mb-1">App Store</h4>
<p class="text-sm text-text-secondary">View on iOS Platform</p>
</div>
<svg class="w-6 h-6 text-brand-primary transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</a>
<a href="https://play.google.com/store/apps/details?id=com.afreximbank.connect.prod&hl" target="_blank" rel="noopener noreferrer" class="flex items-center justify-between bg-bg-secondary p-6 rounded-xl border border-border-color hover:border-brand-primary/50 transition-all group">
<div>
<h4 class="font-semibold text-text-primary mb-1">Google Play</h4>
<p class="text-sm text-text-secondary">View on Android Platform</p>
</div>
<svg class="w-6 h-6 text-brand-primary transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</a>
</div>
</section>

</div>
