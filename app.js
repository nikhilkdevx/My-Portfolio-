const sliders = document.querySelectorAll('.details input[type="range"]');

sliders.forEach(slider => {
  function updateSlider() {
    const value = (slider.value - slider.min) / (slider.max - slider.min) * 100;

    slider.style.background = `linear-gradient(to right, #22D3EE ${value}%, #E2E8F0 ${value}%)`;
  }

  // Run once on load
  updateSlider();

  // Update on drag
  slider.addEventListener("input", updateSlider);
});