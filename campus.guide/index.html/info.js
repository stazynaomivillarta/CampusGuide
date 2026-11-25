document.addEventListener("DOMContentLoaded", function() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  // Select all cards inside the grid
  const filterItems = document.querySelectorAll('.filter-item');
  const unitCount = document.getElementById('unit-count');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // 1. Reset all buttons to default white style
      filterButtons.forEach(btn => {
        btn.style.background = 'var(--white)';
        btn.style.color = 'var(--text-main)';
        btn.style.border = '1px solid var(--border)';
      });

      // 2. Highlight the clicked button
      button.style.background = 'var(--navy)';
      button.style.color = 'var(--white)';
      button.style.border = '1px solid var(--navy)';

      // 3. Filter the cards
      const filterValue = button.getAttribute('data-filter');
      let visibleCount = 0;

      filterItems.forEach(item => {
        if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
          item.style.display = 'flex';
          visibleCount++;
        } else {
          item.style.display = 'none';
        }
      });

      // 4. Update the count text
      if (unitCount) {
        unitCount.innerText = `${visibleCount} campus unit(s)`;
      }
    });
  });
});