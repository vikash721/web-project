const linkButton = document.querySelectorAll(".icons");
const linkButton1 = document.querySelectorAll(".link-card1");


linkButton.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const getLink = e.target.parentElement.getAttribute("href");
    const copyLinkToClipBoard = navigator.clipboard.writeText(getLink);

    alert("Link has been copied to clipboard");
  })
})

linkButton1.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
  
      const getLink = e.target.parentElement.getAttribute("href");
      const copyLinkToClipBoard = navigator.clipboard.writeText(getLink);
  
      alert("Mail has been copied to clipboard");
    })
  })

function share() {
    // Check if the Web Share API is supported
    if (navigator.share) {
      navigator.share({
        title: 'Check out this link!',
        text: 'Here is a link you might be interested in.',
        url: window.location.href
      })
      .then(() => console.log('Successful share'))
      .catch((error) => console.log('Error sharing', error));
    } else {
      // Fallback for browsers that do not support Web Share API
      console.log('Web Share API not supported');
    }
  }
  



  function submitQuery() {
    // Get the query message from the user
    const queryMessage = prompt("Please enter your message:");
    
    if (queryMessage) {
      // Generate the WhatsApp chat URL with the query message
      const whatsappUrl = `https://wa.me/919958749688?text=${encodeURIComponent(queryMessage)}`;
      
      // Open the WhatsApp chat window
      window.open(whatsappUrl, '_blank');
    }
  }
  