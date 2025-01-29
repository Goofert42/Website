<html><head>
    <base href=".">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Goofert42</title>
    <link rel="icon" type="image/png" href="favicon.png?">
    <style>
    :root {
      --bg: #ffffff; 
      --text: #1a1a1a;
      --card-bg: #f0f0f0;
      --shadow: rgba(0,0,0,0.1);
      --nav-bg: #f8f8f8;
      --dropdown-bg: #ffffff;
      --hover-bg: rgba(0,0,0,0.05);
      --border: #e0e0e0;
    }
    
    [data-theme="dark"] {
      --bg: #1a1a1a;
      --text: #ffffff;
      --card-bg: #2d2d2d;
      --shadow: rgba(0,0,0,0.3);
      --nav-bg: #232323;
      --dropdown-bg: #2d2d2d;
      --hover-bg: rgba(255,255,255,0.1);
      --border: #404040;
    }
    
    body {
      font-family: 'Inter', sans-serif;
      background: var(--bg);
      color: var(--text);
      margin: 0;
      padding: 0;
      transition: all 0.3s ease;
    }
    
    .nav-container {
      background: var(--nav-bg);
      padding: 15px 20px;
      box-shadow: 0 2px 4px var(--shadow);
      position: sticky;
      top: 0;
      z-index: 100;
    }
    
    .nav-content {
      max-width: 1000px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 15px;
    }
    
    .nav-left {
      display: flex;
      align-items: center;
      gap: 20px;
    }
    
    .profile-pic {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: var(--card-bg);
      overflow: hidden;
    }
    
    .profile-pic img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    .nav-right {
      display: flex;
      align-items: center;
      gap: 15px;
    }
    
    .nav-links {
      display: flex;
      gap: 15px;
    }
    
    .nav-link {
      color: var(--text);
      text-decoration: none;
      font-weight: 500;
      transition: all 0.3s;
      position: relative;
      padding: 8px 12px;
      border-radius: 6px;
    }
    
    .nav-link:hover {
      background: var(--hover-bg);
    }
    
    .nav-link.dropdown-toggle {
      display: flex;
      align-items: center;
      gap: 4px;
    }
    
    .nav-link.dropdown-toggle::after {
      content: '';
      width: 0;
      height: 0;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-top: 5px solid currentColor;
      transition: transform 0.2s ease;
    }
    
    .dropdown:hover .nav-link.dropdown-toggle::after {
      transform: rotate(180deg);
    }
    
    .dropdown {
      position: relative;
      display: inline-block;
    }
    
    .dropdown-content {
      visibility: hidden;
      opacity: 0;
      position: absolute;
      background: var(--dropdown-bg);
      min-width: 180px;
      box-shadow: 0 8px 16px var(--shadow);
      border-radius: 8px;
      z-index: 1;
      top: 100%;
      right: 0;
      margin-top: 10px;
      transform: translateY(-10px);
      transition: all 0.3s ease;
      border: 1px solid var(--border);
    }
    
    .dropdown-content a {
      color: var(--text);
      padding: 12px 16px;
      text-decoration: none;
      display: block;
      transition: background 0.3s;
      border-bottom: 1px solid var(--border);
    }
    
    .dropdown-content a:last-child {
      border-bottom: none;
    }
    
    .dropdown-content a:first-child {
      border-radius: 8px 8px 0 0;
    }
    
    .dropdown-content a:last-child {
      border-radius: 0 0 8px 8px;
    }
    
    .dropdown-content a:hover {
      background: var(--hover-bg);
    }
    
    .dropdown:hover .dropdown-content {
      visibility: visible;
      opacity: 1;
      transform: translateY(0);
    }
    
    .hamburger {
      display: none;
      cursor: pointer;
      padding: 10px;
      background: none;
      border: none;
      color: var(--text);
    }
    
    .hamburger svg {
      width: 24px;
      height: 24px;
    }
    
    .menu-content {
      display: flex;
      align-items: center;
      gap: 15px;
    }
    
    .container {
      max-width: 1000px;
      margin: 0 auto;
      padding: 20px;
    }
    
    .theme-toggle {
      background: none;
      border: none;
      cursor: pointer;
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--text);
      border-radius: 6px;
      transition: background 0.3s;
    }
    
    .theme-toggle:hover {
      background: var(--hover-bg);
    }
    
    .theme-toggle svg {
      width: 20px;
      height: 20px;
      fill: currentColor;
    }
    
    .header-text {
      text-align: center;
      margin: 40px 0;
    }
    
    .projects {
      display: flex;
      flex-direction: column;
      gap: 20px;
      margin: 40px 0;
      max-width: 800px;
      margin-left: auto;
      margin-right: auto;
    }
    
    .project-card {
      background: var(--card-bg);
      padding: 15px;
      border-radius: 10px;
      box-shadow: 0 4px 6px var(--shadow);
      transition: transform 0.3s;
      border: 1px solid var(--border);
      width: calc(100% - 30px); /* Account for padding */
    }
    
    .project-card:hover {
      transform: translateY(-5px);
    }
    
    .project-card h3 {
      border-bottom: 2px solid var(--border);
      padding-bottom: 10px;
      margin-bottom: 15px;
    }
    
    .footer {
      text-align: center;
      padding: 20px;
      margin-top: 150px;
      border-top: 1px solid var(--border);
    }
    
    .social-links {
      display: flex;
      justify-content: center;
      gap: 20px;
      margin-top: 15px;
    }
    
    .social-link {
      color: var(--text);
      transition: transform 0.3s;
      padding: 8px;
      border-radius: 6px;
    }
    
    .social-link:hover {
      transform: scale(1.1);
      background: var(--hover-bg);
    }
    
    h1 {
      font-size: 2.5em;
      margin-bottom: 10px;
    }
    
    .subtitle {
      color: #666;
      margin-bottom: 40px;
    }
    
    [data-theme="dark"] .subtitle {
      color: #999;
    }
    
    .section {
      margin: 60px 0;
    }
    
    .section h2 {
      text-align: center;
      font-size: 2em;
      margin-bottom: 30px;
      padding-bottom: 10px;
      border-bottom: 2px solid var(--border);
    }
    
    .contact-form {
      text-align: center;
      margin: 0 auto;
      max-width: 600px;
    }
    
    .contact-form a {
      color: #6d94dd;
      text-decoration: none;
    }
    
    .contact-form a:hover {
      text-decoration: underline;
    }
    
    .form-group,
    .form-group label,
    .form-group input,
    .form-group textarea,
    .submit-btn {
      display: none;
    }
    
    .visit-btn {
      display: inline-block;
      background: var(--nav-bg);
      color: var(--text);
      padding: 8px 16px;
      border-radius: 6px;
      text-decoration: none;
      transition: all 0.3s;
      border: 1px solid var(--border);
      margin-top: 15px;
    }
    
    .visit-btn:hover {
      background: var(--hover-bg);
      transform: translateY(-2px);
    }
    
    .floating-dots {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: -1;
      overflow: hidden;
    }
    
    .dot {
      position: absolute;
      background: var(--text);
      opacity: 0.1;
      border-radius: 50%;
      animation: float 20s infinite linear;
    }
    
    .status-badge {
      text-align: center;
      margin-top: 20px;
      margin-left: 80px;
    }
    
    @keyframes float {
      0% {
        transform: translateY(100vh) translateX(0);
      }
      100% {
        transform: translateY(-100px) translateX(100px);
      }
    }
    
    @media (max-width: 768px) {
      .container {
        padding: 15px;
      }
      
      h1 {
        font-size: 2em;
      }
      
      .section h2 {
        font-size: 1.5em;
      }
    
      .nav-container {
        padding: 10px;
      }
    
      .nav-content {
        justify-content: center;
      }
    
      .hamburger {
        display: block;
      }
    
      .menu-content {
        position: fixed;
        flex-direction: column;
        top: 70px;
        right: -100%;
        background: var(--nav-bg);
        height: calc(100vh - 70px);
        width: 250px;
        padding: 20px;
        transition: right 0.3s ease;
        border-left: 1px solid var(--border);
      }
    
      .menu-content.active {
        right: 0;
      }
      
      .nav-right {
        width: auto;
      }
    
      .nav-links {
        flex-direction: column;
        width: 100%;
      }
    
      .dropdown-content {
        position: static;
        width: 100%;
        margin-top: 0;
        transform: none;
        box-shadow: none;
        border: none;
        border-radius: 0;
        background: var(--hover-bg);
      }
    
      .dropdown:hover .dropdown-content {
        transform: none;
      }
    }
    
    @media (max-width: 480px) {
      .nav-links {
        flex-direction: column;
        align-items: center;
        gap: 10px;
      }
    
      .social-links {
        flex-wrap: wrap;
        gap: 15px;
      }
    
      .header-text {
        margin: 20px 0;
      }
    
      .section {
        margin: 30px 0;
      }
    }
    </style></head><body>
    <div class="floating-dots" id="floatingDots"></div>
    <nav class="nav-container">
      <div class="nav-content">
        <div class="nav-left">
          <div class="profile-pic">
            <img src="https://kappa.lol/lBALd" alt="Profile Picture">
          </div>
        </div>
        <button class="hamburger" id="hamburgerBtn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M3 12h18M3 6h18M3 18h18"/>
          </svg>
        </button>
        <div class="menu-content">
          <div class="nav-links">
            <a href="https://goofert.org" class="nav-link">Home</a>
            <div class="dropdown">
              <a href="" class="nav-link dropdown-toggle">Projects</a>
              <div class="dropdown-content">
                <a href="https://top.gg/bot/1325204043274125374">Embedify</a>
                <a href="https://github.com/Goofert42/MineTimer">MineTimer</a>
              </div>
            </div>
          </div>
          <button class="theme-toggle" id="themeToggle">
            <svg class="moon" viewBox="0 0 24 24">
              <path d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"/>
            </svg>
            <svg class="sun" viewBox="0 0 24 24" style="display: none;">
                <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"/>
            </svg>
          </button>
        </div>
      </div>
    </nav>
    
    <div class="container">
      <div class="header-text">
        <h1>Goofert42</h1>
        <p class="subtitle">A hobby developer that makes things</p>
      </div>
      
      <section class="section" id="contact">
        <h2>Contact</h2>
        <div class="contact-form">
            <p>You can contact me by either sending an email to <a href="mailto:goofert42@gmail.com">goofert42@gmail.com</a> or through any of the links at the bottom of the page.</p>
        </div>
      </section>
      
      <section class="section" id="projects">
        <h2>Projects</h2>
        <div class="projects">
          <div class="project-card" id="embedify">
            <h3>Embedify</h3>
            <p>Create fully customizable discord embeds using Embedify. Add the bot using the button below!</p>
            <a href="https://top.gg/bot/1325204043274125374" target="_blank" class="visit-btn">View top.gg</a>
            <a href="https://discord.com/oauth2/authorize?client_id=1325204043274125374" target="_blank" class="visit-btn">Add Bot</a>
          </div>
          <div class="project-card" id="minetimer">
            <h3>MineTimer</h3>
            <p>Record your Minecraft playtime using MineTimer. All you need to do is install it and nothing more. Easy!</p>
            <a href="https://github.com/Goofert42/MineTimer" target="_blank" class="visit-btn">View GitHub</a>
            <a href="https://github.com/Goofert42/MineTimer/releases/latest/download/MineTimer-Installer.exe" target="_blank" class="visit-btn">Download</a>
          </div>
        </div>
      </section>
    
      <footer class="footer">
        <p>Designed by Goofert</p>
        <div class="social-links">
          <a href="https://github.com/Goofert42" class="social-link" target="_blank" title="GitHub">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a href="https://discord.com/invite/u3NDJycP5v" class="social-link" target="_blank" title="Discord">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
            </svg>
          </a>
          <a href="https://youtube.com/@goofert42" class="social-link" target="_blank" title="YouTube">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
          <a href="https://twitch.tv/goofert42" class="social-link" target="_blank" title="Twitch">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/>
            </svg>
          </a>
        </div>
        <div class="status-badge">
          <iframe src="https://status.goofert.org/badge?theme=dark" width="250" height="30" frameborder="0" scrolling="no"></iframe>
        </div>
      </footer>
    </div>
    
    <script>
        const themeToggle = document.getElementById('themeToggle');
        const moonIcon = themeToggle.querySelector('.moon');
        const sunIcon = themeToggle.querySelector('.sun');
        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
        const hamburgerBtn = document.getElementById('hamburgerBtn');
        const menuContent = document.querySelector('.menu-content');
        function setTheme(isDark) {
        if (isDark) {
            document.body.setAttribute('data-theme', 'dark');
            moonIcon.style.display = 'none';
            sunIcon.style.display = 'block';
        } else {
            document.body.removeAttribute('data-theme');
            moonIcon.style.display = 'block';
            sunIcon.style.display = 'none';
        }
        }
        hamburgerBtn.addEventListener('click', () => {
        menuContent.classList.toggle('active');
        });
        document.addEventListener('click', e => {
        if (!hamburgerBtn.contains(e.target) && !menuContent.contains(e.target) && menuContent.classList.contains('active')) {
            menuContent.classList.remove('active');
        }
        });
        setTheme(prefersDarkScheme.matches);
        themeToggle.addEventListener('click', () => {
        const currentTheme = document.body.getAttribute('data-theme');
        setTheme(currentTheme !== 'dark');
        });
        prefersDarkScheme.addEventListener('change', e => {
        setTheme(e.matches);
        });
        function createDots() {
            const container = document.getElementById('floatingDots');
            const dotCount = 50;
            for (let i = 0; i < dotCount; i++) {
                const dot = document.createElement('div');
                dot.className = 'dot';
                const size = Math.random() * 10 + 5;
                dot.style.width = `${size}px`;
                dot.style.height = `${size}px`;
                dot.style.left = `${Math.random() * 100}vw`;
                dot.style.animationDelay = `${Math.random() * 20}s`;
                container.appendChild(dot);
            }
        }
        createDots();
    </script>
    
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&amp;display=swap" rel="stylesheet">
    </body></html>
