function calculateTotal() {
    const ADULT_PRICE = 10;
    const CHILD_PRICE = 5;
    
    let adultTickets = parseInt(document.getElementById("adultTickets").value);
    let childTickets = parseInt(document.getElementById("childTickets").value);
    
    let totalAmount = (adultTickets * ADULT_PRICE) + (childTickets * CHILD_PRICE);
    
    document.getElementById("totalAmount").value = totalAmount.toFixed(2);
}