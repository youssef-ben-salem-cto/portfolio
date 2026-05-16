import re

with open("layouts/partials/contact.html", "r") as f:
    content = f.read()

# Replace the inner grid block
new_grid = """          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-8">
            <!-- Email Tile -->
            {{ if .Site.Params.email }}
            <a href="mailto:{{ .Site.Params.email }}" class="group relative flex flex-col items-center justify-center p-8 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300 overflow-hidden text-center" onclick="copyContactEmail(event, '{{ .Site.Params.email }}')">
              <div class="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-5 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300 z-10 shadow-inner">
                <i class="fas fa-envelope text-2xl"></i>
              </div>
              <div class="relative z-10">
                <p class="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-2">Email</p>
                <p class="text-sm md:text-base font-semibold text-text-primary dark:text-text-primary group-hover:text-primary transition-colors">{{ .Site.Params.email }}</p>
              </div>
            </a>
            {{ end }}

            <!-- LinkedIn Tile -->
            {{ if .Site.Params.linkedin_url }}
            <a href="{{ .Site.Params.linkedin_url }}" target="_blank" rel="noopener noreferrer" class="group relative flex flex-col items-center justify-center p-8 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-[#0077b5]/10 hover:-translate-y-1 transition-all duration-300 overflow-hidden text-center">
              <div class="absolute inset-0 bg-gradient-to-br from-[#0077b5]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="w-14 h-14 rounded-full bg-[#0077b5]/10 flex items-center justify-center text-[#0077b5] mb-5 group-hover:scale-110 group-hover:bg-[#0077b5] group-hover:text-white transition-all duration-300 z-10 shadow-inner">
                <i class="fab fa-linkedin-in text-2xl"></i>
              </div>
              <div class="relative z-10">
                <p class="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-2">LinkedIn</p>
                <p class="text-sm md:text-base font-semibold text-text-primary dark:text-text-primary group-hover:text-[#0077b5] transition-colors">{{ .Site.Params.linkedin_text }}</p>
              </div>
            </a>
            {{ end }}

            <!-- GitHub Tile -->
            {{ if .Site.Params.github_url }}
            <a href="{{ .Site.Params.github_url }}" target="_blank" rel="noopener noreferrer" class="group relative flex flex-col items-center justify-center p-8 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-gray-500/10 hover:-translate-y-1 transition-all duration-300 overflow-hidden text-center">
              <div class="absolute inset-0 bg-gradient-to-br from-gray-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="w-14 h-14 rounded-full bg-gray-100 dark:bg-zinc-800 flex items-center justify-center text-gray-800 dark:text-gray-200 mb-5 group-hover:scale-110 group-hover:bg-gray-800 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-gray-900 transition-all duration-300 z-10 shadow-inner">
                <i class="fab fa-github text-2xl"></i>
              </div>
              <div class="relative z-10">
                <p class="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-2">GitHub</p>
                <p class="text-sm md:text-base font-semibold text-text-primary dark:text-text-primary group-hover:text-gray-800 dark:group-hover:text-white transition-colors">{{ .Site.Params.github_text }}</p>
              </div>
            </a>
            {{ end }}

            <!-- Location Tile -->
            {{ if .Site.Language.Params.hero_location }}
            <div class="group relative flex flex-col items-center justify-center p-8 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-accent/10 hover:-translate-y-1 transition-all duration-300 overflow-hidden text-center cursor-default">
              <div class="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-5 group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-300 z-10 shadow-inner">
                <i class="fas fa-map-marker-alt text-2xl"></i>
              </div>
              <div class="relative z-10">
                <p class="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-2">Location</p>
                <p class="text-sm md:text-base font-semibold text-text-primary dark:text-text-primary group-hover:text-accent transition-colors">{{ .Site.Language.Params.hero_location }}</p>
              </div>
            </div>
            {{ end }}
          </div>"""

content = re.sub(r'<div class="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">.*?(?=        </div>\n        {{ end }})', new_grid + "\n", content, flags=re.DOTALL)

with open("layouts/partials/contact.html", "w") as f:
    f.write(content)
