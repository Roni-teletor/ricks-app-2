export const getStatusSymbol = (status) => (
   status === "Alive" ? "✅" : (status === "Dead" ? "❌" : "❓")
 );
 
 export const getSpeciesSymbol = (species) => (
   species === "Human" ? "🧍" : (species === "Alien" ? "👽" : "❓")
 );
 
 export const getGenderSymbol = (gender) => (
   gender === "Male" ? "👨" : (gender === "Female" ? "👩" : "")
 );