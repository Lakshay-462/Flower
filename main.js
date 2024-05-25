
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
      let beat = new Audio("ChristianBasso&HaienQiu-Flowers.mp3");
      beat.play();
    }, 1000);
  };
  