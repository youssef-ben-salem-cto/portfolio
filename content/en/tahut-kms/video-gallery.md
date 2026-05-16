---
title: "Interactive Video Gallery"
summary: "Explore the end-to-end user journeys, administration flows, and real-time processing capabilities of the Tahut KMS platform through high-definition demonstrations."
weight: 10
---

The Tahut KMS interface is built to be fast, reactive, and highly secure. The following video demonstrations showcase the platform's core workflows, from biometric authentication to massive asynchronous document ingestion.

<hr class="my-12 border-gray-200 dark:border-gray-700">

## <i class="fas fa-shield-alt text-cyan-500"></i> Authentication & Access Control

<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">

  <div class="bg-white dark:bg-gray-800 rounded-2xl p-4 border border-gray-100 dark:border-gray-700 shadow-sm flex flex-col h-full">
    <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-1">WebAuthn / Passkeys Login</h3>
    <p class="text-sm text-gray-500 dark:text-gray-400 mb-4">Passwordless, phishing-resistant authentication using hardware keys.</p>
    <video controls preload="metadata" class="w-full h-auto rounded-lg bg-black mt-auto">
      <source src="{{< relurl "images/tahut-kms/videos/auth/login-web-authn.mov" >}}" type="video/mp4">
    </video>
  </div>

  <div class="bg-white dark:bg-gray-800 rounded-2xl p-4 border border-gray-100 dark:border-gray-700 shadow-sm flex flex-col h-full">
    <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-1">Enterprise SSO (Auth0)</h3>
    <p class="text-sm text-gray-500 dark:text-gray-400 mb-4">Seamless integration with corporate identity providers.</p>
    <video controls preload="metadata" class="w-full h-auto rounded-lg bg-black mt-auto">
      <source src="{{< relurl "images/tahut-kms/videos/auth/sso-auth0-login.mp4" >}}" type="video/mp4">
    </video>
  </div>

  <div class="bg-white dark:bg-gray-800 rounded-2xl p-4 border border-gray-100 dark:border-gray-700 shadow-sm flex flex-col h-full">
    <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-1">Bulk User Provisioning</h3>
    <p class="text-sm text-gray-500 dark:text-gray-400 mb-4">Administrators can import and invite multiple users simultaneously.</p>
    <video controls preload="metadata" class="w-full h-auto rounded-lg bg-black mt-auto">
      <source src="{{< relurl "images/tahut-kms/videos/auth/bulk-user.mp4" >}}" type="video/mp4">
    </video>
  </div>

  <div class="bg-white dark:bg-gray-800 rounded-2xl p-4 border border-gray-100 dark:border-gray-700 shadow-sm flex flex-col h-full">
    <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-1">Accepting Invitations</h3>
    <p class="text-sm text-gray-500 dark:text-gray-400 mb-4">The secure onboarding flow for newly invited platform users.</p>
    <video controls preload="metadata" class="w-full h-auto rounded-lg bg-black mt-auto">
      <source src="{{< relurl "images/tahut-kms/videos/auth/accept-invitation.mp4" >}}" type="video/mp4">
    </video>
  </div>

</div>

<hr class="my-12 border-gray-200 dark:border-gray-700">

## <i class="fas fa-layer-group text-purple-500"></i> Knowledge Collections

<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">

  <div class="bg-white dark:bg-gray-800 rounded-2xl p-4 border border-gray-100 dark:border-gray-700 shadow-sm flex flex-col h-full">
    <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-1">Creating a Collection</h3>
    <p class="text-sm text-gray-500 dark:text-gray-400 mb-4">Configuring isolated data silos for specific departmental use-cases.</p>
    <video controls preload="metadata" class="w-full h-auto rounded-lg bg-black mt-auto">
      <source src="{{< relurl "images/tahut-kms/videos/collection/create-collection.mov" >}}" type="video/mp4">
    </video>
  </div>

  <div class="bg-white dark:bg-gray-800 rounded-2xl p-4 border border-gray-100 dark:border-gray-700 shadow-sm flex flex-col h-full">
    <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-1">Asynchronous Ingestion Pipeline</h3>
    <p class="text-sm text-gray-500 dark:text-gray-400 mb-4">Live Server-Sent Event (SSE) progress tracking during mass document vectorization.</p>
    <video controls preload="metadata" class="w-full h-auto rounded-lg bg-black mt-auto">
      <source src="{{< relurl "images/tahut-kms/videos/collection/ingestion.mp4" >}}" type="video/mp4">
    </video>
  </div>

</div>

<hr class="my-12 border-gray-200 dark:border-gray-700">

## <i class="fas fa-comment-dots text-green-500"></i> Workspace & Interaction

<div class="grid grid-cols-1 gap-8 mt-6 max-w-4xl mx-auto">

  <div class="bg-white dark:bg-gray-800 rounded-2xl p-4 border border-gray-100 dark:border-gray-700 shadow-sm flex flex-col h-full">
    <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-1">AI Chat Workspace</h3>
    <p class="text-sm text-gray-500 dark:text-gray-400 mb-4">Real-time interaction with the LLM, fully grounded in the secure document context.</p>
    <video controls preload="metadata" class="w-full h-auto rounded-lg bg-black mt-auto">
      <source src="{{< relurl "images/tahut-kms/videos/workspace/chat.mp4" >}}" type="video/mp4">
    </video>
  </div>

</div>

<hr class="my-12 border-gray-200 dark:border-gray-700">

## <i class="fas fa-cogs text-orange-500"></i> System Administration

<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">

  <div class="bg-white dark:bg-gray-800 rounded-2xl p-4 border border-gray-100 dark:border-gray-700 shadow-sm flex flex-col h-full">
    <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-1">Adding Custom LLMs</h3>
    <p class="text-sm text-gray-500 dark:text-gray-400 mb-4">Dynamically connecting new local or cloud models to the inference engine.</p>
    <video controls preload="metadata" class="w-full h-auto rounded-lg bg-black mt-auto">
      <source src="{{< relurl "images/tahut-kms/videos/settings/add-models.mp4" >}}" type="video/mp4">
    </video>
  </div>

  <div class="bg-white dark:bg-gray-800 rounded-2xl p-4 border border-gray-100 dark:border-gray-700 shadow-sm flex flex-col h-full">
    <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-1">System Maintenance Mode</h3>
    <p class="text-sm text-gray-500 dark:text-gray-400 mb-4">Global lockdown mode preventing ingestion or chat during critical database migrations.</p>
    <video controls preload="metadata" class="w-full h-auto rounded-lg bg-black mt-auto">
      <source src="{{< relurl "images/tahut-kms/videos/settings/maintenance.mp4" >}}" type="video/mp4">
    </video>
  </div>

</div>
