      function setFavicon(emoji) {
        const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 72 72'><text y='50%' x='50%' text-anchor='middle' dominant-baseline='central' font-size='56'>${emoji}</text></svg>`;
        const url = 'data:image/svg+xml,' + encodeURIComponent(svg);
        let link = document.querySelector("link[rel='icon']");
        if (!link) {
          link = document.createElement('link');
          link.rel = 'icon';
          document.head.appendChild(link);
        }
        link.href = url;
      }
      function setTitleAndFavicon(hidden) {
        if (hidden) {
          document.title = '¡Vuelve pronto!';
          setFavicon('😢');
        } else {
          document.title = 'DARLING.DEV';
          setFavicon('👨‍💻');
        }
      }
      document.addEventListener('visibilitychange', function() {
        setTitleAndFavicon(document.hidden);
      });
      // Inicializa al cargar
      setTitleAndFavicon(document.hidden);