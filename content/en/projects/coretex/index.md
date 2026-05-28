---
title: "Coretex digi-Q: Textile Quality Control"
description: "A comprehensive deep-dive into the Coretex digi-Q platform featuring Flutter, Nest JS, React JS, offline-first architecture, and intelligent AQL statistical sampling."
date: 2024-01-01
weight: 30
industry: ["Textile", "Quality Control"]
roles: ["CTO", "Software Architect"]
tags: ["Flutter", "Nest JS", "React JS", "MongoDB", "Offline First", "OneSignal", "Google Storage"]
featured_image: "/projects/coretex/images/coretex-logo-fixed.svg"
socialImage: "/projects/coretex/images/coretex-logo-fixed.svg"
---

<div class="mb-12 flex flex-col md:flex-row items-center md:items-start gap-8">
<div class="shrink-0">
<img src="images/coretex-logo-fixed.svg" alt="Coretex" class="w-32 h-32 object-contain bg-slate-900 rounded-3xl shadow-md border border-border-primary dark:border-border-primary p-2">
</div>
<div class="text-lg text-text-secondary dark:text-text-secondary leading-relaxed">
<p class="mb-4"><strong class="text-text-primary dark:text-text-primary font-bold">Digitizing Textile Quality Assurance:</strong> Coretex digi-Q is a unified quality control platform deployed across the textile industry. It replaces legacy paper-based processes with an offline-first tablet application for inspectors and a powerful React JS dashboard for management, fully integrated with AQL (Acceptable Quality Limit) statistical models.</p>
</div>
</div>

<div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-12 text-center">
<div class="p-6 rounded-xl bg-bg-secondary dark:bg-bg-secondary border border-border-primary dark:border-border-primary shadow-sm">
<div class="text-3xl font-bold text-primary dark:text-primary-light mb-2"><i class="fas fa-mobile-alt"></i></div>
<div class="text-sm text-text-tertiary dark:text-text-tertiary uppercase tracking-wider font-semibold">Offline-First Mobile</div>
</div>
<div class="p-6 rounded-xl bg-bg-secondary dark:bg-bg-secondary border border-border-primary dark:border-border-primary shadow-sm">
<div class="text-3xl font-bold text-primary dark:text-primary-light mb-2"><i class="fas fa-chart-pie"></i></div>
<div class="text-sm text-text-tertiary dark:text-text-tertiary uppercase tracking-wider font-semibold">AQL Statistical Engine</div>
</div>
<div class="p-6 rounded-xl bg-bg-secondary dark:bg-bg-secondary border border-border-primary dark:border-border-primary shadow-sm">
<div class="text-3xl font-bold text-primary dark:text-primary-light mb-2"><i class="fas fa-file-pdf"></i></div>
<div class="text-sm text-text-tertiary dark:text-text-tertiary uppercase tracking-wider font-semibold">Automated PDF Reports</div>
</div>
</div>

<div class="space-y-12">

<section>
<h2 class="text-3xl font-bold text-text-primary dark:text-text-primary mb-6 flex items-center gap-3">
<span class="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm"><i class="fas fa-tablet-alt"></i></span>
Flutter Tablet Experience
</h2>
<div class="bg-bg-secondary dark:bg-bg-secondary border border-border-primary dark:border-border-primary rounded-2xl p-6 md:p-8 shadow-sm">
<p class="text-text-secondary dark:text-text-secondary mb-6 leading-relaxed">Textile factories often have unreliable network coverage. The Flutter-based tablet application was architected with an offline-first approach, ensuring inspectors can conduct rigorous quality checks without interruption.</p>
<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
<div>
<h3 class="text-xl font-bold text-text-primary dark:text-text-primary mb-3 flex items-center gap-2">
<i class="fas fa-search text-primary"></i> Comprehensive Inspections
</h3>
<ul class="space-y-2 text-sm text-text-secondary">
<li class="flex items-start gap-2"><i class="fas fa-check-circle text-primary mt-1"></i> <strong>EAN Barcode Scanning:</strong> Rapid identification of production batches.</li>
<li class="flex items-start gap-2"><i class="fas fa-check-circle text-primary mt-1"></i> <strong>Defect Capture:</strong> Native camera integration to photograph and annotate critical, major, and minor defects.</li>
<li class="flex items-start gap-2"><i class="fas fa-check-circle text-primary mt-1"></i> <strong>Digital Signatures:</strong> On-screen signature capture for immediate validation and compliance.</li>
</ul>
</div>
<div>
<h3 class="text-xl font-bold text-text-primary dark:text-text-primary mb-3 flex items-center gap-2">
<i class="fas fa-sync text-primary"></i> Asynchronous Synchronization
</h3>
<p class="text-sm text-text-secondary mb-3">All inspection data is stored locally on the device using secure storage, and asynchronously synchronized to the Nest JS backend utilizing an intelligent conflict-resolution queue once connectivity is restored.</p>
</div>
</div>
</div>
</section>

<section>
<h2 class="text-3xl font-bold text-text-primary dark:text-text-primary mb-6 flex items-center gap-3">
<span class="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm"><i class="fas fa-desktop"></i></span>
Enterprise Dashboard & AQL Analytics
</h2>
<div class="bg-bg-secondary dark:bg-bg-secondary border border-border-primary dark:border-border-primary rounded-2xl p-6 md:p-8 shadow-sm">
<p class="text-text-secondary dark:text-text-secondary mb-6 leading-relaxed">The React JS Back-Office empowers administrators and clients with real-time visibility into production quality, driving data-informed decisions.</p>
<div class="space-y-4">
<div class="flex items-start gap-4 p-4 rounded-xl bg-bg dark:bg-bg border border-border-primary">
<div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
<i class="fas fa-calculator text-primary text-xl"></i>
</div>
<div>
<h4 class="font-bold text-text-primary">AQL Statistical Engine</h4>
<p class="text-sm text-text-secondary mt-1">Automated evaluation of production batches using the Acceptance Quality Limit (AQL) methodology. The system mathematically determines the required sample size and dynamically calculates Pass/Fail thresholds based on established critical, major, and minor defect tolerances.</p>
</div>
</div>
<div class="flex items-start gap-4 p-4 rounded-xl bg-bg dark:bg-bg border border-border-primary">
<div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
<i class="fas fa-file-export text-primary text-xl"></i>
</div>
<div>
<h4 class="font-bold text-text-primary">Automated PDF Generation</h4>
<p class="text-sm text-text-secondary mt-1">Instantaneous generation of professional PDF inspection reports, stored securely in Google Storage and distributed to stakeholders via automated emails.</p>
</div>
</div>
<div class="flex items-start gap-4 p-4 rounded-xl bg-bg dark:bg-bg border border-border-primary">
<div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
<i class="fas fa-bell text-primary text-xl"></i>
</div>
<div>
<h4 class="font-bold text-text-primary">Real-time Alerting</h4>
<p class="text-sm text-text-secondary mt-1">Integration with OneSignal pushes critical quality alerts to the relevant managers the moment an inspection fails.</p>
</div>
</div>
</div>
</div>
</section>

<section>
<h2 class="text-3xl font-bold text-text-primary dark:text-text-primary mb-6 flex items-center gap-3">
<span class="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm"><i class="fas fa-images"></i></span>
System Artifacts
</h2>
{{< gallery 
  "images/1.png" "images/3.jpg" "images/6.png" "images/7.png" "images/8.png" "images/9.png" "images/10.png" "images/12.png" "images/13.png" "images/15.png" "images/16.png" "images/17.png" "images/18.png" "images/19.png" "images/21.png" "images/22.png" "images/23.png" "images/24.png" "images/26.png" "images/28.png" "images/29.png" "images/30.png" "images/31.png" "images/34.png" "images/37.png" "images/40.png" "images/41.png" "images/42.png" "images/44.png" "images/48.png" "images/51.png" "images/53.png" "images/55.png" "images/56.png" "images/57.png" "images/58.png" "images/59.png" "images/67.png" "images/68.png" "images/71.png" "images/72.png" "images/73.png"
>}}
</section>

</div>
