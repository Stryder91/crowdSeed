// For HTML injection
export function createMarkup(mytext) {
  return { __html: mytext };
}

export const formatTimestamp = timestamp => {
  let humanDate = new Intl.DateTimeFormat('fr-FR', { 
    year: 'numeric', 
    month: '2-digit', 
    day: '2-digit', 
    hour: '2-digit', 
    minute: '2-digit', 
  }).format(timestamp);
  return humanDate;
}