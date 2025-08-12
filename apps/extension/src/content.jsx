import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Content from './content';


const customButton = document.createElement('div');
customButton.id = 'linkedin__jobfit__custom__compare__btn';


const linkedinJobSaveBtn = document.querySelector(".jobs-save-button");

linkedinJobSaveBtn.parentElement.appendChild(customButton);

customButton.addEventListener('click', () => {
  alert('Custom button clicked!');
  // You can add any custom logic here
});

createRoot(customButton).render(
    <StrictMode>
        <Content />
    </StrictMode>
)