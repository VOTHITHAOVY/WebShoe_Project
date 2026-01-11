
  const buttons = document.querySelectorAll('.size-btn')

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.disabled) return;

      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

