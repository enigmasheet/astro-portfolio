export const blogContent: Record<string, string> = {
  'building-scalable-apis-dotnet': `<h1>Building Scalable REST APIs with ASP.NET Core</h1>
<p><em>July 15, 2026</em></p>
<p>Over the past few years, I've built and maintained several production APIs. Here are the patterns and practices that have consistently delivered maintainable, high-performance services.</p>
<h2>Clean Architecture Matters</h2>
<p>Splitting your application into distinct layers — API, Application, Domain, and Infrastructure — keeps concerns separated and makes your codebase testable and adaptable. The domain layer should have zero external dependencies.</p>
<h2>Efficient Data Access</h2>
<p>Entity Framework Core is powerful, but raw performance requires attention. Use projection with <code>Select()</code> to avoid over-fetching, enable query splitting for complex includes, and always measure with <code>ToQueryString()</code> during development.</p>
<h2>Validation at the Edge</h2>
<p>Validate incoming requests as early as possible. FluentValidation combined with ASP.NET Core's built-in model validation gives you clean, reusable validation logic that doesn't clutter your controllers.</p>
<h2>Authentication &amp; Authorization</h2>
<p>JWT-based authentication with refresh tokens is the standard for stateless APIs. Use policy-based authorization to keep access control declarative and centralized rather than scattered across controllers.</p>
<h2>Observability</h2>
<p>Structured logging with Serilog, health checks, and basic metrics give you visibility into production behaviour without needing a full observability stack from day one.</p>
<h2>Key Takeaways</h2>
<ul>
  <li>Clean architecture pays off as the project grows — don't skip it.</li>
  <li>Measure query performance early; don't optimize blind.</li>
  <li>Good validation and auth are non-negotiable for production APIs.</li>
</ul>`,

  'building-with-blazor-wasm': `<h1>Building with Blazor WebAssembly</h1>
<p><em>July 1, 2026</em></p>
<p>Blazor WebAssembly lets you build rich, interactive web UIs using C# instead of JavaScript. Here's what I learned building this very portfolio site.</p>
<h2>Why Blazor?</h2>
<p>As a .NET developer, Blazor lets me share code, libraries, and expertise between frontend and backend. The component model is familiar to anyone who's worked with Razor Pages or MVC.</p>
<h2>Architecture Decisions</h2>
<p>I chose a single-page layout with CSS custom properties for theming. Data is stored in static JSON files loaded via <code>HttpClient</code> — perfect for a portfolio that doesn't need a backend.</p>
<h3>CSS Variables for Theming</h3>
<p>Dark mode is handled entirely via CSS custom properties. A small JavaScript function toggles a <code>.dark</code> class on <code>&lt;html&gt;</code>, and every color updates instantly.</p>
<h2>Deployment</h2>
<p>Azure Static Web Apps provides free hosting with automatic CI/CD from GitHub. The pipeline compiles with AOT and trimming for optimal performance.</p>
<h2>Key Takeaways</h2>
<ul>
  <li>Blazor WASM initial load is larger than JS frameworks, but subsequent interactions are instant.</li>
  <li>AOT compilation improves runtime performance significantly.</li>
  <li>Static JSON files are sufficient for content-driven sites without a CMS.</li>
</ul>`,
};
