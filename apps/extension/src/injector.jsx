import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Content from './content/Content';

const customButton = document.createElement('div');
customButton.id = '__linkedin__jobfit__custom__compare__btn';
const linkedinJobSaveBtn = document.querySelector(".jobs-save-button");
console.log(linkedinJobSaveBtn);

linkedinJobSaveBtn.parentElement.appendChild(customButton);


createRoot(customButton).render(
    <StrictMode>
        <Content />
    </StrictMode>
)