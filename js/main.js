document.addEventListener("DOMContentLoaded", function() {
  const wrappers = document.querySelectorAll('.superior-item-wrapper');

  wrappers.forEach(wrapper => {
    wrapper.addEventListener('click', function(event) {
      if (event.target.classList.contains('select-item')) {
        event.preventDefault();

        const target = event.target.dataset.target;

        const items = wrapper.querySelectorAll('.superior-item');
        items.forEach(item => item.style.display = 'none');

        const selectedItem = wrapper.querySelector(`[data-item="${target}"]`);
        if (selectedItem) {
          selectedItem.style.display = 'block';
        }
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.superior-copier').addEventListener('click', (event) => {
    if (event.target.classList.contains('superior-copy-button')) {
      const button = event.target;
      const targetId = button.getAttribute('data-target');
      const textElement = document.querySelector(`[data-item="${targetId}"]`);
      const textToCopy = textElement.textContent;
      const tooltip = button.nextElementSibling;

      navigator.clipboard.writeText(textToCopy).then(() => {
        tooltip.classList.remove('invisible');
        tooltip.classList.add('opacity-100');

        setTimeout(() => {
          tooltip.classList.add('invisible');
          tooltip.classList.remove('opacity-100');
        }, 4000);
      });
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header');

  window.addEventListener('scroll', () => {
    const currentScrollTop = window.scrollY;

    if (currentScrollTop > 200) {
      header.classList.remove('absolute', 'superior-bg-1');
      header.classList.add('fixed', 'superior-bg-2', 'translate-y-0', 'transition-transform', 'duration-700', 'ease-in-out');
    } else if (currentScrollTop > 100 && currentScrollTop < 200) {
      header.classList.remove('translate-y-0');
      header.classList.add('-translate-y-full');
    } else if (currentScrollTop > 0 && currentScrollTop < 100) {
      header.classList.remove('fixed', 'superior-bg-2', '-translate-y-full', 'transition-transform', 'duration-700', 'ease-in-out');
      header.classList.add('absolute', 'superior-bg-1');
    }

    lastScrollTop = currentScrollTop;
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const openButtons = document.querySelectorAll('.superior-modal-button');
  const modals = document.querySelectorAll('.superior-modal-target');
  const closeButtons = document.querySelectorAll('.close-modal');

  const openModal = (modal) => {
    modal.classList.remove('hidden');
    modal.offsetHeight;
    modal.querySelector('div').classList.remove('translate-x-full');
    modal.querySelector('div').classList.add('translate-x-0');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = (modal) => {
    modal.querySelector('div').classList.add('translate-x-full');
    modal.querySelector('div').classList.remove('translate-x-0');
    setTimeout(() => {
      modal.classList.add('hidden');
      document.body.style.overflow = '';
    }, 500);
  };

  openButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-target');
      const modal = document.querySelector(`[data-item="${targetId}"]`);
      
      if (modal) {
        openModal(modal);
      }
    });
  });

  closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modal = button.closest('.superior-modal-target');
      
      if (modal) {
        closeModal(modal);
      }
    });
  });

  document.addEventListener('click', (event) => {
    if (event.target.classList.contains('superior-modal-target')) {
      const modal = event.target;
      
      if (modal) {
        closeModal(modal);
      }
    }
  });
});
