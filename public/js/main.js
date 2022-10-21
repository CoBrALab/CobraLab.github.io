function toggleBodyOverflow() {
  document.body.style.overflow === 'auto' ?
    document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto';
}

window.addEventListener('load', () => {
  const sidebar = document.querySelector('.sidebar');
  const sidebarBrain = document.querySelector('.sidebar-brain');
  const sidebarToggle = document.querySelector('.sidebar-toggle');
  // Remove image of brain on sidebar if sidebar overflows
  if (sidebar.scrollHeight > window.innerHeight) {
    sidebarBrain.remove();
  }
  document.body.style.overflow = 'auto';
  // On click, toggle css classes and freeze body scrolling
  sidebarToggle.addEventListener('click', () => {
    toggleBodyOverflow();
    sidebar.classList.toggle('expanded');
    sidebarToggle.classList.toggle('active');
  });
});