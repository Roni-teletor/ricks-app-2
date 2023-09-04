export const getStatusSymbol = (status) => {
   return status === "Alive" ? "✅" : status === "Dead" ? "❌" : "❓"
    
};