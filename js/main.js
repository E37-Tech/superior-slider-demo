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
  const openHeaderButtons = document.querySelectorAll('.superior-header-modal-button');
  const closeHeaderButtons = document.querySelectorAll('.close-header-modal');

  const openHeaderModal = (headerModal) => {
    headerModal.classList.remove('hidden');
    headerModal.offsetHeight;
    headerModal.querySelector('div').classList.remove('translate-x-full');
    headerModal.querySelector('div').classList.add('translate-x-0');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = (headerModal) => {
    headerModal.querySelector('div').classList.add('translate-x-full');
    headerModal.querySelector('div').classList.remove('translate-x-0');
    setTimeout(() => {
      headerModal.classList.add('hidden');
      document.body.style.overflow = '';
    }, 500);
  };

  openHeaderButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-target');
      const headerModal = document.querySelector(`[data-item="${targetId}"]`);
      
      if (headerModal) {
        openHeaderModal(headerModal);
      }
    });
  });

  closeHeaderButtons.forEach(button => {
    button.addEventListener('click', () => {
      const headerModal = button.closest('.superior-header-modal-target');
      
      if (headerModal) {
        closeModal(headerModal);
      }
    });
  });

  document.addEventListener('click', (event) => {
    if (event.target.classList.contains('superior-header-modal-target')) {
      const headerModal = event.target;
      
      if (headerModal) {
        closeModal(headerModal);
      }
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const modalButtons = document.querySelectorAll('.superior-modal-button');
  const body = document.body;

  modalButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-target');
      const targetModal = document.querySelector(`[data-item="${targetId}"]`);
      
      if (targetModal) {
        targetModal.classList.remove('hidden');
        body.classList.add('overflow-hidden');
      }
    });
  });

  document.querySelectorAll('.superior-modal-target').forEach(modal => {
    modal.addEventListener('click', event => {
      if (event.target === modal) {
        modal.classList.add('hidden');
        body.classList.remove('overflow-hidden');
      }
    });

    modal.querySelector('.close-modal').addEventListener('click', () => {
      modal.classList.add('hidden');
      body.classList.remove('overflow-hidden');
    });
  });
});
