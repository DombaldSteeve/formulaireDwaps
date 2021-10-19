
const tabs = [
    { label: "Accueil", active: true, target: "#home" },
    { label: "Présentation", active: false, target: "#presentation" },
    { label: "Services", active: false, target: "#services" },
    { label: "Contact", active: false, target: "#contact" },
  ];
  
  const menuHTML = `<ul>
    ${tabs.map(({ label, active, target }) => (
      `<li class="${active && 'active'}">
        <a href="${target}>">
          ${label}
        </a>
      </li>`
    )).join('')}
  </ul>`;
  
  console.log(menuHTML);
