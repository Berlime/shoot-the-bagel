/**
 * Tooltip utility functions for pricing components
 */

export function setupTooltips(): void {
  const tooltipContainer = document.getElementById('tooltip') as HTMLElement;
  if (!tooltipContainer) return;
  
  // Style the tooltip container
  tooltipContainer.style.position = 'absolute';
  tooltipContainer.style.display = 'none';
  tooltipContainer.style.zIndex = '1000';
  tooltipContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.85)';
  tooltipContainer.style.color = 'white';
  tooltipContainer.style.padding = '8px 12px';
  tooltipContainer.style.borderRadius = '6px';
  tooltipContainer.style.fontSize = '14px';
  tooltipContainer.style.maxWidth = '300px';
  tooltipContainer.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
  tooltipContainer.style.pointerEvents = 'none';
  tooltipContainer.style.transition = 'opacity 0.15s ease-in-out';
  
  // Handle feature tooltips
  const featureTooltips = document.querySelectorAll('.feature-tooltip') as NodeListOf<HTMLElement>;
  const planValueTooltips = document.querySelectorAll('.plan-value-tooltip') as NodeListOf<HTMLElement>;
  const planTitleTooltips = document.querySelectorAll('.plan-tooltip') as NodeListOf<HTMLElement>;
  
  // Handle all types of tooltips
  [featureTooltips, planValueTooltips, planTitleTooltips].forEach(tooltipElements => {
    tooltipElements.forEach(tooltipElement => {
      const tooltipText = tooltipElement.dataset.tooltip || tooltipElement.dataset.description;
      if (!tooltipText) return;
      
      tooltipElement.style.cursor = 'help';
      
      tooltipElement.addEventListener('mouseenter', (e) => {
        tooltipContainer.textContent = tooltipText;
        tooltipContainer.style.display = 'block';
        tooltipContainer.style.opacity = '0';
        setTimeout(() => {
          tooltipContainer.style.opacity = '1';
        }, 10);
        
        positionTooltip(e);
      });
      
      tooltipElement.addEventListener('mousemove', (e) => {
        positionTooltip(e);
      });
      
      tooltipElement.addEventListener('mouseleave', () => {
        tooltipContainer.style.opacity = '0';
        setTimeout(() => {
          tooltipContainer.style.display = 'none';
        }, 150);
      });
    });
  });
  
  function positionTooltip(e: MouseEvent) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollLeft = window.scrollX || document.documentElement.scrollLeft;
    
    // Position the tooltip below the cursor
    const tooltipHeight = tooltipContainer.offsetHeight;
    const tooltipWidth = tooltipContainer.offsetWidth;
    
    // Ensure tooltip stays within viewport
    let top = mouseY + scrollTop + 20; // 20px below cursor
    let left = mouseX + scrollLeft - (tooltipWidth / 2); // centered horizontally
    
    // Adjust if too close to right edge
    if (left + tooltipWidth > window.innerWidth + scrollLeft) {
      left = window.innerWidth + scrollLeft - tooltipWidth - 10;
    }
    
    // Adjust if too close to left edge
    if (left < scrollLeft) {
      left = scrollLeft + 10;
    }
    
    tooltipContainer.style.top = `${top}px`;
    tooltipContainer.style.left = `${left}px`;
  }
}

export function pricingPlanToggleSetup(): void {
  const pricingToggle = document.querySelector(".pricing-plan__toggle") as HTMLInputElement;
  const pricingToggleSlider = document.querySelector(".pricing-plan__slider") as HTMLElement;
  const pricingToggleDot = document.querySelector(".pricing-plan__dot") as HTMLElement;
  const pricingPlans = document.querySelectorAll(".pricing-plan") as NodeListOf<HTMLElement>;
  const kickStartTable = document.getElementById('kickstart-table');
  const jumpStartTable = document.getElementById('jumpstart-table');

  // Initialize the view to show KickStart by default 
  if (kickStartTable && jumpStartTable) {
    kickStartTable.classList.remove('hidden');
    jumpStartTable.classList.add('hidden');
  }

  // Handle pricing card toggling
  pricingPlans.forEach((pricingPlan) => {
    const monthlyPrice = pricingPlan.querySelector(".pricing-plan__monthly-price") as HTMLElement;
    const yearlyPrice = pricingPlan.querySelector(".pricing-plan__yearly-price") as HTMLElement;

    // Ensure monthly price (KickStart) is visible by default
    if (monthlyPrice && yearlyPrice) {
      monthlyPrice.classList.remove("hidden");
      yearlyPrice.classList.add("hidden");
    }

    if (pricingToggle && pricingToggleDot && pricingToggleSlider && monthlyPrice && yearlyPrice) {
      pricingToggle.addEventListener("change", () => {
        if (pricingToggle.checked) {
          // Switch to Jump Start
          monthlyPrice.classList.add("hidden");
          yearlyPrice.classList.remove("hidden");
          pricingToggleDot.classList.add("translate-x-[26px]");
          pricingToggleSlider.classList.add("border-primary-400", "dark:border-primary-600");
          
          // Toggle feature tables if they exist
          if (kickStartTable && jumpStartTable) {
            kickStartTable.classList.add('hidden');
            jumpStartTable.classList.remove('hidden');
            
            // Re-initialize tooltips for the newly visible table
            setupTooltips();
          }
        } else {
          // Switch to Kick Start
          monthlyPrice.classList.remove("hidden");
          yearlyPrice.classList.add("hidden");
          pricingToggleDot.classList.remove("translate-x-[26px]");
          pricingToggleSlider.classList.remove("border-primary-400", "dark:border-primary-600");
          
          // Toggle feature tables if they exist
          if (kickStartTable && jumpStartTable) {
            kickStartTable.classList.remove('hidden');
            jumpStartTable.classList.add('hidden');
            
            // Re-initialize tooltips for the newly visible table
            setupTooltips();
          }
        }
      });
    }
  });
} 